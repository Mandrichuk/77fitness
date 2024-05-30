import React from "react";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Trainers from "@/app/components/trainers/Trainers";

import { LocaleProps } from "@/app/lib/index";

export const metadata: Metadata = {
  title: "Trainers",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Trainers locale={locale} />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
