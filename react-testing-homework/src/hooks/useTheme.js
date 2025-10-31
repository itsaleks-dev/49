import { useState, useEffect } from "react";

export function useTheme() {
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("theme");

    const [themeName, setThemeName] = useState(saved || (system ? "dark" : "light"));

    useEffect(() => {
        localStorage.setItem("theme", themeName);
    }, [themeName]);

    const toggleTheme = () => {
        setThemeName((prev) => (prev === "light" ? "dark" : "light"));
    };
    return { themeName, toggleTheme};
}
