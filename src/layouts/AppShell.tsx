import { useEffect, useState, type ReactNode } from "react";
import {
  Footer,
  HorizontalNav,
  BottomNav,
  Chatbot,
  ScrollManager,
} from "../components";
import navItems from "../navigation";
import { useTheme } from "./ThemeContext";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { getDayjsLocale, normalizeLanguage } from "../lib/localization";

type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const { isDark } = useTheme();
  const { i18n } = useTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const language = normalizeLanguage(i18n.resolvedLanguage);
    document.documentElement.lang = language;
    dayjs.locale(getDayjsLocale(language));
  }, [i18n.resolvedLanguage]);

  return (
    <div className={`container-root-layout theme-${isDark ? "dark" : "light"}`}>
      <ScrollManager />

      <HorizontalNav
        navItems={navItems}
        onContactClick={() => setIsChatOpen(true)}
      />
      <BottomNav
        navItems={navItems}
        onContactClick={() => setIsChatOpen(true)}
      />

      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <div className="animated-background-container">
        <div className="heroGradient"></div>
      </div>

      <div className="layout-page">
        <main className="layout-page-content pb-24 md:pb-0 overflow-x-hidden">
          {children}
        </main>
      </div>

      <Footer navItems={navItems} onContactClick={() => setIsChatOpen(true)} />
    </div>
  );
};

export default AppShell;
