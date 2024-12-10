"use client";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size="icon"
      className="theme-toggle rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <LuSun className="dark:hidden" />
      <LuMoon className="hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
