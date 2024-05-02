import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";

import { LocaleProps } from "../../../lib/index";

export const metadata: Metadata = {
  title: "Orders",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      orders
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;