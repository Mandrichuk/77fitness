import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Registration from "@/app/components/common/Registration";

import { LocaleProps } from "../../lib/index";

export const metadata: Metadata = {
  title: "Registration",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Registration locale={locale} />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
