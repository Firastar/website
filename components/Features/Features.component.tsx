import React, { memo, useMemo } from "react";
import classes from "./Features.module.scss";
import { FeatureCard } from "@components";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface FeaturesProps {
  className: string;
}

const Features = ({ className }: FeaturesProps) => {
  const { t } = useTranslation("features");

  const homeFeatureItems = useMemo(
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
    <div className={className}>
      <p className={classes.title}>{t("TITLE")}</p>
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
            {homeFeatureItems.map(item => (
              <FeatureCard key={item.id} text={item.text} />
            ))}
          </div>
          <p className={classes.descText}>
            {t("DESC_TEXT.PART_I")}{" "}
            <span className={classes.link}>
              <Link href="/features">{t("LINK_TEXT")}</Link>
            </span>{" "}
            {t("DESC_TEXT.PART_II")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Features);
