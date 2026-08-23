import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const THEMES = [
  { name: "light", label: "Light", icon: Sun },
  { name: "dark", label: "Dark", icon: Moon },
];

function ThemeSelector() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "forest");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "emerald" ? "forest" : "emerald"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "emerald" ? (
        <Sun className="size-5 text-emerald-500" />
      ) : (
        <Moon className="size-5 text-emerald-400" />
      )}
    </button>
  );
}

export default ThemeSelector;