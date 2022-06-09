import React from "react";
import classes from "./LangPopup.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

interface LangPopupProps {
  setIsOpenPopup: (arg0: boolean) => void;
}

const LangPopup = ({ setIsOpenPopup }: LangPopupProps) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className={classes.popupWrap}>
      <div
        className={classes.redioWrap}
        onClick={() => {
          router.push(router.pathname, router.pathname, { locale: "fa" });
          setIsOpenPopup(false);
        }}>
        <input
          className={classes.radioButton}
          type="radio"
          id="persian"
          name="lang"
          defaultChecked={router.locale === "fa" ? true : false}
        />
        <label htmlFor="persian" className={classes.label}>
          {t("home:PERSIAN_LANG")}
        </label>
      </div>
      <div
        className={classes.redioWrap}
        onClick={() => {
          router.push(router.pathname, router.pathname, { locale: "en" });
          setIsOpenPopup(false);
        }}>
        <input
          className={classes.radioButton}
          type="radio"
          id="english"
          name="lang"
          defaultChecked={router.locale === "en" ? true : false}
        />
        <label htmlFor="english" className={classes.label}>
          {t("home:ENGLISH_LANG")}
        </label>
      </div>
    </div>
  );
};

export default LangPopup;
