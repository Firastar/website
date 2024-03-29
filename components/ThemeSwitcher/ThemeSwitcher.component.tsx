import React, { useState, useEffect, memo } from "react";
import { useTheme } from "next-themes";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { Sun, Moon } from "@svgs";

export interface ThemeSwitcherProps {
  mobileMode?: boolean;
}

const ThemeSwitcher = ({ mobileMode = false }: ThemeSwitcherProps) => {
  // check theme is mounted
  const { theme, setTheme } = useTheme();
  const [isThemeMounted, setIsThemeMounted] = useState(false);
  useEffect(() => {
    theme ? setIsThemeMounted(true) : null;
  }, [theme]);

  return isThemeMounted ? (
    <Toggle
      icons={{
        checked: (
          <Moon height={!mobileMode ? 18 : 16} width={!mobileMode ? 18 : 16} />
        ),
        unchecked: (
          <Sun height={!mobileMode ? 20 : 18} width={!mobileMode ? 20 : 18} />
        ),
      }}
      onChange={() => setTheme(theme === "dark" || !theme ? "light" : "dark")}
      checked={theme === "light" || !theme ? false : true}
      aria-labelledby="toggle-theme"
      aria-label="toggle-theme"
    />
  ) : null;
};

export default memo(ThemeSwitcher);
