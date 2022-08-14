import React, { memo } from "react";
import classes from "./Button.module.scss";

import clsx from "clsx";

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  clickHandler: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({
  text,
  children,
  variant = "primary",
  className,
  clickHandler,
}: ButtonProps) => {
  return (
    <button
      onClick={clickHandler}
      className={clsx(
        variant === "primary" && classes.mainBtn,
        variant === "secondary" && classes.secondaryBtn,
        className
      )}>
      <span>{text}</span>
      {children}
    </button>
  );
};

export default memo(Button);
