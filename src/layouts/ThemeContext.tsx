import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeMode = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode; // lo que eligió el usuario
  resolvedTheme: ResolvedTheme; // lo que se aplica realmente
  isDark: boolean;
  setMode: (m: ThemeMode) => void;
  toggle: () => void; // alterna light/dark (sale de system)
  resetToSystem: () => void;
};

const STORAGE_KEY = "theme-mode";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    return saved === "light" || saved === "dark" || saved === "system"
      ? saved
      : "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    // inicial (antes de escuchar cambios del sistema)
    if (mode === "system") return getSystemTheme();
    return mode;
  });

  // 1) Guardar modo en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  // 2) Resolver tema (modo + sistema) y reaccionar a cambios del sistema si mode === system
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const next: ResolvedTheme =
        mode === "system" ? (mql.matches ? "dark" : "light") : mode;
      setResolvedTheme(next);
    };

    apply();

    const onChange = () => {
      if (mode === "system") apply();
    };

    // compat
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else {
      // Safari viejo

      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, [mode]);

  // 3) Aplicar al DOM (Tailwind: darkMode: "class")
  useEffect(() => {
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [resolvedTheme]);

  const setMode = (m: ThemeMode) => setModeState(m);

  const toggle = () => {
    // si está en system, “bloquea” al contrario del sistema
    const sys = getSystemTheme();
    if (mode === "system") {
      setModeState(sys === "dark" ? "light" : "dark");
      return;
    }
    // si está en light/dark, alterna normal
    setModeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const resetToSystem = () => setModeState("system");

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      resolvedTheme,
      isDark: resolvedTheme === "dark",
      setMode,
      toggle,
      resetToSystem,
    }),
    [mode, resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return ctx;
};
