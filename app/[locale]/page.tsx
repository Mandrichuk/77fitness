import React from "react";
import { useTranslations } from "next-intl";

import Activity from "../home/Activity";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../home/Introduction";
import Gallery from "../home/Gallery";
import Newsletter from "../components/Newsletter";
import Prices from "../components/Prices";
import SocialMedia from "../components/SocialMedia";
import Team from "../home/Team";
import CreatedBy from "../components/CreatedBy";
import Application from "../home/Application";

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
      <Application />
      <Activity />
      <Newsletter />
      <Footer />
      <CreatedBy />
    </main>
  );
}

export default Home;
