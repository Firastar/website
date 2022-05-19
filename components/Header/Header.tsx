import classes from "./Header.module.scss";
import Image from "next/image";
import logo from "/public/icons/apple-touch-icon-57x57.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const routes = [
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
  ];

  return (
    <div className={classes.header}>
      <div className={classes.firastarLogoTitle}>
        <Image src={logo} alt="logo" />
        <p>{t("common:main-title")}</p>
      </div>
      <div className={classes.menu}>
        {routes.map(route => {
          return (
            <Link href={route.path} passHref key={route.id}>
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
      <div className={classes.flexHandler}></div>
    </div>
  );
};

export default Header;
