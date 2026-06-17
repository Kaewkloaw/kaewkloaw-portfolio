"use client";

import { useEffect, useState } from "react";

type ThemeMode = "ocean" | "twilight";

const THEME_STORAGE_KEY = "kaewkloaw-theme";

const THEME_GRADIENTS: Record<ThemeMode, string> = {
  ocean:
    "linear-gradient(135deg, rgba(185, 43, 129, 0.95) 0%, rgba(140, 31, 121, 0.95) 58%, rgba(232, 125, 106, 0.9) 100%)",
  twilight:
    "linear-gradient(135deg, rgba(243, 162, 27, 0.95) 0%, rgba(236, 123, 40, 0.95) 58%, rgba(140, 58, 11, 0.92) 100%)",
};

const NAV_LINKS = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#competitions", label: "Competitions", id: "competitions" },
  { href: "#contact", label: "Contact", id: "contact" },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2.5v2.5M12 19v2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.5 12h2.5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 14.5A8.5 8.5 0 1 1 9.5 5a7 7 0 1 0 9.5 9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>("ocean");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "twilight") setThemeMode("twilight");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = themeMode;
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode, mounted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleToggleTheme = () => {
    setThemeMode((current) => (current === "ocean" ? "twilight" : "ocean"));
  };

  if (!mounted) return null;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-8 sm:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <a
          href="#home"
          className="text-xl italic tracking-wide text-pink-100 sm:text-3xl"
        >
          Kaewkloaw
          <span className="ml-1 text-lg not-italic sm:ml-2 sm:text-2xl">
            🪼
          </span>
        </a>

        <div className="theme-surface hidden rounded-full px-8 py-3 shadow-lg shadow-cyan-300/10 md:flex">
          <div className="flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                className={`transition-all duration-200 hover:-translate-y-0.5 hover:text-yellow-200 ${
                  activeSection === id ? "text-yellow-200" : "text-white/80"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleTheme}
          aria-label={`Switch to ${themeMode === "ocean" ? "twilight" : "ocean"} theme`}
          aria-pressed={themeMode === "twilight"}
          className="group relative flex h-10 w-[84px] items-center overflow-hidden rounded-full border border-white/15 p-1 shadow-lg shadow-pink-300/10 transition-transform duration-300 hover:scale-[1.03] sm:h-11 sm:w-[96px]"
          style={{ background: THEME_GRADIENTS[themeMode] }}
        >
          <span
            className="pointer-events-none absolute inset-0 opacity-35"
            aria-hidden="true"
          >
            <span className="absolute left-3 top-2 h-1 w-1 rounded-full bg-white/90" />
            <span className="absolute left-12 top-3 h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="absolute right-4 top-2 h-1 w-1 rounded-full bg-white/70" />
          </span>

          <span
            className={`pointer-events-none absolute left-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-white transition-opacity duration-300 sm:left-2.5 sm:h-6 sm:w-6 ${
              themeMode === "ocean" ? "opacity-100" : "opacity-55"
            }`}
            aria-hidden="true"
          >
            <MoonIcon />
          </span>

          <span
            className={`pointer-events-none absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-white transition-opacity duration-300 sm:right-2.5 sm:h-6 sm:w-6 ${
              themeMode === "twilight" ? "opacity-100" : "opacity-55"
            }`}
            aria-hidden="true"
          >
            <SunIcon />
          </span>

          <span
            className={`absolute top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#fff8f2] to-[#f0e3d3] shadow-[0_10px_20px_rgba(0,0,0,0.22)] transition-transform duration-300 ease-out sm:h-8 sm:w-8 ${
              themeMode === "ocean"
                ? "translate-x-0"
                : "translate-x-[39px] sm:translate-x-[46px]"
            }`}
          />

          <span
            className={`absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-white/10 bg-white/30 transition-all duration-300 ease-out sm:h-4 sm:w-4 ${
              themeMode === "ocean" ? "left-2.5 sm:left-3" : "left-[45px] sm:left-[53px]"
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
