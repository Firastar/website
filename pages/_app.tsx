import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Layout from "../layouts/Layout";
import { appWithTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const dir = useMemo(() => (locale === "fa" ? "rtl" : "ltr"), [locale]);

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>{t("common:main-title")}</title>
      </Head>
      <Layout>
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
