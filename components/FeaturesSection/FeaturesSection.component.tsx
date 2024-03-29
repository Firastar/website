import React, { memo, useMemo, useRef } from "react";
import classes from "./FeaturesSection.module.scss";
import { FeatureCard } from "@components";
import { StudyingGirl } from "@svgs";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const featuresSectionRef = useRef<HTMLDivElement>(null);

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
      <div className={classes.cols}>
        <StudyingGirl className={classes.leftCol} />
        <div className={classes.rightCol}>
          <div className={classes.cardList}>
            {featuresSectionItems.map(item => (
              <FeatureCard key={item.id} text={item.text} />
            ))}
          </div>
          <p className={classes.descText}>
            {t("features-section:DESC_TEXT.PART_I")}{" "}
            <span className={classes.link}>
              <Link href="/features">
                <a>{t("features-section:LINK_TEXT")}</a>
              </Link>
            </span>{" "}
            {t("features-section:DESC_TEXT.PART_II")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(FeaturesSection);
