import React, { memo, useEffect, useRef, useState } from "react";
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
    anchor: string;
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
    ["home", "features", "about-us", "contact-us"],
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

  const scrollSmoothly = (
    // event: React.MouseEvent<, MouseEvent>,
    route: {
      id: number;
      title: string;
      path: string;
      anchor: string;
    }
  ) => {
    // event.preventDefault();
    console.log("1111");
    if (router.pathname !== route.path) {
      console.log("2222");

      setTimeout(() => scrollSmoothly(route), 3000);
    } else if (
      route.anchor
      // route.path.slice(1).startsWith("#") &&
      // router.pathname === "/"
    ) {
      console.log("3333");

      const anchor = document.querySelector(route.anchor) as HTMLElement;

      if (anchor !== null) {
        const offsetTop = anchor.offsetTop - 117;

        scroll({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  // event.preventDefault();

  // const anchor = document.querySelector(route.path.slice(1)) as HTMLElement;
  // let offsetTop;

  // if (anchor !== null) {
  //   offsetTop = anchor.offsetTop - 117;
  // }

  // scroll({
  //   top: offsetTop,
  //   behavior: "smooth",
  // });

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
              <Link href={route.path} key={route.id} passHref>
                <span
                  onClick={() => scrollSmoothly(route)}
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
                </span>
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
