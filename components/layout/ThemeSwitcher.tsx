import { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  // On mount, check if a theme is saved in localStorage or use the system default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      // Default to system preference
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Toggle the theme and store the preference in localStorage
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
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
    >
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeSwitcher;
