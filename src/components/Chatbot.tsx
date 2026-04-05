import React, { useState, useEffect, useRef } from "react";
import { IconX, IconSend2, IconRobotFace } from "@tabler/icons-react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import profile from "../assets/images/perfil.png";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { getIntlLocale } from "../lib/localization";

// Importante: No exponer las claves aquí, se obtienen de .env
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ME = import.meta.env.VITE_EMAILJS_TEMPLATE_ME; // Plantilla que te llegará a ti
const EMAILJS_TEMPLATE_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_USER; // Plantilla auto-respuesta al usuario
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const email = import.meta.env.VITE_EMAIL;

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type ChatStep =
  | "initial"
  | "waiting_contact"
  | "contact_received"
  | "look_around"
  | "finished";

const Chatbot = ({ isOpen, onClose }: Props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const locale = getIntlLocale(i18n.resolvedLanguage);
  const createTimestamp = () =>
    new Date().toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit",
    });
  const createInitialMessage = (): Message => ({
    id: 1,
    text: t("chatbot.initialMessage"),
    sender: "bot",
    timestamp: createTimestamp(),
  });

  const [messages, setMessages] = useState<Message[]>(() => [
    createInitialMessage(),
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatStep, setChatStep] = useState<ChatStep>("initial");
  const [viewMode, setViewMode] = useState<"home" | "chat">("home");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const initialMessage: Message = {
      id: 1,
      text: t("chatbot.initialMessage"),
      sender: "bot",
      timestamp: new Date().toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => {
      if (prev.length === 1 && prev[0]?.id === 1 && prev[0]?.sender === "bot") {
        return [initialMessage];
      }

      return prev;
    });
  }, [locale, t]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, chatStep, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t("chatbot.greetingMorning");
    if (hour < 19) return t("chatbot.greetingAfternoon");
    return t("chatbot.greetingEvening");
  };

  const addBotMessages = (texts: string[], newStep: ChatStep) => {
    setIsTyping(true);
    let delay = 0;
    texts.forEach((text, index) => {
      delay += 1000 + text.length * 20; // Simulated typing delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + index,
            text,
            sender: "bot",
            timestamp: createTimestamp(),
          },
        ]);
        if (index === texts.length - 1) {
          setIsTyping(false);
          setChatStep(newStep);
        }
      }, delay);
    });
  };

  const handleOptionSelect = (option: number) => {
    setViewMode("chat");
    if (option === 1) {
      if (localStorage.getItem("contact_sent") === "true") {
        const userMsg: Message = {
          id: Date.now(),
          text: t("chatbot.options.contact"),
          sender: "user",
          timestamp: createTimestamp(),
        };
        setMessages((prev) => [...prev, userMsg]);
        setChatStep("finished");
        addBotMessages(
          [
            t("chatbot.messages.alreadyReceived"),
          ],
          "finished",
        );
        return;
      }

      const userMsg: Message = {
        id: Date.now(),
        text: t("chatbot.options.contact"),
        sender: "user",
        timestamp: createTimestamp(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setChatStep("waiting_contact"); // Optimistically clear buttons

      addBotMessages(
        [
          t("chatbot.messages.contactStart1"),
          t("chatbot.messages.contactStart2"),
          t("chatbot.messages.contactStart3"),
        ],
        "waiting_contact",
      );
    } else if (option === 2) {
      const userMsg: Message = {
        id: Date.now(),
        text: t("chatbot.options.browse"),
        sender: "user",
        timestamp: createTimestamp(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setChatStep("look_around"); // Clear buttons

      addBotMessages(
        [
          t("chatbot.messages.browse1"),
          t("chatbot.messages.browse2"),
          t("chatbot.messages.browse3"),
        ],
        "look_around",
      );
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setViewMode("chat");

    const userMsg: Message = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: createTimestamp(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    if (chatStep === "initial") {
      addBotMessages(
        [t("chatbot.messages.initialPrompt")],
        "initial",
      );
      return;
    }

    if (chatStep === "waiting_contact") {
      const emailMatch = inputValue.match(/[\w.-]+@[\w.-]+\.\w+/);
      const phoneMatch = inputValue.match(/\b\d{7,15}\b/);

      if (!emailMatch && !phoneMatch) {
        addBotMessages(
          [t("chatbot.messages.invalidContact")],
          "waiting_contact",
        );
        return;
      }

      localStorage.setItem("contact_sent", "true");
      setChatStep("contact_received");
      addBotMessages(
        [
          t("chatbot.messages.received1"),
          t("chatbot.messages.received2"),
        ],
        "finished",
      );

      // 1. Envío de correo a ti (Gianpierre)
      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ME,
          {
            message: inputValue.trim(),
            user_email: emailMatch ? emailMatch[0] : "No dejó correo",
            user_phone: phoneMatch ? phoneMatch[0] : "No dejó teléfono",
            my_email: email,
          },
          EMAILJS_PUBLIC_KEY,
        )
        .catch((err) =>
          console.error("Error al enviar email a Gianpierre:", err),
        );

      // 2. Si el usuario dejó su correo, mandarle confirmación
      if (emailMatch) {
        emailjs
          .send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_USER,
            {
              reply_to: emailMatch[0],
              to_email: emailMatch[0],
            },
            EMAILJS_PUBLIC_KEY,
          )
          .catch((err) =>
            console.error("Error al enviar confirmación al usuario:", err),
          );
      }
    } else {
      // Fallback for unexpected messages
      addBotMessages([t("chatbot.messages.genericThanks")], chatStep);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed z-[2000] flex flex-col overflow-hidden bg-[#ffffffcc] dark:bg-[#111f1aee] backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.7)] animate-[fadeInUp_0.3s_ease-out_forwards] inset-0 w-full h-dvh rounded-none border-0 lg:inset-auto lg:bottom-8 lg:right-8 lg:w-[380px] lg:h-[630px] lg:min-w-[320px] lg:max-w-[380px] lg:max-h-[calc(100vh-8rem)] lg:rounded-3xl lg:border lg:border-white/20 dark:lg:border-[#b9ffee20]">
      {viewMode === "home" ? (
        <div className="!p-5 flex justify-between items-start shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center rounded-full overflow-hidden shadow-sm bg-gray-100 dark:bg-gray-800 shrink-0 border border-gray-200 dark:border-white/10">
              <img
                className="h-full object-cover"
                src={profile}
                alt={t("chatbot.guest")}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                {getGreeting()}
              </span>
              <span className="text-gray-800 dark:text-white font-semibold text-[13px]">
                {t("chatbot.guest")}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="!p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white bg-white/50 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <IconX size={18} />
          </button>
        </div>
      ) : (
        <div className="bg-linear-to-r from-[#025a4e] to-[#047c6a] dark:from-[#0b241c] dark:to-[#12392b] !p-4 flex justify-between items-center relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-white/10 dark:bg-white/5 shadow-inner"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-md border border-white/20">
              <img
                className="h-full w-full object-cover"
                src={profile}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-[15px] leading-tight m-0">
                {t("chatbot.aiName")}
              </h3>
              <span className="text-emerald-100/80 text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {t("chatbot.online")}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="relative z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 !p-2 rounded-full transition-colors cursor-pointer"
          >
            <IconX size={20} />
          </button>
        </div>
      )}

      {viewMode === "home" ? (
        <div className="flex-1 flex flex-col items-center !p-6 text-center animate-[fadeInUp_0.3s_ease-out_forwards]">
          <div className="mt-8 mb-4">
            <IconRobotFace
              size={48}
              className="text-[#025a4e] dark:text-[#b9ffee] mx-auto opacity-90"
              stroke={1.2}
            />
          </div>
          <h2 className="text-[26px]! font-bold text-gray-900 dark:text-white mb-3">
            {t("chatbot.homeTitle")}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 max-w-[280px] mb-8 leading-relaxed">
            {t("chatbot.homeSubtitle")}
          </p>

          <div className="flex  items-center justify-center gap-3 mb-10 w-full">
            <button
              onClick={() => handleOptionSelect(1)}
              className="cursor-pointer bg-white dark:bg-[#11241d]! border border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-300! rounded-full px-4! py-2.5! text-[12px]! font-medium hover:bg-gray-50 dark:hover:bg-white/10! transition-colors shadow-xs flex items-center"
            >
              {t("chatbot.options.contact")}
            </button>
            <button
              onClick={() => handleOptionSelect(2)}
              className="cursor-pointer bg-white dark:bg-[#11241d]! border border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-300! rounded-full px-4! py-2.5! text-[12px]! font-medium hover:bg-gray-50 dark:hover:bg-white/10! transition-colors shadow-xs flex items-center"
            >
              {t("chatbot.options.browse")}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-4! flex flex-col gap-4 scrollbar-thin scrollbar-thumb-[#025a4e20] dark:scrollbar-thumb-[#b9ffee20]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "self-end items-end" : "self-start items-start"}`}
            >
              <div
                className={`p-3! rounded-2xl text-[14px] shadow-sm break-words break-all ${
                  msg.sender === "user"
                    ? "bg-[#025a4e] text-white rounded-tr-sm"
                    : "bg-white dark:bg-[#1a2f26]! text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-white/5! rounded-tl-sm"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 px-1">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="self-start flex gap-1 bg-white dark:bg-[#1a2f26]! p-3! rounded-2xl rounded-tl-sm border border-gray-100 dark:border-white/5 w-fit items-center h-[42px] shadow-sm">
              <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
            </div>
          )}

          {/* Opciones iniciales restauradas en el modo Chat */}
          {!isTyping && chatStep === "initial" && (
            <div className="flex flex-col gap-2 mt-2 self-start animate-[fadeInUp_0.3s_ease-out_forwards] w-full">
              <button
                onClick={() => handleOptionSelect(1)}
                className="text-left cursor-pointer bg-white dark:bg-[#11241d]! border border-[#025a4e] text-[#025a4e] dark:border-[#b9ffee50] dark:text-[#b9ffee] rounded-2xl px-4! py-2.5! text-[13px]! font-medium hover:bg-[#025a4e]! hover:text-white! dark:hover:bg-[#b9ffee20]! transition-colors shadow-sm w-fit"
              >
                {t("chatbot.options.contact")}
              </button>
              <button
                onClick={() => handleOptionSelect(2)}
                className="text-left cursor-pointer bg-white dark:bg-[#11241d]! border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300! rounded-2xl px-4! py-2.5! text-[13px]! font-medium hover:bg-gray-100 dark:hover:bg-white/5! transition-colors shadow-sm w-fit"
              >
                {t("chatbot.options.browse")}
              </button>
            </div>
          )}

          {!isTyping && chatStep === "look_around" && (
            <div className="flex flex-col gap-2 mt-2 self-start animate-[fadeInUp_0.3s_ease-out_forwards] w-[85%]">
              <button
                onClick={() => {
                  navigate("/projects");
                  onClose();
                }}
                className="text-left cursor-pointer bg-white dark:bg-[#11241d]! border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200! rounded-xl! px-3! py-2! text-[13px] hover:bg-gray-50 dark:hover:bg-white/5! transition-colors shadow-sm flex items-center justify-between"
              >
                <span>{t("chatbot.quickLinks.projects")}</span>
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                  onClose();
                }}
                className="text-left cursor-pointer bg-white dark:bg-[#11241d]! border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200! rounded-xl! px-3! py-2! text-[13px] hover:bg-gray-50 dark:hover:bg-white/5! transition-colors shadow-sm flex items-center justify-between"
              >
                <span>{t("chatbot.quickLinks.tech")}</span>
              </button>
              <button
                onClick={() => {
                  navigate("/blog");
                  onClose();
                }}
                className="text-left cursor-pointer bg-white dark:bg-[#11241d]! border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200! rounded-xl! px-3! py-2! text-[13px] hover:bg-gray-50 dark:hover:bg-white/5! transition-colors shadow-sm flex items-center justify-between"
              >
                <span>{t("chatbot.quickLinks.agrotech")}</span>
              </button>
              <button
                onClick={() => {
                  setChatStep("initial");
                  handleOptionSelect(1);
                }}
                className="text-left cursor-pointer bg-emerald-50 dark:bg-[#025a4e20] border border-emerald-200 dark:border-[#b9ffee30] text-emerald-800 dark:text-[#b9ffee]! rounded-xl! px-3! py-2! text-[13px] hover:bg-emerald-100 dark:hover:bg-[#b9ffee40]! transition-colors shadow-sm flex items-center justify-between mt-1 font-medium"
              >
                <span>{t("chatbot.quickLinks.talk")}</span>
              </button>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Footer / Input - Permanente y Real */}
      <div className="!p-4 bg-white/50 dark:!bg-[#0b161250] border-t border-gray-100 dark:border-white/10 shrink-0">
        <form
          onSubmit={handleSend}
          className="flex items-end bg-white dark:!bg-[#11241d] rounded-2xl border border-gray-200 dark:border-white/10 !p-2 shadow-inner"
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height =
                Math.min(e.target.scrollHeight, 100) + "px";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend(e as any);
              }
            }}
            placeholder={t("chatbot.inputPlaceholder")}
            className="flex-1 bg-transparent border-none outline-none !text-[14.5px] leading-relaxed text-gray-700 dark:text-gray-100 resize-none overflow-y-auto !py-2 !px-3 break-all scrollbar-thin"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="!p-2.5 !ml-2 mb-px bg-[#025a4e] hover:bg-[#047c6a] text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center shrink-0"
          >
            <IconSend2 size={18} stroke={1.5} className="-ml-0.5 mt-0.5" />
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>,
    document.body,
  );
};

export default Chatbot;
