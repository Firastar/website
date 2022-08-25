import { FeaturesPage } from "@components";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Page } from "types";
import { NextSeo } from "next-seo";

const Features: Page = () => {
  return <FeaturesPage />;
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
