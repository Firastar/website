import React, { memo } from "react";
import classes from "./AboutUs.module.scss";
import { useTranslation } from "next-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>{t("home:ABOUTUS_TITLE")}</p>
      <p className={classes.text}>{t("home:ABOUTUS_TEXT")}</p>
    </div>
  );
};

export default memo(AboutUs);
