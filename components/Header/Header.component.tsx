import React, { memo } from "react";
import classes from "./Header.module.scss";
import { Button } from "@components";
import { Pages, Underline, Chrome, Firefox } from "@svgs";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useWindowSize } from "@hooks";

const Header = () => {
  const { t } = useTranslation("header");
  const { locale } = useRouter();
  const { lg } = useWindowSize();

  return (
    <div className={classes.wrapper}>
      <div className={classes.cols}>
        <div className={classes.rightCol}>
          <div className={classes.title}>
            {t("BEGINNING_OF_TITLE")}
            <div className={classes.underlineWrap}>
              {t("UNDERLINED_WORD")}
              <Underline
                className={clsx(
                  classes.underline,
                  locale === "en" && "rotate-[-1.5deg] !-bottom-1 xl:!-left-12"
                )}
              />
            </div>
            {t("END_OF_TITLE")}
          </div>
          <div className={classes.deskText}>{t("TEXT")}</div>
        </div>
        <div className={classes.leftCol}>
          <Pages className={classes.pages} />
        </div>
      </div>
      <div className={classes.mobText}>{t("TEXT")}</div>
      <div className={classes.btnWrap}>
        <Button
          text={
            lg
              ? t("BUTTON_LABEL_CHROME_DESKTOP")
              : t("BUTTON_LABEL_CHROME_Mobile")
          }>
          <Chrome className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]" />
        </Button>
        <Button
          text={
            lg
              ? t("BUTTON_LABEL_Firefox_DESKTOP")
              : t("BUTTON_LABEL_Firefox_Mobile")
          }>
          <Firefox className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]" />
        </Button>
      </div>
    </div>
  );
};

export default memo(Header);
