import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";

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
import Slogan from "../components/common/Slogan";
import Holiday from "../components/home/Holiday";

import { BluredCircleColors } from "../constants";
import { LocaleProps } from "../lib/index";

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Introduction />
      {/* <Holiday /> */}
      {/* <Slogan /> */}
      <Overview locale={locale} />
      <Team />
      <Gallery />
      <Details />
      <SocialMedia />
      <Prices locale={locale} />
      <Application />
      <Activity />
      <Newsletter />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
