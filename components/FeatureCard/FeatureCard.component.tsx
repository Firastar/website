import Check from "@svgs/Check.svg";
import React, { memo } from "react";
import classes from "./FeatureCard.module.scss";

interface FeatureCardProps {
  text: string;
}

const FeatureCard = ({ text }: FeatureCardProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.checkCircle}>
        <Check className={classes.check} />
      </div>
      <div className={classes.featureText}>{text}</div>
    </div>
  );
};

export default memo(FeatureCard);
