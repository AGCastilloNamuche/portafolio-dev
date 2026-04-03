import { Outlet } from "react-router";
import AppShell from "./AppShell";
import { ThemeProvider } from "./ThemeContext";
const RootLayout = () => {
  return (
    <ThemeProvider>
      <AppShell>
        <Outlet />
      </AppShell>
    </ThemeProvider>
  );
};

export default RootLayout;
