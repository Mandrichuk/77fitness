import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Newsletter from "@/app/components/common/Newsletter";
import CreatedBy from "@/app/components/common/CreatedBy";
import Payment from "@/app/components/pricing/Payment";
import Prices from "@/app/components/common/Prices";

import { LocaleProps } from "../../lib/index";

export const metadata: Metadata = {
  title: "Pricing",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
