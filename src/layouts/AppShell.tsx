import type { ReactNode } from "react";
import { Footer, HorizontalNav } from "../components";
import navItems from "../navigation";

type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="container-root-layout">
      <HorizontalNav navItems={navItems} />

      <div className="animated-background-container">
        <div className="heroGradient"></div>
      </div>

      <div className="layout-page">
        <main className="layout-page-content">{children}</main>
      </div>

      <Footer navItems={navItems} />
    </div>
  );
};

export default AppShell;
