import React, { memo, useMemo } from "react";
import classes from "./FeaturesPage.module.scss";
import { useTranslation } from "next-i18next";
import { FeatureCard, FeaturesHeader } from "@components";

const FeaturesPage = () => {
  const { t } = useTranslation();

  const featuresPageItems = useMemo(
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
      {
        id: 6,
        text: t("feature-items:FEATURE_6"),
      },
      {
        id: 7,
        text: t("feature-items:FEATURE_7"),
      },
      {
        id: 8,
        text: t("feature-items:FEATURE_8"),
      },
      {
        id: 9,
        text: t("feature-items:FEATURE_9"),
      },
      {
        id: 10,
        text: t("feature-items:FEATURE_10"),
      },
      {
        id: 11,
        text: t("feature-items:FEATURE_11"),
      },
      {
        id: 12,
        text: t("feature-items:FEATURE_12"),
      },
      {
        id: 13,
        text: t("feature-items:FEATURE_13"),
      },
      {
        id: 14,
        text: t("feature-items:FEATURE_14"),
      },
      {
        id: 15,
        text: t("feature-items:FEATURE_15"),
      },
      {
        id: 16,
        text: t("feature-items:FEATURE_16"),
      },
    ],
    [t]
  );
  return (
    <>
      <FeaturesHeader />
      <div className={classes.featuresBoard}>
        {featuresPageItems.map(item => (
          <FeatureCard key={item.id} text={item.text} />
        ))}
      </div>
    </>
  );
};

export default memo(FeaturesPage);
