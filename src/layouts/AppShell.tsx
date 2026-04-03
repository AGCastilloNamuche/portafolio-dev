import { useEffect, useState, type ReactNode } from "react";
import { Footer, HorizontalNav, BottomNav, Chatbot } from "../components";
import navItems from "../navigation";
import { useTheme } from "./ThemeContext";

type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const { isDark } = useTheme();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className={`container-root-layout theme-${isDark ? "dark" : "light"}`}>
      <HorizontalNav navItems={navItems} onContactClick={() => setIsChatOpen(true)} />
      <BottomNav navItems={navItems} onContactClick={() => setIsChatOpen(true)} />

      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <div className="animated-background-container">
        <div className="heroGradient"></div>
      </div>

      <div className="layout-page">
        <main className="layout-page-content pb-24 md:pb-0 overflow-x-hidden">
          {children}
        </main>
      </div>

      <Footer navItems={navItems} />
    </div>
  );
};

export default AppShell;
