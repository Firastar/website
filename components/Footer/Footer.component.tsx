import React, { memo } from "react";
import classes from "./Footer.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import {
  Phone,
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
    <div className={classes.wrapper}>
      <div className={classes.contactInfo}>
        <div className={classes.phone}>
          <Phone />
          <p>{t("PHONE_NUMBER")}</p>
        </div>
        <div className={classes.email}>
          <Email />
          <p>mohsen.firastar@gmail.com</p>
        </div>
      </div>
      <div className={classes.statement}>
        <UkraineFlag width={24} height={20} />
        {t("STATEMENT")}
      </div>
      <div className={classes.socialMedia}>
        <Link href="/">
          <a>
            <Instagram />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Discord />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Linkedin />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Github />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default memo(Footer);
