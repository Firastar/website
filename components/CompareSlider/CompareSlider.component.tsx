import React, { memo } from "react";
import classes from "./CompareSlider.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ReactCompareSlider, styleFitContainer } from "react-compare-slider";
import { LeftAngle, RightAngle } from "@svgs";
import Image from "next/future/image";

const CompareSlider = () => {
  const { locale } = useRouter();
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
              src="/images/decorative-pic.jpg"
              width={1000}
              height={1000}
              alt="Image-one"
              style={{
                filter: locale === "fa" ? "grayscale(0)" : "grayscale(1)",
                width: "100%",
                height: "auto",
                ...styleFitContainer(),
              }}
            />
          }
          itemTwo={
            <Image
              src="/images/decorative-pic.jpg"
              alt="Image-two"
              width={1000}
              height={1000}
              style={{
                filter: locale === "fa" ? "grayscale(1)" : "grayscale(0)",
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
              src="/images/decorative-pic2.jpg"
              alt="Image-one"
              width={800}
              height={800}
              style={{
                filter: "grayscale(1)",
                width: "100%",
                height: "auto",
                ...styleFitContainer(),
              }}
            />
          }
          itemTwo={
            <Image
              src="/images/decorative-pic2.jpg"
              alt="Image-two"
              width={800}
              height={800}
              style={{
                filter: "grayscale(0)",
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
