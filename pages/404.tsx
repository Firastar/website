import React from "react";
import { Page } from "types";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Custom404: Page = () => {
  const { t } = useTranslation("404");

  return (
    <div className="flex flex-col gap-2 justify-center items-center -mt-[6.875rem] lg:-mt-[7.375rem] h-screen">
      <div>
        <span>{t("HEAD_TITLE")}</span>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span>{t("TEXT")}</span>
      </div>
      <p className="text-primary block">
        <Link href="/">{t("LINK")}</Link>
      </p>
    </div>
  );
};

export default Custom404;

Custom404.ns = "404";
Custom404.layout = "Empty";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "404"])),
    },
  };
};
