import React, { useState } from "react";
import classes from "./MobileNavBar.module.scss";
import { useTranslation } from "next-i18next";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { HamburgerMenu } from "@svgs";
import { NavDrawer, LangSwitcher } from "@components";
import Image from "next/image";
import clsx from "clsx";

interface MobileNavBarProps {
  routes: {
    id: number;
    title: string;
    path: string;
  }[];
}

const MobileNavBar = ({ routes }: MobileNavBarProps) => {
  const { t } = useTranslation();
  const [showDrawer, setShowDrawer] = useState(false);

  // to display shadow when home page is scrolled
  const [displayShadow, setDisplayShadow] = useState(false);
  useScrollPosition(({ currPos }) => {
    setDisplayShadow(currPos.y < 0);
  });

  return (
    <div className={clsx(classes.wrapper, displayShadow && "shadow-md")}>
      <NavDrawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        routes={routes}
      />
      <div className={classes.menu}>
        <HamburgerMenu
          width={24}
          height={24}
          color="black"
          className="cursor-pointer"
          onClick={() => setShowDrawer(true)}
        />
      </div>
      <div className={classes.logo}>
        <Image src="/icons/logo.png" alt="logo" width={40} height={40} />
        <p>{t("common:MAIN_TITLE")}</p>
      </div>
      <div className={classes.switcher}>
        <LangSwitcher />
      </div>
    </div>
  );
};

export default MobileNavBar;
