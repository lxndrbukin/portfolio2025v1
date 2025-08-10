"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-md border px-3 py-1.5 text-sm
                 border-slate-300 bg-white text-slate-900
                 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
};

export default function Header() {
  return (
    <div className="dark:bg-[#191828] flex justify-between items-center p-4 w-full">
      <h1 className="text-2xl font-bold">
        <Link href="/">
          <svg
            width="120"
            height="32"
            viewBox="0 0 120 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="select-none text-slate-900 dark:text-white"
          >
            <text
              x="0"
              y="24"
              fontFamily="monospace"
              fontSize="32"
              fontWeight="bold"
              className="text-slate-900 dark:text-white"
              fill="currentColor" // Still needed so Tailwind color applies
            >
              &lt;AB/&gt;
            </text>
          </svg>
        </Link>
      </h1>
      <ul className="flex gap-7 font-bold">
        <li>
          <Link href={""}>About</Link>
        </li>
        <li>
          <Link href={""}>Projects</Link>
        </li>
        <li>
          <Link href={""}>Contact</Link>
        </li>
      </ul>
      <button className="text-white px-4 py-2 rounded-md bg-sky-500/50">
        <span className="font-bold text-slate-900 dark:text-white">My CV</span>
      </button>
      <ThemeChanger />
    </div>
  );
}
