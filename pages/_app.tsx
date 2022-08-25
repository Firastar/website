import React, { useEffect, useMemo } from "react";
import "../styles/globals.scss";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import Layout from "@layouts";
import NextNProgress from "nextjs-progressbar";
import { appWithTranslation, useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AppProps } from "types";
import { HeadTitle } from "@components";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  const dir = useMemo(() => (locale === "fa" ? "rtl" : "ltr"), [locale]);

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  const withTerritory = (locale: string | undefined) => {
    switch (locale) {
      case "fa":
        return "fa_IR";
      case "en":
        return "en_US";
      default:
        return locale;
    }
  };

  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <HeadTitle ns={Component?.ns} />
      <Layout type={Component?.layout}>
        <NextNProgress height={2} color="#15C39A" />
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: withTerritory(locale),
            url: "https://firastar.ir/",
            site_name: t("MAIN_TITLE"),
            images: [
              {
                url: "/public/icons/mstile-310x310.png",
                width: 310,
                height: 310,
                alt: "Og Image Firastar",
              },
              {
                url: "https://raw.githubusercontent.com/Firastar/design/master/banner/banner.png",
                width: 1024,
                height: 329,
                alt: "Og Image Firastar II",
              },
            ],
          }}
        />
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
