import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import classes from "./Layout.module.scss";

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
