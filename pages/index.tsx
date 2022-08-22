import {
  Header,
  AboutUs,
  CompareSlider,
  FeaturesSection,
  // FirastarUX,
} from "@components";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Page } from "types";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";

const Home: Page = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo
        title={t("common:MAIN_TITLE")}
        description={t("home:HEAD_DESCRIPTION")}
      />
      <Header />
      <CompareSlider />
      <FeaturesSection />
      <AboutUs />
      {/* <FirastarUX /> */}
    </>
  );
};

export default Home;

Home.ns = "home";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        "common",
        "menu-items",
        "home",
        "header",
        "about-us",
        "features-section",
        "feature-items",
        "slider",
        "lang-popup",
        "firastar-ux",
      ])),
    },
  };
};
