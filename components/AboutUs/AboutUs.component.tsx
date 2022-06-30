import React, { memo } from "react";
import classes from "./AboutUs.module.scss";
import { useTranslation } from "next-i18next";

const AboutUs = () => {
  const { t } = useTranslation("about-us");

  return (
    <div id="about-us" className={classes.wrapper}>
      <p className={classes.title}>{t("TITLE")}</p>
      <p className={classes.text}>{t("TEXT")}</p>
    </div>
  );
};

export default memo(AboutUs);
