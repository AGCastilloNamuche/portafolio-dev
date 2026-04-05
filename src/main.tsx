import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import "./assets/style/ui.css";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "dayjs/locale/en";
import "dayjs/locale/es";
import "dayjs/locale/zh-cn";

// Inicializador de idiomas i18n
import "./lib/i18n";

//configuracion de scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav-items");
  if (window.scrollY > 50) {
    navbar?.classList.add("scrolled");
  } else {
    navbar?.classList.remove("scrolled");
  }
});

//configuración de router
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
