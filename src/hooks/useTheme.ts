"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const THEME_KEY = "angkasa-theme";
const THEME_EVENT = "angkasa-theme-change";

function getTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);

  return () => {
    window.removeEventListener(THEME_EVENT, callback);
  };
}

function getServerTheme(): Theme {
  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");

  localStorage.setItem(THEME_KEY, theme);

  window.dispatchEvent(new Event(THEME_EVENT));
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const setTheme = useCallback((nextTheme: Theme) => {
    applyTheme(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getTheme();

    applyTheme(current === "dark" ? "light" : "dark");
  }, []);

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === "dark",
  };
}
