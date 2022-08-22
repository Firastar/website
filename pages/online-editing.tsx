import React from "react";
import { OnlineEditor } from "@components";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Page } from "types";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";

const OnlineEditing: Page = () => {
  const { t } = useTranslation("online-editing");

  return (
    <>
      <NextSeo title={t("HEAD_TITLE")} description={t("HEAD_DESCRIPTION")} />
      <OnlineEditor />
    </>
  );
};

export default OnlineEditing;

OnlineEditing.ns = "online-editing";

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
        "online-editing",
        "online-editor",
      ])),
    },
  };
};
