import { AboutUs, CompareSlider, FeaturesSection } from "@components";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Page } from "types";

const Home: Page = () => {
  return (
    <>
      <CompareSlider />
      <FeaturesSection />
      <AboutUs />
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
        "about-us",
        "features-section",
        "feature-items",
        "slider",
        "lang-popup",
      ])),
    },
  };
};
