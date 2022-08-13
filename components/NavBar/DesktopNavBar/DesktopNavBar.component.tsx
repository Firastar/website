import React, { memo, useEffect, useState } from "react";
import classes from "./DesktopNavBar.module.scss";
import { useTranslation } from "next-i18next";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher, LangSwitcher } from "@components";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useScrollSpy } from "@hooks";

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

  const { t } = useTranslation();
  const router = useRouter();

  // to display shadow when home page is scrolled
  const [displayShadow, setDisplayShadow] = useState(false);
  useScrollPosition(({ currPos }) => {
    setDisplayShadow(currPos.y < 0);
  });

  // to active menu item when page is scrolled
  const activeId = useScrollSpy(
    ["", "features", "about-us", "contact-us"],
    118
  );

  // check if body is scrolled to the bottom
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 2
      ) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
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
                    (!isScrolled && route.path === "/#" + activeId) ||
                    (!isScrolled &&
                      route.path === "/" + activeId &&
                      router.pathname === "/") ||
                    (isScrolled &&
                      route.path === "/#contact-us" &&
                      router.pathname === "/") ||
                    (router.pathname === route.path &&
                      router.pathname !== "/") ||
                    (router.pathname ===
                      route.path.slice(0, 1) + route.path.slice(2) &&
                      router.pathname !== "/")
                      ? classes.activeItem
                      : ""
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
