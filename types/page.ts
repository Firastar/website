import { NextPage } from "next";
import { LayoutType } from "./layout";
import { AppProps as NextAppProps } from "next/app";

export type Page<P = unknown> = NextPage<P> & {
  layout?: LayoutType;
  ns?: string;
};

export type AppProps = NextAppProps & {
  Component: Page;
};
