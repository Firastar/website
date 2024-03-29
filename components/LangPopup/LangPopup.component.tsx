import React, { memo, useCallback, useEffect, useRef } from "react";
import classes from "./LangPopup.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import "animate.css";

interface LangPopupProps {
  popupDisplayConfig: {
    visibility: boolean;
    animate: string;
  };
  setPopupDisplayConfig: (arg0: {
    visibility: boolean;
    animate: string;
  }) => void;
  closePopup: () => void;
  root?: "desktop" | "mobile";
}

const LangPopup = ({
  popupDisplayConfig,
  setPopupDisplayConfig,
  closePopup,
  root = "desktop",
}: LangPopupProps) => {
  const router = useRouter();
  const { t } = useTranslation("lang-popup");

  const popupRef = useRef<HTMLDivElement>(null);

  const animateType = popupDisplayConfig.animate
    ? "animate__" + popupDisplayConfig.animate
    : "";

  const visibilityStatus = popupDisplayConfig.visibility ? "flex" : "!hidden";

  const fadeOutPopup = () => {
    setPopupDisplayConfig({
      visibility: true,
      animate: "",
    });
  };

  const hidePopup = useCallback(() => {
    setPopupDisplayConfig({
      visibility: false,
      animate: "",
    });
  }, [setPopupDisplayConfig]);

  // to close pop up when window width is changed
  useEffect(() => {
    const resizeHandler = () => {
      if (popupDisplayConfig.visibility && popupDisplayConfig.animate === "") {
        closePopup();
      }
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [popupDisplayConfig, closePopup]);

  return (
    <div
      className={clsx(
        classes.popupWrap,
        `animate__animated ${animateType} animate__faster ${visibilityStatus}`
      )}
      ref={popupRef}
      onAnimationEnd={() => {
        popupDisplayConfig.animate === "fadeOut" ? hidePopup() : fadeOutPopup();
      }}>
      <div
        className={classes.radioWrap}
        onClick={() => {
          router.push(router.pathname, router.pathname, { locale: "fa" });
          closePopup();
        }}>
        <input
          className={classes.radioButton}
          type="radio"
          id={"persian" + root}
          name="lang"
          checked={router.locale === "fa"}
          onChange={() => {
            router.push(router.pathname, router.pathname, { locale: "fa" });
            closePopup();
          }}
        />
        <label htmlFor={"persian" + root} className={classes.label}>
          {t("PERSIAN")}
        </label>
      </div>
      <div
        className={classes.radioWrap}
        onClick={() => {
          router.push(router.pathname, router.pathname, { locale: "en" });
          closePopup();
        }}>
        <input
          className={classes.radioButton}
          type="radio"
          id={"english-" + root}
          name="lang"
          checked={router.locale === "en"}
          onChange={() => {
            router.push(router.pathname, router.pathname, { locale: "en" });
            closePopup();
          }}
        />
        <label htmlFor={"english-" + root} className={classes.label}>
          {t("ENGLISH")}
        </label>
      </div>
    </div>
  );
};

export default memo(LangPopup);

// pop up is memoized to record radio input checked status
