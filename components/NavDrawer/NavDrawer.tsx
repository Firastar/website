import React, { useRef } from "react";
import classes from "./NavDrawer.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useLockBodyScroll } from "@hooks";
import clsx from "clsx";
import { ThemeSwitcher } from "@components";
import Image from "next/image";
import { RightArrow, Phone, Email, LeftArrow } from "@svgs";
import Link from "next/link";
import "animate.css";

interface NavDrawerProps {
  showDrawer: boolean;
  setShowDrawer: (arg0: boolean) => void;
  routes: {
    id: number;
    title: string;
    path: string;
  }[];
}

const NavDrawer = ({ showDrawer, setShowDrawer, routes }: NavDrawerProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const drawerRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(showDrawer);

  const drawerHeight = () =>
    drawerRef.current?.style.setProperty(
      "min-height",
      `${window.innerHeight}px`
    );
  drawerHeight();

  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={clsx(classes.overlay, showDrawer ? "visible" : "invisible")}
      ref={overlayRef}
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
            <p>{t("common:MAIN_TITLE")}</p>
          </div>
          <div className={classes.arrow} onClick={() => setShowDrawer(false)}>
            {router.locale === "fa" ? <RightArrow /> : <LeftArrow />}
          </div>
        </div>
        <div className={classes.items}>
          {routes.map(route => {
            return (
              <Link href={route.path} key={route.id}>
                <a
                  className={
                    router.pathname === route.path ? classes.activeItem : ""
                  }>
                  {route.title}
                </a>
              </Link>
            );
          })}
        </div>
        <div className={classes.contactInfo}>
          <div className={classes.phone}>
            <Phone width={16} height={16} />
            <p>{t("home:PHONE_NUMBER")}</p>
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

export default NavDrawer;
