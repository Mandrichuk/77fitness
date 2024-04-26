import React from "react";
import { useTranslations } from "next-intl";

import Activity from "../components/home/Activity";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Introduction from "../components/home/Introduction";
import Gallery from "../components/home/Gallery";
import Newsletter from "../components/common/Newsletter";
import Prices from "../components/common/Prices";
import SocialMedia from "../components/common/SocialMedia";
import Team from "../components/home/Team";
import CreatedBy from "../components/common/CreatedBy";
import Application from "../components/home/Application";
import Details from "../components/common/Details";
import Overview from "../components/common/Overview";

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
