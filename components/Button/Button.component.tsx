import React, { memo } from "react";
import classes from "./Button.module.scss";

import clsx from "clsx";

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
  variant: string;
  className?: string;
}

const Button = ({
  text,
  children,
  variant = "main",
  className,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        variant === "main" && classes.mainBtn,
        variant === "secondary" && classes.secondaryBtn,
        className
      )}>
      <span>{text}</span>
      {children}
    </button>
  );
};

export default memo(Button);
