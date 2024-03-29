import React from "react";
import { useTranslations } from "next-intl";

import Activity from "../home/Activity";
import Header from "../home/Header";
import Footer from "../home/Footer";
import Introduction from "../home/Introduction";
import Gallery from "../home/Gallery";
import Newsletter from "../home/Newsletter";
import Prices from "../home/Prices";
import SocialMedia from "../home/SocialMedia";
import Team from "../home/Team";
import CreatedBy from "../home/CreatedBy";

import { LocaleProps } from "../lib/index";

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Introduction />
      <Team />
      <Gallery />
      <SocialMedia />
      <Prices />
      <Activity />
      <Newsletter />
      <Footer />
      <CreatedBy />
    </main>
  );
}

export default Home;
