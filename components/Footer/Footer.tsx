import React from "react";
import classes from "./Footer.module.scss";
import { useTranslation } from "next-i18next";
import Phone from "../../assets/svgs/Phone";
import Email from "../../assets/svgs/Email";
import Link from "next/link";
import Discord from "../../assets/svgs/Discord";
import Github from "../../assets/svgs/Github";
import Instagram from "../../assets/svgs/Instagram";
import Linkedin from "../../assets/svgs/Linkedin";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.footer}>
      <div className={classes.contactInfo}>
        <div className={classes.phone}>
          <Phone width={24} height={24} />
          <p>{t("home:PHONE_NUMBER")}</p>
        </div>
        <div className={classes.email}>
          <Email width={24} height={24} />
          <p>mohsen.firastar@gmail.com6666</p>
        </div>
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

export default Footer;
