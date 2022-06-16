import React from "react";
import classes from "./CompareSlider.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { LeftAngle, RightAngle } from "@svgs";

const CompareSlider = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <p className={classes.compareSliderTitle}>{t("home:SLIDER_TITLE")}</p>
      <div className={classes.desktopCompareSlider}>
        <ReactCompareSlider
          handle={
            <div className={classes.handle}>
              <div className={classes.arrowWrap}>
                <LeftAngle width={14} height={28} color="white" />
                <RightAngle width={14} height={28} color="white" />
              </div>
            </div>
          }
          itemOne={
            <ReactCompareSliderImage
              src="/images/decorative-pic.png"
              alt="Image-one"
              style={{
                filter: locale === "fa" ? "grayscale(0)" : "grayscale(1)",
              }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="/images/decorative-pic.png"
              alt="Image-two"
              style={{
                filter: locale === "fa" ? "grayscale(1)" : "grayscale(0)",
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
      <div className={classes.mobileCompareSlider}>
        <ReactCompareSlider
          handle={
            <div className={classes.handle}>
              <div className={classes.arrowWrap}>
                <LeftAngle width={14} height={28} color="white" />
                <RightAngle width={14} height={28} color="white" />
              </div>
            </div>
          }
          itemOne={
            <ReactCompareSliderImage
              src="/images/decorative-pic2.png"
              alt="Image-one"
              style={{
                filter: "grayscale(1)",
              }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="/images/decorative-pic2.png"
              alt="Image-two"
              style={{
                filter: "grayscale(0)",
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

export default CompareSlider;
