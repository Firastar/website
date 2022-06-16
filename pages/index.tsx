import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CompareSlider from "../components/CompareSlider/CompareSlider";

const Home: NextPage = () => {
  return <CompareSlider />;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        "common",
        "menu-items",
        "home",
      ])),
    },
  };
};
