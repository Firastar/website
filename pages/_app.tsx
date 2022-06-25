import React, { useEffect, useMemo } from "react";
import "../styles/globals.scss";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import Layout from "@layouts";
import NextNProgress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AppProps } from "types";
import { HeadTitle } from "@components";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  const dir = useMemo(() => (locale === "fa" ? "rtl" : "ltr"), [locale]);

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <ThemeProvider attribute="class">
      <HeadTitle ns={Component?.ns} />
      <Layout type={Component?.layout}>
        <NextNProgress height={2} color="#15C39A" />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
