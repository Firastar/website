import classes from "./CompareSlider.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const CompareSlider = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <p className={classes.compareSliderTitle}>{t("home:slider-title")}</p>
      <div className={classes.desktopCompareSlider}>
        <ReactCompareSlider
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
          }}
        />
      </div>
      <div className={classes.mobileCompareSlider}>
        <ReactCompareSlider
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
          }}
        />
      </div>
    </>
  );
};

export default CompareSlider;
