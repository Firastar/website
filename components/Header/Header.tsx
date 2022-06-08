import { useTranslation } from "next-i18next";
import { useEffect, useMemo, useState } from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";
import { useTheme } from "next-themes";

const Header = () => {
  const { t } = useTranslation();

  const routes = useMemo(
    () => [
      {
        id: 1,
        title: t("menu-items:item-one"),
        path: "/",
      },
      {
        id: 2,
        title: t("menu-items:item-two"),
        path: "/features",
      },
      {
        id: 3,
        title: t("menu-items:item-three"),
        path: "/sample",
      },
      {
        id: 4,
        title: t("menu-items:item-four"),
        path: "/source-code",
      },
      {
        id: 5,
        title: t("menu-items:item-five"),
        path: "/about-us",
      },
      {
        id: 6,
        title: t("menu-items:item-six"),
        path: "/contact-us",
      },
    ],
    [t]
  );

  return (
    <>
      <DesktopHeader routes={routes} />
      <MobileHeader routes={routes} />
    </>
  );
};

export default Header;
