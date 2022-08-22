import { FeaturesPage } from "@components";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Page } from "types";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";

const Features: Page = () => {
  const { t } = useTranslation("features");

  return (
    <>
      <NextSeo title={t("HEAD_TITLE")} description={t("HEAD_DESCRIPTION")} />
      <FeaturesPage />
    </>
  );
};

export default Features;

Features.ns = "features";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        "common",
        "features",
        "features-header",
        "lang-popup",
        "menu-items",
        "feature-items",
      ])),
    },
  };
};
