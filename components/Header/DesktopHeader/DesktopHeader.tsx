import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher, {
  ThemeSwitcherProps,
} from "../../ThemeSwitcher/ThemeSwitcher";
import LangSwitcher from "../../LangSwitcher/LangSwitcher";
import classes from "./DesktopHeader.module.scss";
import { useTheme } from "next-themes";

interface DesktopHeaderProps {
  routes: {
    id: number;
    title: string;
    path: string;
  }[];
}

const DesktopHeader = ({ routes }: DesktopHeaderProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const [xxx, setXxx] = useState(theme);
  // useEffect(() => {
  //   setXxx(theme === "light" ? "dark" : "light");
  // }, [theme]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.firastarLogoTitle}>
        <Image src="/icons/logo.png" alt="logo" width={48} height={48} />
        <p>{t("common:main-title")}</p>
      </div>
      <div className={classes.menu}>
        {routes.map(route => {
          return (
            <Link href={route.path} key={route.id}>
              <a
                className={
                  router.pathname === route.path ? classes.activeMenu : ""
                }>
                {route.title}
              </a>
            </Link>
          );
        })}
      </div>
      <div className={classes.switchers}>
        <LangSwitcher />
        <ThemeSwitcher mobileMode={false} />
      </div>
    </div>
  );
};

export default DesktopHeader;
