import React, { memo, useCallback, useEffect, useState } from "react";
import classes from "./CompareSlider.module.scss";
import { useTranslation } from "next-i18next";
import { ReactCompareSlider, styleFitContainer } from "react-compare-slider";
import { LeftAngle, RightAngle } from "@svgs";
import Image from "next/future/image";
import { useTheme } from "next-themes";

const CompareSlider = () => {
  const { theme } = useTheme();
  const [isThemeMounted, setIsThemeMounted] = useState(false);
  useEffect(() => {
    theme ? setIsThemeMounted(true) : null;
  }, [theme]);
  const { t } = useTranslation("slider");

  const generateCompareImage = useCallback(
    (
      type: "desktop" | "mobile" = "desktop",
      isAfter = true,
      inTheme: "dark" | "light" = "light"
    ) => {
      return (
        <Image
          src={`/images/${isAfter ? "after" : "before"}-${inTheme}.webp`}
          width={type === "desktop" ? 2000 : 500}
          height={type === "desktop" ? 2000 : 500}
          quality={type === "desktop" ? "100%" : undefined}
          priority
          loading={"eager"}
          alt="Image-one"
          style={{
            width: "100%",
            height: "auto",
            ...styleFitContainer(),
            display: theme !== inTheme || !isThemeMounted ? "none" : "inherit",
          }}
        />
      );
    },
    [isThemeMounted, theme]
  );

  return (
    <>
      <p className={classes.title}>{t("TITLE")}</p>
      <div className={classes.desktop}>
        <ReactCompareSlider
          handle={
            <div className={classes.handle}>
              <div className={classes.arrow}>
                <LeftAngle width={14} height={28} color="white" />
                <RightAngle width={14} height={28} color="white" />
              </div>
            </div>
          }
          itemOne={
            <>
              {generateCompareImage("desktop", true, "light")}
              {generateCompareImage("desktop", true, "dark")}
            </>
          }
          itemTwo={
            <>
              {generateCompareImage("desktop", false, "light")}
              {generateCompareImage("desktop", false, "dark")}
            </>
          }
          position={50}
          style={{
            direction: "ltr",
            borderRadius: "0.75rem",
          }}
        />
      </div>
      <div className={classes.mobile}>
        <ReactCompareSlider
          handle={
            <div className={classes.handle}>
              <div className={classes.arrow}>
                <LeftAngle width={14} height={28} color="white" />
                <RightAngle width={14} height={28} color="white" />
              </div>
            </div>
          }
          itemOne={
            <>
              {generateCompareImage("mobile", true, "light")}
              {generateCompareImage("mobile", true, "dark")}
            </>
          }
          itemTwo={
            <>
              {generateCompareImage("mobile", false, "light")}
              {generateCompareImage("mobile", false, "dark")}
            </>
          }
          portrait
          position={50}
          style={{
            direction: "ltr",
            borderRadius: "0.75rem",
          }}
        />
      </div>
    </>
  );
};

export default memo(CompareSlider);
