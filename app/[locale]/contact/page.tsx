import React from "react";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Newsletter from "@/app/components/common/Newsletter";
import CreatedBy from "@/app/components/common/CreatedBy";
import Contact from "@/app/components/contact/Contact";

import { LocaleProps } from "@/app/lib/index";

export const metadata: Metadata = {
  title: "Gallery",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Contact />
      <Newsletter />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
