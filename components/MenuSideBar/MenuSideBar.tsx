import React, { useRef } from "react";
import classes from "./MenuSideBar.module.scss";
import { useTranslation } from "next-i18next";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Image from "next/image";
import RightArrow from "../../assets/svgs/RightArrow";
import clsx from "clsx";

interface MenuSideBarProps {
  showMenu: boolean;
  setShowMenu: (arg0: boolean) => void;
}

const MenuSideBar = ({ showMenu, setShowMenu }: MenuSideBarProps) => {
  const { t } = useTranslation();
  const sideBarRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(showMenu);

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
            <RightArrow width={16} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSideBar;
