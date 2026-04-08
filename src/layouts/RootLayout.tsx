import { Outlet } from "react-router";
import AppShell from "./AppShell";

const RootLayout = () => {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
};

export default RootLayout;
