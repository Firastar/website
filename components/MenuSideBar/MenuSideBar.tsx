import React, { useRef } from "react";
import classes from "./MenuSideBar.module.scss";
import { useTranslation } from "next-i18next";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Image from "next/image";
import RightArrow from "../../assets/svgs/RightArrow";
import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import Phone from "../../assets/svgs/Phone";
import Email from "../../assets/svgs/Email";

interface MenuSideBarProps {
  showMenu: boolean;
  setShowMenu: (arg0: boolean) => void;
  routes: {
    id: number;
    title: string;
    path: string;
  }[];
}

const MenuSideBar = ({ showMenu, setShowMenu, routes }: MenuSideBarProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const sideBarRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(showMenu);

  const sideBarHeight = () =>
    sideBarRef.current?.style.setProperty(
      "min-height",
      `${window.innerHeight}px`
    );
  sideBarHeight();

  return (
    <div
      className={clsx(classes.overlay, showMenu ? "visible" : "invisible")}
      onClick={e => {
        !sideBarRef.current?.contains(e.target as HTMLElement)
          ? setShowMenu(false)
          : null;
      }}>
      <div
        ref={sideBarRef}
        className={clsx(
          classes.menuWrapp,
          showMenu
            ? "translate-x-0 transition-all duration-200"
            : "translate-x-72 ltr:-translate-x-72 transition-all duration-200",
          classes.ltrGrid
        )}>
        <div className={classes.menuHeader}>
          <ThemeSwitcher mobileMode={true} />
          <div className={classes.firastarLogoTitle}>
            <Image src="/icons/logo.png" alt="logo" width={28} height={28} />
            <p>{t("common:MAIN_TITLE")}</p>
          </div>
          <div className={classes.arrow} onClick={() => setShowMenu(false)}>
            <RightArrow />
          </div>
        </div>
        <div className={classes.menuItems}>
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

export default MenuSideBar;
