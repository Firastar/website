import React, { memo } from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  text: string;
  children: React.ReactNode;
}

const Button = ({ text, children }: ButtonProps) => {
  return (
    <button className={classes.btn}>
      <span>{text}</span>
      {children}
    </button>
  );
};

export default memo(Button);
