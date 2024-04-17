import React from "react";
import { useTranslations } from "next-intl";

import Activity from "../components/home/Activity";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/home/Introduction";
import Gallery from "../components/home/Gallery";
import Newsletter from "../components/Newsletter";
import Prices from "../components/Prices";
import SocialMedia from "../components/SocialMedia";
import Team from "../components/home/Team";
import CreatedBy from "../components/CreatedBy";
import Application from "../components/home/Application";
import Details from "../components/Details";
import Overview from "../components/Overview";

import { BluredCircleColors } from "../constants";
import { LocaleProps } from "../lib/index";

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Introduction />
      <Overview locale={locale} />
      <Team />
      <Gallery />
      <Details />
      <SocialMedia />
      <Prices />
      <Application />
      <Activity />
      <Newsletter />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
