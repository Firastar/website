import React from "react";
import classes from "./DesktopHeader.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import LangSwitcher from "../../LangSwitcher/LangSwitcher";
import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";

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

  return (
    <div className={classes.wrapper}>
      <div className={classes.firastarLogoTitle}>
        <Image src="/icons/logo.png" alt="logo" width={48} height={48} />
        <p>{t("common:MAIN_TITLE")}</p>
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
