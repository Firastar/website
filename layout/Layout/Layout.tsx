import React from "react";
import classes from "./Layout.module.scss";
import { Footer, Header } from "@components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={classes.layout}>
        {/* <div className={classes.greenShadow} /> */}
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
