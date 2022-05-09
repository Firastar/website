import React from "react";
import classes from "./Header.module.scss";
import Image from "next/image";
import logo from "/public/icons/apple-touch-icon-57x57.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className={classes.header}>
      <div className={classes.firastarLogoTitle}>
        <Image src={logo} alt="logo" />
        <p>فیراستار</p>
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

const routes = [
  {
    id: 1,
    title: "خانه",
    path: "/",
  },
  {
    id: 2,
    title: "قابلیت ها",
    path: "/features",
  },
  {
    id: 3,
    title: "نمونه",
    path: "/sample",
  },
  {
    id: 4,
    title: "سورس پروژه",
    path: "/source-code",
  },
  {
    id: 5,
    title: "درباره ما",
    path: "/about-us",
  },
  {
    id: 6,
    title: "تماس با ما",
    path: "/contact-us",
  },
];
