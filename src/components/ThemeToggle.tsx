import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="px-3 py-1 rounded border bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {isDark ? " Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
