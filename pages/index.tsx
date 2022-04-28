import React from "react";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface Props {
  locale: string;
}

const Home: NextPage<Props> = ({ locale }) => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-6 font-bold">{t("common:test")}</p>
        <button
          type="button"
          className="border p-2 rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Toggl Theme
        </button>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home"])),
    },
  };
};
