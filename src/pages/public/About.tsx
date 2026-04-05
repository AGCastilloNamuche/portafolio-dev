import {
  IconCancel,
  IconCategory2,
  IconChecks,
  IconCode,
  IconDotsVertical,
  IconFilter2,
  IconGitBranch,
  IconMail,
  IconMessageChatbot,
  IconMessageCircleX,
  IconMessages,
  IconMoodKid,
  IconMoodPlus,
  IconPhone,
  IconPin,
  IconPlus,
  IconPrompt,
  IconRosetteDiscountCheckFilled,
  IconSearch,
  IconSend2,
  IconSparkles,
  IconTransfer,
  IconX,
} from "@tabler/icons-react";
import profile from "../../assets/images/perfil.png";
import { CountUp, Tabs } from "../../components";
import { contacts as contactsDB, type Contact } from "../../lib/db/client";
import { useEffect, useMemo, useState } from "react";
import TextField from "../../components/TextField";
import getBrowser from "../../lib/db/browser";
import { skills } from "../../lib/db/skills";
import { filters } from "../../lib/util/config";
import { useTheme } from "../../layouts/ThemeContext";
import { useTranslation } from "react-i18next";

const skillsDeveloper = (values: number[]) =>
  filters({ array: skills, key: "id", value: values });

