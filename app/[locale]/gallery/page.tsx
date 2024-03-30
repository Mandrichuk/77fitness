import React from "react";
import { useTranslations } from "next-intl";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Newsletter from "@/app/components/Newsletter";
import CreatedBy from "@/app/components/CreatedBy";
import Equipment from "@/app/gallery/Equipment";
import Introduction from "@/app/gallery/Introduction";
import Training from "@/app/gallery/Training";
import PromoVideo from "@/app/gallery/PromoVideo";
import SocialMedia from "@/app/components/SocialMedia";

import { LocaleProps } from "@/app/lib/index";

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Introduction />
      <PromoVideo />
      <Equipment />
      <SocialMedia />
      <Training />
      <Newsletter />
      <Footer />
      <CreatedBy />
    </main>
  );
}

export default Home;
