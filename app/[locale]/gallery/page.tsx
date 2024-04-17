import React from "react";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Newsletter from "@/app/components/Newsletter";
import CreatedBy from "@/app/components/CreatedBy";
import Equipment from "@/app/components/gallery/Equipment";
import Training from "@/app/components/gallery/Training";
import PromoVideo from "@/app/components/gallery/PromoVideo";
import SocialMedia from "@/app/components/SocialMedia";

import { LocaleProps } from "@/app/lib/index";

export const metadata: Metadata = {
  title: "Gallery",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <PromoVideo />
      <Equipment />
      <SocialMedia />
      <Training />
      <Newsletter />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
