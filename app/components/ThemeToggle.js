"use client";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

// Must match the key read by the inline script in app/layout.js
export const THEME_STORAGE_KEY = "theme";

// The theme lives on <html data-theme>, outside React, so subscribe to it
function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getIsLight = () => document.documentElement.dataset.theme === "light";
// the server always renders the dark default
const getServerIsLight = () => false;

// t: the theme strings from the dictionary
function ThemeToggle({ t, className = "" }) {
  const isLight = useSyncExternalStore(subscribe, getIsLight, getServerIsLight);

  const toggle = () => {
    const next = isLight ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // private mode or blocked storage: the switch still works for this visit
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.label}
      aria-pressed={isLight}
      title={isLight ? t.toDark : t.toLight}
      className={`flex h-9 w-9 items-center justify-center rounded-lg border border-fg/15 bg-page/80 text-fg transition-colors duration-150 hover:border-fg/30 hover:bg-page ${className}`}
    >
      {/* icons switch by CSS so the first paint is already right */}
      <Sun size={18} strokeWidth={1.5} aria-hidden="true" className="site-light:hidden" />
      <Moon size={18} strokeWidth={1.5} aria-hidden="true" className="hidden site-light:block" />
    </button>
  );
}

export default ThemeToggle;
