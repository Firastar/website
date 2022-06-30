import { AboutUs, CompareSlider, Features } from "@components";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Page } from "types";

const Home: Page = () => {
  return (
    <>
      <CompareSlider className="pt-10 lg:pt-24" />
      <Features className="lg:px-8 lg:pt-16 lg:pb-32 pt-10 pb-12" />
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
        "features",
        "feature-items",
      ])),
    },
  };
};
