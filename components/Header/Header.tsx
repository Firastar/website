import classes from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useEffect, useState } from "react";
import { useMemo } from "react";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const [isThemeMounted, setIsThemeMounted] = useState(false);

  useEffect(() => {
    theme ? setIsThemeMounted(true) : null;
  }, [theme]);

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
    <div className={classes.header}>
      <div className={classes.firastarLogoTitle}>
        <Image src="/icons/logo.png" alt="logo" width={48} height={48} />
        <p>{t("common:main-title")}</p>
      </div>
      <div className={classes.menu}>
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
      {isThemeMounted && (
        <div className={classes.flexHandler}>
          <Toggle
            defaultChecked={theme === "light" ? true : false}
            // className="custom-classname"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
