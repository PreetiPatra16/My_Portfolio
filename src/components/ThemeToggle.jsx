import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const isDark = document.documentElement.classList.contains("dark");

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");

    window.dispatchEvent(
      new CustomEvent("theme-change", {
        detail: nextDark ? "dark" : "light",
      })
    );
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        fixed bottom-6 right-6 z-[9999]
        p-3 rounded-full
        bg-black/60 backdrop-blur-xl
        border border-white/20
        shadow-lg
        transition-transform duration-300
        hover:scale-105
      "
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-white" />
      )}
    </button>
  );
};
