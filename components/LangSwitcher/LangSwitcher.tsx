import React, { useEffect, useRef, useState } from "react";
import LangSwitchIcon from "../../assets/svgs/LangSwitchIcon";
import { useRouter } from "next/router";
import classes from "./LangSwitcher.module.scss";
import { useTranslation } from "next-i18next";

const LangSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation();

  // close pop up after clicking on body
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const langSwitcherRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClickBody = (e: MouseEvent) => {
      if (!langSwitcherRef.current?.contains(e.target as HTMLBodyElement)) {
        setIsOpenPopup(false);
      }
      return;
    };
    document.body.addEventListener("click", onClickBody, true);
    return () => document.body.removeEventListener("click", onClickBody);
  });

  return (
    <div className="relative" ref={langSwitcherRef}>
      <LangSwitchIcon
        height={24}
        width={40}
        className="cursor-pointer"
        onClick={() => setIsOpenPopup(!isOpenPopup)}
      />
      {isOpenPopup ? (
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
      ) : null}
    </div>
  );
};

export default LangSwitcher;
