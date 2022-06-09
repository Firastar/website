import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";

const Header = () => {
  const { t } = useTranslation();

  const routes = useMemo(
    () => [
      {
        id: 1,
        title: t("menu-items:HOME"),
        path: "/",
      },
      {
        id: 2,
        title: t("menu-items:FEATURES"),
        path: "/features",
      },
      {
        id: 3,
        title: t("menu-items:ONLINE_EDITING"),
        path: "/sample",
      },
      {
        id: 4,
        title: t("menu-items:ABOUT_US"),
        path: "/source-code",
      },
      {
        id: 5,
        title: t("menu-items:CONTACT_US"),
        path: "/about-us",
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
