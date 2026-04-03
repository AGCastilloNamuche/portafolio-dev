import { NavLink, useLocation } from "react-router";
import type { NavItem } from "../navigation";
import {
  IconHome2,
  IconSearch,
  IconChartPie3,
  IconClock,
  IconUser,
  IconInfoCircle,
  IconDeviceAnalytics,
  IconMessage2Code,
  IconSubtitlesEdit,
} from "@tabler/icons-react";
import { createPortal } from "react-dom";

type Props = {
  navItems: readonly NavItem[];
  onContactClick?: () => void;
};

const getIcon = (name: string, isActive: boolean) => {
  const size = 26;
  const stroke = 1.4;

  // Mapeando para coincidir con el diseño fotográfico solicitado
  switch (name) {
    case "Inicio":
      return <IconHome2 size={size} stroke={stroke} />;
    case "Blog":
      return <IconSubtitlesEdit size={size} stroke={stroke} />;
    case "Proyectos":
      return <IconDeviceAnalytics size={size} stroke={stroke} />;
    case "Contacto":
      return <IconMessage2Code size={size} stroke={stroke} />;
    case "Acerca de":
      return <IconInfoCircle size={size} stroke={stroke} />;
    default:
      return <IconHome2 size={size} stroke={stroke} />;
  }
};

const BottomNav = ({ navItems, onContactClick }: Props) => {
  const location = useLocation();

  return createPortal(
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden block">
      <div className="bg-[#f4f3f0a0] dark:bg-[#2338318d] backdrop-blur-[20px] backdrop-saturate-[1.7] !px-5 !py-3 flex justify-between items-center transition-colors shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:shadow-none">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.href ||
            (location.pathname.startsWith(item.href) && item.href !== "/");

          return (
            <NavLink
              to={item.href}
              key={item.href}
              onClick={(e) => {
                if (item.name === "Contacto" && onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className={[
                "flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer",
                isActive
                  ? "bg-[#025a4e1c] dark:bg-[#8fdcc21a] text-[#025a4e] dark:!text-[#b9ffee] rounded-[2rem] !px-[18px] !py-[10px]"
                  : "bg-transparent text-gray-400 dark:!text-[#7d8b85] p-2",
              ].join(" ")}
            >
              <div className="flex items-center gap-1">
                <div className="shrink-0">{getIcon(item.name, isActive)}</div>
                <span
                  className={[
                    "!text-[14px] font-[400] whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out",
                    isActive
                      ? "max-w-[100px] opacity-100 ml-2"
                      : "max-w-0 opacity-0 ml-0",
                  ].join(" ")}
                >
                  {item.name}
                </span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>,
    document.body,
  );
};

export default BottomNav;
