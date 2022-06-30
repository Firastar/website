import React, { memo } from "react";
import { Footer, NavBar } from "@components";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default memo(Main);
