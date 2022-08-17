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
import useThrottle from "@hooks/useThrottle.hook";
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

  // final selected navbar item
  const [selectedRoute, setSelectedRoute] = useState("#home");
  const setSelectedRouteThrottle = useThrottle(setSelectedRoute, 500);
  const scrollLockFlag = useRef(false);
  const latestSelectedRoute = useRef("#home");
  const scrollSpyLockFlag = useRef(false);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        !scrollSpyLockFlag.current &&
        !scrollLockFlag.current &&
        router.pathname === "/" &&
        activeId
      ) {
        latestSelectedRoute.current = "#" + activeId;
        setSelectedRoute("#" + activeId);
      }
    }, 300);
    return () => clearInterval(intervalId);
  }, [activeId, router.pathname]);

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
      anchor: string;
    },
    callCounter = 0
  ) => {
    if (callCounter < 1 && router.pathname !== route.path) {
      scrollLockFlag.current = true;
      scrollSpyLockFlag.current = true;
      latestSelectedRoute.current = route.anchor;
      setSelectedRoute(route.anchor);
      setSelectedRouteThrottle(route.anchor);
      setTimeout(() => scrollSmoothly(null, route, 1 + callCounter), 500);
    } else if (route.anchor && callCounter < 2) {
      event?.preventDefault();

      const anchor = document.querySelector(route.anchor) as HTMLElement;

      if (anchor !== null) {
        const offsetTop = anchor.offsetTop - 117;
        scrollSpyLockFlag.current = true;
        scrollLockFlag.current = true;
        latestSelectedRoute.current = route.anchor;
        setSelectedRoute(route.anchor);
        setSelectedRouteThrottle(route.anchor);

        scroll({
          top: offsetTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          if (latestSelectedRoute.current === route.anchor)
            scrollLockFlag.current = false;
        }, 1500);
      }
    }
  };

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
                  onClick={e => scrollSmoothly(e, route)}
                  className={
                    (route.anchor === selectedRoute &&
                      router.pathname === route.path) ||
                    (router.pathname === route.path && router.pathname !== "/")
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
