import React, { memo } from "react";
import classes from "./Footer.module.scss";
import { useTranslation } from "next-i18next";
import {
  Email,
  UkraineFlag,
  Discord,
  Github,
  Instagram,
  Linkedin,
} from "@svgs";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <div id="contact-us" className={classes.wrapper}>
      <div className={classes.contactInfo}>
        {/* <div className={classes.phone}>
          <Phone />
          <p>{t("PHONE_NUMBER")}</p>
        </div> */}
        <div className={classes.email}>
          <Email />
          <p>firastar.team@gmail.com</p>
        </div>
      </div>
      <div className={classes.statement}>
        <UkraineFlag width={24} height={20} />
        {t("STATEMENT")}
      </div>
      <div className={classes.socialMedia}>
        <a
          aria-label="Instagram"
          href="https://instagram.com/firastar.ir"
          target="_blank"
          rel="noreferrer">
          <Instagram />
        </a>
        <a
          aria-label="Discord"
          href="https://discord.gg/E4JbBpYGNc"
          target="_blank"
          rel="noreferrer">
          <Discord />
        </a>
        <a
          aria-label="Linkedin"
          href="https://www.linkedin.com/company/firastar"
          target="_blank"
          rel="noreferrer">
          <Linkedin />
        </a>
        <a
          aria-label="Github"
          href="https://github.com/Firastar"
          target="_blank"
          rel="noreferrer">
          <Github />
        </a>
      </div>
    </div>
  );
};

export default memo(Footer);
