import React, { memo, useEffect, useRef, useState } from "react";
import classes from "./DesktopNavBar.module.scss";
import { ThemeSwitcher, LangSwitcher } from "@components";
import { useScrollSpy, useThrottle } from "@hooks";

import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";

import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

interface DesktopNavBarProps {
  routes: {
    id: number;
    title: string;
    path: string;
    hashId: string;
  }[];
}

const DesktopNavBar = ({ routes }: DesktopNavBarProps) => {
  // check if links are mounted
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

  //  the final selected item
  const [selectedRoute, setSelectedRoute] = useState("#home");
  const setSelectedRouteThrottle = useThrottle(setSelectedRoute, 500);
  const latestSelectedRoute = useRef("#home");

  // check if the page is scrolling
  const scrollLockFlag = useRef(false);

  // check if scrolling is over
  const scrollSpyLockFlag = useRef(false);

  // set selected route if the conditions are met
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        !scrollSpyLockFlag.current &&
        !scrollLockFlag.current &&
        router.pathname === "/" &&
        activeId
      ) {
        latestSelectedRoute.current = "#" + activeId;
        setSelectedRouteThrottle("#" + activeId);
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [activeId, router.pathname, setSelectedRouteThrottle]);

  // set scrollSpyLockFlag to be false when scrollLockFlag is false
  useEffect(() => {
    const listener = () => {
      if (!scrollLockFlag.current) scrollSpyLockFlag.current = false;
    };

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const scrollSmoothly = (
    event: null | React.MouseEvent,
    route: {
      id: number;
      title: string;
      path: string;
      hashId: string;
    },
    callCounter = 0
  ) => {
    if (callCounter < 1 && router.pathname !== route.path) {
      // console.log(router.pathname, route.path, route.hashId);
      scrollLockFlag.current = true;
      scrollSpyLockFlag.current = true;
      latestSelectedRoute.current = route.hashId;
      setSelectedRoute(route.hashId);
      setSelectedRouteThrottle(route.hashId);
      setTimeout(() => scrollSmoothly(null, route, 1 + callCounter), 500);
    } else if (route.hashId && callCounter < 2) {
      event?.preventDefault();

      const elementWithHashId = document.querySelector(
        route.hashId
      ) as HTMLElement;

      if (elementWithHashId !== null) {
        const offsetTop = elementWithHashId.offsetTop - 117;
        scrollSpyLockFlag.current = true;
        scrollLockFlag.current = true;
        latestSelectedRoute.current = route.hashId;
        setSelectedRoute(route.hashId);
        setSelectedRouteThrottle(route.hashId);

        scroll({
          top: offsetTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          if (latestSelectedRoute.current === route.hashId)
            scrollLockFlag.current = false;
        }, 1500);
      }
    }
  };

  return (
    <div className={clsx(classes.wrapper, displayShadow && "shadow-md")}>
      <div className={classes.firastarLogoTitle}>
        <Image
          loading={"eager"}
          src="/icons/logo.png"
          quality={100}
          alt="logo"
          width={48}
          height={48}
        />
        <p>{t("common:MAIN_TITLE")}</p>
      </div>
      <div className={classes.menu}>
        {routes.map(route => {
          return (
            mounted && (
              <Link href={route.path} key={route.id}>
                <a
                  onClick={e => scrollSmoothly(e, route)}
                  className={
                    (route.hashId === selectedRoute &&
                      router.pathname === route.path) ||
                    (router.pathname === route.path &&
                      router.pathname !== "/") ||
                    router.pathname === "/" + route.hashId.slice(1)
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
        <LangSwitcher root="desktop" />
        <ThemeSwitcher mobileMode={false} />
      </div>
    </div>
  );
};

export default memo(DesktopNavBar);
