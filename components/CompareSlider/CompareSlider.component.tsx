import React, { memo } from "react";
import classes from "./CompareSlider.module.scss";
import { useTranslation } from "next-i18next";
import { ReactCompareSlider, styleFitContainer } from "react-compare-slider";
import { LeftAngle, RightAngle } from "@svgs";
import Image from "next/future/image";
import { useTheme } from "next-themes";

const CompareSlider = () => {
  const { theme } = useTheme();
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
            <Image
              src={
                (theme || "light") === "light"
                  ? require("../../public/images/after-light.webp")
                  : require("../../public/images/after-dark.webp")
              }
              width={2000}
              height={2000}
              quality="100%"
              loading={"eager"}
              alt="Image-one"
              style={{
                width: "100%",
                height: "auto",
                ...styleFitContainer(),
              }}
            />
          }
          itemTwo={
            <Image
              src={
                (theme || "light") === "light"
                  ? require("../../public/images/before-light.webp")
                  : require("../../public/images/before-dark.webp")
              }
              quality="100%"
              alt="Image-two"
              width={2000}
              height={2000}
              loading={"eager"}
              style={{
                width: "100%",
                height: "auto",
                ...styleFitContainer(),
              }}
            />
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
            <Image
              src={
                (theme || "light") === "light"
                  ? require("../../public/images/after-light-mobile.webp")
                  : require("../../public/images/after-dark-mobile.webp")
              }
              quality="100%"
              alt="Image-one"
              width={500}
              height={500}
              loading={"eager"}
              style={{
                width: "100%",
                height: "auto",
                ...styleFitContainer(),
              }}
            />
          }
          itemTwo={
            <Image
              src={
                (theme || "light") === "light"
                  ? require("../../public/images/before-light-mobile.webp")
                  : require("../../public/images/before-dark-mobile.webp")
              }
              alt="Image-two"
              quality="100%"
              width={500}
              height={500}
              loading={"eager"}
              style={{
                width: "100%",
                height: "auto",
                ...styleFitContainer(),
              }}
            />
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
