import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Newsletter from "@/app/components/Newsletter";
import CreatedBy from "@/app/components/CreatedBy";
import Payment from "@/app/pricing/Payment";
import Prices from "@/app/components/Prices";

import { LocaleProps } from "../../lib/index";

export const metadata: Metadata = {
  title: "Pricing",
}

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Payment />
      <Prices />
      <Newsletter />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
