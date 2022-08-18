import React, { memo, useEffect, useRef, useState } from "react";
import classes from "./NavDrawer.module.scss";
import { useLockBodyScroll, useScrollSpy, useThrottle } from "@hooks";
import { ThemeSwitcher } from "@components";
import { RightArrow, Phone, Email, LeftArrow } from "@svgs";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import clsx from "clsx";
import "animate.css";

interface NavDrawerProps {
  showDrawer: boolean;
  setShowDrawer: (arg0: boolean) => void;
  routes: {
    id: number;
    title: string;
    path: string;
    hashId: string;
  }[];
}

const NavDrawer = ({ showDrawer, setShowDrawer, routes }: NavDrawerProps) => {
  // check if links are mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const { t } = useTranslation("common");

  // fit navigation drawer in mobiles
  const drawerRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(showDrawer);
  const drawerHeight = () =>
    drawerRef.current?.style.setProperty(
      "min-height",
      `${window.innerHeight}px`
    );
  drawerHeight();

  // to active menu item when page is scrolled
  const activeId = useScrollSpy(
    ["home", "features", "about-us", "contact-us"],
    72
  );

  // the final selected item
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
      console.log(router.pathname, route.path, route.hashId);
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
        const offsetTop = elementWithHashId.offsetTop - 71;
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
    <div
      className={clsx(classes.overlay, showDrawer ? "visible" : "invisible")}
      onClick={e => {
        !drawerRef.current?.contains(e.target as HTMLElement)
          ? setShowDrawer(false)
          : null;
      }}>
      <div
        ref={drawerRef}
        className={clsx(
          classes.drawerWrap,
          showDrawer
            ? "translate-x-0 transition-all duration-200"
            : "translate-x-72 ltr:-translate-x-72 transition-all duration-200",
          classes.ltrGrid
        )}>
        <div className={classes.header}>
          <ThemeSwitcher mobileMode={true} />
          <div className={classes.logo}>
            <Image src="/icons/logo.png" alt="logo" width={28} height={28} />
            <p>{t("MAIN_TITLE")}</p>
          </div>
          <div className={classes.arrow} onClick={() => setShowDrawer(false)}>
            {router.locale === "fa" ? <RightArrow /> : <LeftArrow />}
          </div>
        </div>
        <div className={classes.items}>
          {routes.map(route => {
            return (
              mounted && (
                <Link href={route.path} key={route.id}>
                  <a
                    onClick={e => {
                      scrollSmoothly(e, route);
                      setShowDrawer(false);
                    }}
                    className={
                      (route.hashId === selectedRoute &&
                        router.pathname === route.path) ||
                      (router.pathname === route.path &&
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
        <div className={classes.contactInfo}>
          <div className={classes.phone}>
            <Phone width={16} height={16} />
            <p>{t("PHONE_NUMBER")}</p>
          </div>
          <div className={classes.email}>
            <Email width={16} height={16} />
            <p>mohsen.firastar@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(NavDrawer);
