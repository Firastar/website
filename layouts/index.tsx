import React, { memo, useMemo } from "react";
import { LayoutType } from "types";

// Layouts
import { default as Empty } from "./Empty/Empty.layout";
import { default as Main } from "./Main/Main.layout";

interface LayoutProps {
  children: React.ReactNode;
  type?: LayoutType;
}

const Layout = ({ children, type = "Main" }: LayoutProps) => {
  const LayoutComponent = useMemo(() => {
    switch (type) {
      case "Main":
        return Main;

      case "Empty":
        return Empty;

      default:
        return React.Fragment;
    }
  }, [type]);

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default memo(Layout);
