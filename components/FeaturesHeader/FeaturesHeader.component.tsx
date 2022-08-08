import React, { memo } from "react";
import classes from "./FeaturesHeader.module.scss";
import { Folders } from "@svgs";
import { useTranslation } from "next-i18next";

const FeaturesHeader = () => {
  const { t } = useTranslation("features-header");
  return (
    <div className={classes.wrapper}>
      <div className={classes.rightCol}>
        <p className={classes.title}>{t("TITLE")}</p>
        <p className={classes.text}>{t("TEXT")}</p>
      </div>
      <div className={classes.leftCol}>
        <Folders />
      </div>
    </div>
  );
};

export default memo(FeaturesHeader);
