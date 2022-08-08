import React from "react";
import { OnlineEditor } from "@components";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Page } from "types";

const OnlineEditing: Page = () => {
  return <OnlineEditor />;
};

export default OnlineEditing;

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
