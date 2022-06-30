import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import classes from "./FeaturesSection.module.scss";
import { FeatureCard } from "@components";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const featuresSectionRef = useRef<HTMLDivElement>(null);

  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // isMounted && window.scrollTo(0, (featuresSectionRef.current.offsetTop = 55));

  // window.scrollTo(0,  {(featuresSectionRef.offsetTop = 55)});

  const featuresSectionItems = useMemo(
    () => [
      {
        id: 1,
        text: t("feature-items:FEATURE_1"),
      },
      {
        id: 2,
        text: t("feature-items:FEATURE_2"),
      },
      {
        id: 3,
        text: t("feature-items:FEATURE_3"),
      },
      {
        id: 4,
        text: t("feature-items:FEATURE_4"),
      },
      {
        id: 5,
        text: t("feature-items:FEATURE_5"),
      },
    ],
    [t]
  );

  return (
    <div id="features" ref={featuresSectionRef} className={classes.wrapper}>
      <p className={classes.title}>{t("features-section:TITLE")}</p>
      <div className={classes.leftCol}>
        <div className={classes.imageContainer}>
          <Image
            src="/images/feature-vector-i.png"
            alt="feature-vector-i"
            layout="responsive"
            width={547}
            height={524}
          />
        </div>
        <div className={classes.rightCol}>
          <div className={classes.cardList}>
            {featuresSectionItems.map(item => (
              <FeatureCard key={item.id} text={item.text} />
            ))}
          </div>
          <p className={classes.descText}>
            {t("features-section:DESC_TEXT.PART_I")}{" "}
            <span className={classes.link}>
              <Link href="/features">{t("features-section:LINK_TEXT")}</Link>
            </span>{" "}
            {t("features-section:DESC_TEXT.PART_II")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(FeaturesSection);
