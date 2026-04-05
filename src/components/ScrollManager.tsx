import { useEffect } from "react";
import { useLocation } from "react-router";

const STORAGE_KEY = "route-scroll-positions";

const getScrollKey = (pathname: string, search: string) =>
  `${pathname}${search}`;

const readPositions = (): Record<string, number> => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, number>) : {};
  } catch {
    return {};
  }
};

const writePositions = (positions: Record<string, number>) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {
    // Ignore storage errors silently.
  }
};

const ScrollManager = () => {
  const location = useLocation();
  const scrollKey = getScrollKey(location.pathname, location.search);

  useEffect(() => {
    const previousSetting = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousSetting;
    };
  }, []);

  useEffect(() => {
    const savedPosition = readPositions()[scrollKey] ?? 0;

    const frameId = window.requestAnimationFrame(() => {
      window.scrollTo(0, savedPosition);
    });

    return () => {
      window.cancelAnimationFrame(frameId);

      const nextPositions = readPositions();
      nextPositions[scrollKey] = window.scrollY;
      writePositions(nextPositions);
    };
  }, [scrollKey]);

  return null;
};

export default ScrollManager;
