import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import Image from "next/image";
import LangSwitcher from "../../LangSwitcher/LangSwitcher";
import classes from "./MobileHeader.module.scss";
import HamburgerMenu from "../../../assets/svgs/HamburgerMenu";
import MenuSideBar from "../../MenuSideBar/MenuSideBar";

interface MobileHeaderProps {
  routes: {
    id: number;
    title: string;
    path: string;
  }[];
}

const MobileHeader = ({ routes }: MobileHeaderProps) => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={classes.wrapper}>
      <MenuSideBar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        routes={routes}
      />
      <div className={classes.menu}>
        <HamburgerMenu
          width={24}
          height={24}
          color="black"
          className="cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>
      <div className={classes.firastarLogoTitle}>
        <Image src="/icons/logo.png" alt="logo" width={40} height={40} />
        <p>{t("common:MAIN_TITLE")}</p>
      </div>
      <div className={classes.switchers}>
        <LangSwitcher />
      </div>
    </div>
  );
};

export default MobileHeader;
