import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Orders from "@/app/components/orders/Orders";

import { LocaleProps } from "../../../lib/index";
import ScreenLoading from "@/app/components/common/ScreenLoading";

export const metadata: Metadata = {
  title: "Orders",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Orders locale={locale} />
      <Footer locale={locale} />
      <CreatedBy />
      <ScreenLoading />
    </main>
  );
}

export default Home;
