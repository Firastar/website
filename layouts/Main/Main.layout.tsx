import React, { memo } from "react";
import classes from "./Main.module.scss";
import { Footer, Header } from "@components";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
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

export default memo(Main);
