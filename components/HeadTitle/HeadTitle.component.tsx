import React, { memo } from "react";
import { useTranslation } from "next-i18next";

import Head from "next/head";

interface HeadTitle {
  ns?: string;
}

const HeadTitle = ({ ns }: HeadTitle) => {
  const { t } = useTranslation();
  return (
    <Head>
      <title>
        {t("common:HEAD_TITLE.PREFIX") + " | " + t(ns + ":HEAD_TITLE")}
      </title>
    </Head>
  );
};

export default memo(HeadTitle);