const About = () => {
  const { isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const translatedContacts = useMemo(
    () =>
      contactsDB.map((contact) => ({
        ...contact,
        lastMessage: t(`about.contacts.${contact.id}`, {
          defaultValue: contact.lastMessage,
        }),
      })) as Contact[],
    [i18n.resolvedLanguage, t],
  );
  const [contacts, setContacts] = useState<Contact[]>(translatedContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    setContacts((prev) => {
      const activeId =
        prev.find((contact) => contact.isActive)?.id ??
        translatedContacts.find((contact) => contact.isActive)?.id ??
        translatedContacts[0]?.id;

      return translatedContacts.map((contact) => ({
        ...contact,
        isActive: contact.id === activeId,
      }));
    });
  }, [translatedContacts]);

  useEffect(() => {
    if (contacts.length > 0) {
      const contact = contacts.find((c) => c.isActive) ?? contacts[0];
      setSelectedContact(contact);
    }
  }, [contacts]);

  const info = (contact: Contact) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === contact.id
          ? { ...c, isActive: true }
          : { ...c, isActive: false },
      ),
    );
    setSelectedContact(contact);
  };

  const spanContainer = () =>
    Array.from({ length: 2 }).map((_, index) => (
      <div className="hidden sm:block" key={index}></div>
    ));

  const statItems = [
    {
      value: 100,
      suffix: "+",
      label: t("about.stats.projects"),
      color: "from-emerald-400 to-teal-500",
    },
    {
      value: 5,
      suffix: "+",
      label: t("about.stats.experience"),
      color: "from-sky-400 to-blue-500",
    },
    {
      value: 12,
      suffix: "+",
      label: t("about.stats.clients"),
      color: "from-violet-400 to-purple-500",
    },
    {
      value: 99,
      suffix: "%",
      label: t("about.stats.deliveries"),
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <div className="content">
      {/* ── HERO ── */}
      <div className="relative container-title  overflow-hidden">
        <div className="relative grid grid-cols-1 lg:grid-cols-5! gap-5 items-center">
          {/* Avatar */}
          <div className="lg:col-span-2! flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl shadow-emerald-500/10 w-64 h-72 lg:w-80! lg:h-96!">
                <img
                  className="h-full w-full object-cover object-top"
                  src={profile}
                  alt="Gian Pierre"
                />
                {/* Glassmorphic badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-md px-4! py-2! border border-white/30 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-xs font-medium">
                      Gian Pierre.
                    </span>
                    <IconSparkles
                      size={14}
                      className="text-emerald-300 ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3! flex flex-col gap-6">
            <div className="text-center lg:text-start!">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-500 dark:text-emerald-400 mb-3">
                <span className="w-4 h-px bg-emerald-500 dark:bg-emerald-400" />
                Full Stack Developer
              </span>
              <h1 className="font-acorn font-bold text-zinc-900 dark:text-white leading-tight mb-4">
                Gian Pierre
              </h1>
              <h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-200 mb-5">
                {t("about.roleTitle")}
              </h2>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed border-l-2 border-emerald-400/50 pl-4!">
              {t("about.intro1")}
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
              {t("about.intro2")}
            </p>

            {/* Tag strip */}
            <div className="flex flex-wrap gap-2 mt-2">
              {skills
                .filter((skill) => [3, 22, 7, 6, 5, 4, 28].includes(skill.id))
                .map((tag) => (
                  <span
                    key={tag.id}
                    className="flex gap-2 px-3! py-1! rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-500/20"
                  >
                    <tag.icon
                      stroke={2}
                      color={isDark ? "#b9ffee" : "#025a4e"}
                      size={14}
                    />
                    {tag.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {statItems.map((stat, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-3xl p-6!  backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className={`absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity blur-xl`}
            />
            <CountUp
              className={`bg-clip-text text-transparent bg-gradient-to-r ${stat.color} text-4xl font-black`}
              value={stat.value}
              suffix={stat.suffix}
            />
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-1 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── STACK ── */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-green-950 font-bold uppercase dark:text-white">
              {t("about.stack.eyebrow")}
            </span>
            <h2 className="text-h2 font-bold text-green-950 leading-12 mb-2 dark:text-[#b9ffee]">
              {t("about.stack.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                label: t("about.stack.frontend"),
                tech: "Vue · Tailwind · Vite · TS",
              },
              {
                label: t("about.stack.backend"),
                tech: "Python · Django",
              },
              {
                label: t("about.stack.mobile"),
                tech: "Flutter · Dart",
              },
              { label: t("about.stack.database"), tech: "PostgreSQL" },
            ].map((item) => (
              <div>
                <h4 className="dark:text-[#b9ffee]">{item.label}</h4>
                <p className="text-sm dark:text-white">▰▰▰▰▰ {item.tech}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Bento skill cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3!">
          {[
            {
              titleKey: "about.stack.coreTitle",
              descKey: "about.stack.coreDesc",
              ids: [22, 2, 23, 5, 28, 43, 44],
            },
            {
              titleKey: "about.stack.extraTitle",
              descKey: "about.stack.extraDesc",
              ids: [7, 8, 3, 4, 35, 34, 37],
            },
            {
              titleKey: "about.stack.dataTitle",
              descKey: "about.stack.dataDesc",
              ids: [36, 38, 45, 46, 47],
            },
          ].map((section) => (
            <div
              key={section.titleKey}
              className="group relative overflow-hidden rounded-3xl p-6!  backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-base font-bold text-zinc-800 dark:text-[#b9ffee] mb-1">
                {t(section.titleKey)}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-4">
                {t(section.descKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillsDeveloper(section.ids).map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-1.5 items-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 px-3! py-1! hover:scale-105 transition-transform"
                  >
                    <item.icon
                      stroke={2}
                      color={isDark ? "#b9ffee" : "#025a4e"}
                      size={14}
                    />
                    <span className="text-xs font-semibold text-[#025a4e] dark:text-[#b9ffee]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MESSENGER ── */}
      <div className="container-messenger mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/20">
            <IconPrompt size={24} className="text-white" stroke={2} />
          </div>
          <div>
            <h2 className="text-h2 font-bold text-green-950 dark:text-[#aee8df] flex items-center gap-2">
              {t("about.messenger.title")} <IconCode size={26} stroke={2} />
            </h2>
          </div>
        </div>

        <div className="container-chat grid grid-cols-1 lg:grid-cols-4 gap-4 rounded-3xl overflow-hidden border border-white/40 dark:border-white/10 shadow-sm bg-white/40 dark:bg-[#1a2f27]/60 backdrop-blur-xl">
          {/* CONTACTS SIDEBAR */}
          <div className="container-contacts border-r border-white/20 dark:border-white/5 p-4!">
            <div className="mb-4">
              <div className="headers mb-5 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  <IconMessageChatbot stroke={2} size={18} />
                  {t("about.messenger.allMessages")}
                </h2>
                <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                  <IconDotsVertical stroke={2} size={18} />
                </button>
              </div>
              <div className="container-tabs w-full">
                <Tabs
                  tabClassName="text-black"
                  className="tabs mb-8 text-black"
                  variant="underline"
                  tabs={[
                    {
                      id: "1",
                      label: t("about.messenger.openChat"),
                      content: () => (
                        <div>
                          <div className="container-search mt-5">
                            <div>
                              <div className="mt-2">
                                <TextField
                                  id="search"
                                  background="bg-black/10 dark:bg-white/10"
                                  placeholder={t(
                                    "about.messenger.searchPlaceholder",
                                  )}
                                  leftIcon={
                                    <IconSearch
                                      color={isDark ? "white" : "#bbbbbb"}
                                      stroke={2}
                                      size={20}
                                    />
                                  }
                                  rightAction={
                                    <button className="cursor-pointer text-[#bbbbbb]">
                                      <IconFilter2 stroke={2} size={20} />
                                    </button>
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: "2",
                      label: t("about.messenger.inProgress"),
                      disabled: true,
                      content: () => <div />,
                    },
                    {
                      id: "3",
                      label: t("about.messenger.closed"),
                      disabled: true,
                      content: () => <div />,
                    },
                  ]}
                />
                <div
                  className="mb-2"
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <Tabs
                    className="tabs"
                    variant="underline"
                    tabs={[
                      {
                        id: "1",
                        label: t("about.messenger.chatCount", { count: 15 }),
                        content: () => <div></div>,
                      },
                      {
                        id: "2",
                        label: t("about.messenger.emailCount", { count: 3 }),
                        disabled: true,
                        content: () => <div />,
                      },
                      {
                        id: "3",
                        label: t("about.messenger.inboxCount", { count: 5 }),
                        disabled: true,
                        content: () => <div />,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="contacts space-y-5!">
              {contacts.map((contact, index) => (
                <div
                  key={contact.id}
                  className={[
                    "rounded-2xl p-3! cursor-pointer relative transition-all duration-200",
                    contact.isActive
                      ? "bg-gradient-to-br from-[#4b604d] to-[#2f4232] shadow-lg"
                      : "bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 border border-white/30 dark:border-white/5",
                  ].join(" ")}
                  onClick={() => info(contact)}
                >
                  <div className="absolute bottom-3 right-3">
                    {contact.isActive ? (
                      <IconTransfer
                        className="text-white/60"
                        stroke={1.5}
                        size={14}
                      />
                    ) : null}
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative shrink-0!">
                      <img
                        src={contact.avatar}
                        alt={`contacto_${index + 1}`}
                        className="inline-block size-9 rounded-full object-cover ring-2 ring-white/30"
                      />
                      <span
                        className={[
                          "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-900",
                          contact.status === "online"
                            ? "bg-emerald-400"
                            : "bg-red-400",
                        ].join(" ")}
                      />
                    </div>
                    <div className="contact-info flex justify-between w-full min-w-0">
                      <div className="min-w-0">
                        <p
                          className={[
                            "text-xs font-semibold truncate",
                            contact.isActive
                              ? "text-white"
                              : "text-zinc-800 dark:text-zinc-100",
                          ].join(" ")}
                        >
                          {contact.name}
                        </p>
                        <p
                          className={[
                            "text-[10px]",
                            contact.isActive
                              ? "text-white/60"
                              : "text-zinc-400",
                          ].join(" ")}
                        >
                          ({contact.n_contacts})
                        </p>
                      </div>
                      <div className="flex items-end flex-col shrink-0 ml-1">
                        <IconChecks
                          className={
                            contact.isActive ? "text-white/60" : "text-zinc-400"
                          }
                          size={14}
                          stroke={contact.isActive ? 2.5 : 1.5}
                        />
                        <span
                          className={[
                            "text-[10px]",
                            contact.isActive
                              ? "text-white/60"
                              : "text-zinc-400",
                          ].join(" ")}
                        >
                          {contact.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p
                    className={[
                      "text-[11px] line-clamp-2 leading-relaxed",
                      contact.isActive
                        ? "text-white/80"
                        : "text-zinc-500 dark:text-zinc-400",
                    ].join(" ")}
                  >
                    {contact.lastMessage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MESSAGES PANEL */}
          <div className="container-messages lg:col-span-2! flex flex-col">
            <div className="flex-1 flex flex-col p-4!">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3! border-b border-white/20 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-9 rounded-full object-cover ring-2 ring-emerald-400/30"
                    />
                    <span
                      className={[
                        "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-900",
                        selectedContact?.status === "online"
                          ? "bg-emerald-400"
                          : "bg-red-400",
                      ].join(" ")}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-white">
                      {selectedContact?.name}
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      {t("about.messenger.lastSeen")}
                    </p>
                  </div>
                  <IconTransfer
                    className="text-zinc-400"
                    stroke={1}
                    size={16}
                  />
                </div>
                <div className="flex items-center gap-1">
                  {[
                    {
                      icon: <IconCancel size={16} stroke={1.5} />,
                      label: t("common.cancel"),
                    },
                    {
                      icon: <IconMessages size={16} stroke={1.5} />,
                      label: t("common.support"),
                    },
                    {
                      icon: <IconMessageCircleX size={16} stroke={1.5} />,
                      label: t("common.close"),
                    },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-zinc-500 dark:text-zinc-400 cursor-pointer transition-colors"
                    >
                      {btn.icon}
                      <span className="text-[9px]">{btn.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages body */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0 pt-2 pb-4 overflow-y-auto">
                {/* cliente */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-7 rounded-full object-cover"
                    />
                    <div className="flex items-center messenger gap-2">
                      <div className="bg-white dark:bg-[#64857ab3]! shadow-md px-4! py-2! rounded-2xl rounded-bl-sm max-w-[280px]">
                        <p className="text-zinc-700 dark:text-zinc-100 text-[12px] font-light">
                          {selectedContact?.lastMessage}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-9">
                    <p className="text-zinc-400 text-[10px]!">10:30 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* agent */}
                <div className="col-span-1 sm:col-span-2!">
                  <div className="flex items-end gap-2 mb-1">
                    <div className="flex items-center messenger gap-2">
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                      <div className="bg-gradient-to-br from-[#4b604d] to-[#2f4232] shadow-md px-4! py-2! rounded-2xl rounded-br-sm max-w-[280px]">
                        <p className="text-white text-[12px] font-light">
                          {t("about.messenger.agentAsk")}
                        </p>
                      </div>
                    </div>
                    <img
                      src={profile}
                      alt="contacto_agente"
                      className="inline-block size-7 rounded-full object-cover"
                    />
                  </div>
                  <div className="mr-9 flex justify-end">
                    <p className="text-zinc-400 text-[10px]">10:31 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* cliente */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-7 rounded-full object-cover"
                    />
                    <div className="flex items-center messenger gap-2">
                      <div className="bg-white dark:bg-[#64857ab3]! shadow-md px-4! py-2! rounded-2xl rounded-bl-sm max-w-[280px]">
                        <p className="text-zinc-700 dark:text-zinc-100 text-[12px] font-light">
                          {t("about.messenger.clientNeed")}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-9">
                    <p className="text-zinc-400 text-[10px]">10:32 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* agent */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <div className="flex items-center messenger gap-2">
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                      <div className="bg-gradient-to-br from-[#4b604d] to-[#2f4232] shadow-md px-4! py-2! rounded-2xl rounded-br-sm max-w-[280px]">
                        <p className="text-white text-[12px] font-light">
                          {t("about.messenger.agentClarify")}
                        </p>
                        <ol>
                          <li className="text-white text-[11px] font-light ml-4 list-decimal mb-1">
                            <p>{t("about.messenger.agentClarify1")}</p>
                          </li>
                          <li className="text-white text-[11px] font-light ml-4 list-decimal">
                            <p>{t("about.messenger.agentClarify2")}</p>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <img
                      src={profile}
                      alt="contacto_agente"
                      className="inline-block size-7 rounded-full object-cover"
                    />
                  </div>
                  <div className="mr-9 flex justify-end">
                    <p className="text-zinc-400 text-[10px]">10:33 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* cliente */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-7 rounded-full object-cover"
                    />
                    <div className="flex items-center messenger gap-2">
                      <div className="bg-white dark:bg-[#64857ab3]! shadow-md px-4! py-2! rounded-2xl rounded-bl-sm max-w-[280px]">
                        <p className="text-zinc-700 dark:text-zinc-100 text-[12px] font-light">
                          {t("about.messenger.clientStack")}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-9">
                    <p className="text-zinc-400 text-[10px]">10:34 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* agent */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <div className="flex items-center messenger gap-2">
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                      <div className="bg-gradient-to-br from-[#4b604d] to-[#2f4232] shadow-md px-4! py-2! rounded-2xl rounded-br-sm max-w-[280px]">
                        <p className="text-white text-[12px] font-light">
                          {t("about.messenger.agentProposal")}
                        </p>
                        <ol>
                          <li className="text-white text-[11px] font-light ml-4 list-disc mb-1">
                            <p>{t("about.messenger.agentProposal1")}</p>
                          </li>
                          <li className="text-white text-[11px] font-light ml-4 list-disc mb-1">
                            <p>{t("about.messenger.agentProposal2")}</p>
                          </li>
                          <li className="text-white text-[11px] font-light ml-4 list-disc mb-1">
                            <p>{t("about.messenger.agentProposal3")}</p>
                          </li>
                          <li className="text-white text-[11px] font-light ml-4 list-disc">
                            <p>{t("about.messenger.agentProposal4")}</p>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <img
                      src={profile}
                      alt="contacto_agente"
                      className="inline-block size-7 rounded-full object-cover"
                    />
                  </div>
                  <div className="mr-9 flex justify-end">
                    <p className="text-zinc-400 text-[10px]">10:35 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* cliente final */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-7 rounded-full object-cover"
                    />
                    <div className="flex items-center messenger gap-2">
                      <div className="bg-white dark:bg-[#64857ab3]! shadow-md px-4! py-2! rounded-2xl rounded-bl-sm max-w-[280px]">
                        <p className="text-zinc-700 dark:text-zinc-100 text-[12px] font-light">
                          {t("about.messenger.clientFlow")}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-9">
                    <p className="text-zinc-400 text-[10px]">10:36 AM</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="mt-2 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/40 dark:border-white/10 px-4! py-2!">
                <TextField
                  id="msg-reply"
                  background="bg-transparent"
                  placeholder={t("about.messenger.replyPlaceholder")}
                  leftIcon={
                    <div className="flex items-center gap-2 mr-2">
                      <button className="cursor-pointer text-zinc-400 hover:text-emerald-500 transition-colors">
                        <IconPlus stroke={2} size={18} />
                      </button>
                      <button className="cursor-pointer text-zinc-400 hover:text-emerald-500 transition-colors">
                        <IconMoodPlus stroke={2} size={18} />
                      </button>
                    </div>
                  }
                  rightAction={
                    <button className="cursor-pointer text-emerald-500 hover:text-emerald-400 transition-colors">
                      <IconSend2 stroke={2} size={18} />
                    </button>
                  }
                />
              </div>
            </div>
          </div>

          {/* INFO PANEL */}
          <div className="p-4! border-l border-white/20 dark:border-white/5!">
            <div className="flex items-center mb-5 justify-between">
              <div />
              <h2 className="text-sm font-bold text-zinc-800 dark:text-white">
                {t("common.information")}
              </h2>
              <IconX
                className="text-zinc-400 dark:text-zinc-500 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                stroke={2}
                size={16}
              />
            </div>

            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              {t("about.messenger.aboutClient")}
            </h3>

            <div className="flex items-center justify-between gap-3 mb-6 p-3! rounded-2xl bg-white/40 dark:bg-white/5! border border-white/30 dark:border-white/5!">
              <div className="flex items-center gap-3">
                <img
                  src={selectedContact?.avatar}
                  alt={`contacto_${selectedContact?.id}`}
                  className="inline-block size-10 rounded-full object-cover ring-2 ring-emerald-400/20"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-white truncate">
                    {selectedContact?.name}
                  </p>
                  <p className="text-[10px] text-zinc-400">
                    {t("about.messenger.visits", {
                      count: selectedContact?.unread ?? 0,
                    })}
                  </p>
                </div>
              </div>
              <IconRosetteDiscountCheckFilled
                className="text-emerald-500 shrink-0"
                size={18}
              />
            </div>

            <div className="space-y-4!">
              {[
                {
                  icon: <IconPhone size={14} />,
                  label: t("about.messenger.phoneLabel"),
                  value: selectedContact?.n_contacts,
                },
                {
                  icon: <IconMail size={14} />,
                  label: t("about.messenger.emailLabel"),
                  value: selectedContact?.email,
                },
              ].map((row) => (
                <div key={String(row.label)}>
                  <p className="text-[10px] text-zinc-400 font-medium mb-1">
                    {row.label}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {row.icon}
                    </span>
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 truncate">
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: t("about.messenger.dateLabel"),
                    value: selectedContact?.date,
                  },
                  {
                    label: t("about.messenger.timeLabel"),
                    value: selectedContact?.time,
                  },
                  {
                    label: t("about.messenger.channelLabel"),
                    value: t("about.messenger.channelValue"),
                  },
                  {
                    label: t("about.messenger.browserLabel"),
                    value: getBrowser(),
                  },
                ].map((item) => (
                  <div key={String(item.label)}>
                    <p className="text-[10px] text-zinc-400 font-medium">
                      {item.label}
                    </p>
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 truncate">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOCUS / VISION / MISSION ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2! gap-8 mb-10">
        {/* Left: description */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
              {t("about.focus.eyebrow")}
            </span>
            <h2 className="text-h2 font-bold text-zinc-900 dark:text-[#b9ffee] mt-2 leading-snug">
              {t("about.focus.title")}
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-100 text-base leading-relaxed">
            {t("about.focus.description")}
          </p>
          {/* Approach list */}
          <div className="space-y-3!">
            {[
              t("about.focus.approach1"),
              t("about.focus.approach2"),
              t("about.focus.approach3"),
              t("about.focus.approach4"),
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0! mt-1! w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-zinc-600 dark:text-zinc-100">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Vision / Mission / Approach cards */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: <IconGitBranch stroke={2} size={20} />,
              titleKey: "about.focus.visionTitle",
              bodyKey: "about.focus.visionBody",
              gradient: "from-emerald-400 to-teal-500",
            },
            {
              icon: <IconCategory2 stroke={2} size={20} />,
              titleKey: "about.focus.missionTitle",
              bodyKey: "about.focus.missionBody",
              gradient: "from-sky-400 to-blue-500",
            },
          ].map((card) => (
            <div
              key={card.titleKey}
              className="group p-5! rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg`}
                >
                  {card.icon}
                </div>
                <h3 className="font-bold text-zinc-800 dark:text-[#b9ffee]">
                  {t(card.titleKey)}
                </h3>
              </div>
              {card.bodyKey && (
                <p className="text-sm text-zinc-600 dark:text-zinc-100 leading-relaxed">
                  {t(card.bodyKey)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
