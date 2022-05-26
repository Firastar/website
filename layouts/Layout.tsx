import React from "react";
import Header from "../components/Header/Header";
import classes from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={classes.layout}>
        <div className={classes.greenShadow} />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
