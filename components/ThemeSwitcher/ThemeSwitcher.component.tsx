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
      onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      checked={theme === "dark" ? true : false}
    />
  ) : null;
};

export default memo(ThemeSwitcher);
