import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentLang =
    languages.find((l) => l.code === i18n.resolvedLanguage) || languages[0];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const switchLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-full dark:bg-[#2338318d]! bg-white/60 backdrop-blur-md border border-zinc-200/50 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-emerald-500 transition-colors shadow-sm focus:outline-none"
        aria-label={t("languageSelector.aria")}
      >
        <span className="text-lg">{currentLang.flag}</span>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-5 w-48 rounded-2xl shadow-lg bg-white/70 dark:bg-[#233831b1]! focus:outline-none z-50 overflow-hidden border border-zinc-100 dark:border-white/10!">
          <div className="py-1!">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full text-left px-4! py-3! cursor-pointer text-sm flex items-center gap-3 transition-colors ${
                  i18n.resolvedLanguage === lang.code
                    ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                {i18n.resolvedLanguage === lang.code && (
                  <svg
                    className="ml-auto w-4 h-4 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
