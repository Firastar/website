import React, { memo, useEffect, useState } from "react";
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
              <Image
                src={"/images/after-light.webp"}
                width={2000}
                height={2000}
                quality="100%"
                priority
                loading={"eager"}
                alt="Image-one"
                style={{
                  width: "100%",
                  height: "auto",
                  ...styleFitContainer(),
                  display:
                    theme === "dark" || !isThemeMounted ? "none" : "inherit",
                }}
              />
              <Image
                src={"/images/after-dark.webp"}
                width={2000}
                height={2000}
                quality="100%"
                priority
                loading={"eager"}
                alt="Image-one"
                style={{
                  width: "100%",
                  height: "auto",
                  ...styleFitContainer(),
                  display:
                    theme === "light" || !isThemeMounted ? "none" : "inherit",
                }}
              />
            </>
          }
          itemTwo={
            <>
              <Image
                src={"/images/before-light.webp"}
                width={2000}
                height={2000}
                quality="100%"
                priority
                loading={"eager"}
                alt="Image-one"
                style={{
                  width: "100%",
                  height: "auto",
                  ...styleFitContainer(),
                  display:
                    theme === "dark" || !isThemeMounted ? "none" : "inherit",
                }}
              />
              <Image
                src={"/images/before-dark.webp"}
                width={2000}
                height={2000}
                quality="100%"
                priority
                loading={"eager"}
                alt="Image-one"
                style={{
                  width: "100%",
                  height: "auto",
                  ...styleFitContainer(),
                  display:
                    theme === "light" || !isThemeMounted ? "none" : "inherit",
                }}
              />
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
              <Image
                src={"/images/after-dark-mobile.webp"}
                priority
                alt="Image-one"
                width={500}
                height={500}
                loading={"eager"}
                style={{
                  width: "100%",
                  height: "auto",
                  ...styleFitContainer(),
                  display:
                    theme === "light" || !isThemeMounted ? "none" : "inherit",
                }}
              />
              <Image
                src={"/images/after-light-mobile.webp"}
                priority
                alt="Image-one"
                width={500}
                height={500}
                loading={"eager"}
                style={{
                  width: "100%",
                  height: "auto",
                  ...styleFitContainer(),
                  display:
                    theme === "dark" || !isThemeMounted ? "none" : "inherit",
                }}
              />
            </>
          }
          itemTwo={
            <>
              <Image
                src={"/images/before-dark-mobile.webp"}
                alt="Image-two"
                priority
                width={500}
                height={500}
                loading={"eager"}
                style={{
                  width: "100%",
                  height: "auto",
                  ...styleFitContainer(),
                  display:
                    theme === "light" || !isThemeMounted ? "none" : "inherit",
                }}
              />
              <Image
                src={"/images/before-light-mobile.webp"}
                alt="Image-two"
                priority
                width={500}
                height={500}
                loading={"eager"}
                style={{
                  width: "100%",
                  height: "auto",
                  ...styleFitContainer(),
                  display:
                    theme === "dark" || !isThemeMounted ? "none" : "inherit",
                }}
              />
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
