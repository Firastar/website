import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CompareSlider from "../components/CompareSlider/CompareSlider";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const router = useRouter();

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
        <button
          type="button"
          className="border p-2 rounded"
          onClick={() => {
            router.locale === "fa"
              ? router.push(router.pathname, router.pathname, { locale: "en" })
              : router.push(router.pathname, router.pathname, { locale: "fa" });
          }}>
          Toggl lang
        </button>
      </div>
      <CompareSlider />
    </div>
  );
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
