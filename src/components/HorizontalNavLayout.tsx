import { NavLink, useMatch } from "react-router";
import type { NavItem } from "../navigation";
import { IconCode, IconMoon, IconSun } from "@tabler/icons-react";
import logo from "../assets/images/logo.svg?raw";
import { useEffect, useState } from "react";
import { useTheme } from "../layouts/ThemeContext";

type Props = {
  navItems: readonly NavItem[];
  onContactClick?: () => void;
};

const HorizontalNavLayout = ({ navItems, onContactClick }: Props) => {
  const homeMatch = useMatch({ path: "/", end: true }); // solo "/"
  const skillMatch = useMatch({ path: "/skill", end: false }); // "/skill" (y subrutas si hubiera)
  const inicioActive = Boolean(homeMatch || skillMatch);

  const { isDark, toggle } = useTheme();

  return (
    <div className="layout-navbar-and-nav-container">
      <div className="layout-navbar">
        <header className="navbar-content-container">
          <div className="navbar-container">
            <div className="container-logo flex items-center">
              <div dangerouslySetInnerHTML={{ __html: logo }}></div>
            </div>
            <nav className="navbar-content hidden md:block">
              <ul className="nav-items">
                {navItems.map((item) => {
                  const { href, name } = item;
                  return (
                    <li key={href}>
                      <NavLink
                        className={({ isActive }) => {
                          if (href === "#") return "";
                          if (href === "/") return inicioActive ? "active" : "";
                          return isActive ? "active" : "";
                        }}
                        onClick={(e) => {
                          if (name === "Contacto" && onContactClick) {
                            e.preventDefault();
                            onContactClick();
                          }
                        }}
                        to={href}
                      >
                        <span className="mr-2">{name} </span>
                        {href === "/" && (
                          <span className="border-1 rounded border-gray-300 code   dark:!text-white">
                            {" "}
                            {"</>"}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="container-button flex items-center gap-2">
              <button
                type="button"
                className="dark:!bg-white/10 bg-white/60 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-full !py-1 !px-2 flex gap-2 items-center cursor-pointer dark:shadow-none transition-colors"
                onClick={toggle}
              >
                <div
                  className={
                    isDark
                      ? "bg-gray-800 text-white !p-1 rounded-full shadow transition-all duration-300"
                      : "!p-1 text-gray-400 rounded-full transition-all duration-300"
                  }
                >
                  <IconMoon size={20} stroke={1} />
                </div>

                <div
                  className={
                    isDark
                      ? "!p-1 text-gray rounded-full transition-all duration-300"
                      : "bg-white text-black !p-1 rounded-full shadow transition-all duration-300"
                  }
                >
                  <IconSun size={20} stroke={1} />
                </div>
              </button>
              {/* <button className="btn btn-gradient-primary">Descargar CV</button> */}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HorizontalNavLayout;
