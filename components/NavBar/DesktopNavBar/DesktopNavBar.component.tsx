import React, { memo, useEffect, useState } from "react";
import classes from "./DesktopNavBar.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher, LangSwitcher } from "@components";
import clsx from "clsx";

interface DesktopNavBarProps {
  routes: {
    id: number;
    title: string;
    path: string;
  }[];
}

const DesktopNavBar = ({ routes }: DesktopNavBarProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const { t } = useTranslation();

  // to display shadow when home page is scrolled
  const [displayShadow, setDisplayShadow] = useState(false);
  useScrollPosition(({ currPos }) => {
    setDisplayShadow(currPos.y < 0);
  });

  return (
    <div className={clsx(classes.wrapper, displayShadow && "shadow-md")}>
      <div className={classes.firastarLogoTitle}>
        <Image src="/icons/logo.png" alt="logo" width={48} height={48} />
        <p>{t("common:MAIN_TITLE")}</p>
      </div>
      <div className={classes.menu}>
        {routes.map(route => {
          return (
            mounted && (
              <Link href={route.path} key={route.id}>
                <a
                  className={
                    router.asPath === route.path ? classes.activeItem : ""
                  }>
                  {route.title}
                </a>
              </Link>
            )
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

export default memo(DesktopNavBar);
