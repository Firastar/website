import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import Sun from "../../assets/svgs/Sun";
import Moon from "../../assets/svgs/Moon";

const ThemeSwitcher = () => {
  // check theme is mounted
  const { theme, setTheme } = useTheme();
  const [isThemeMounted, setIsThemeMounted] = useState(false);
  useEffect(() => {
    theme ? setIsThemeMounted(true) : null;
  }, [theme]);

  return (
    isThemeMounted && (
      <Toggle
        defaultChecked={theme === "light" ? true : false}
        icons={{
          checked: <Sun height={20} width={20} />,
          unchecked: <Moon height={18} width={18} />,
        }}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    )
  );
};

export default ThemeSwitcher;
