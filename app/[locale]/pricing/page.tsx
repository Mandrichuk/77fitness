import React from "react";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Newsletter from "@/app/components/Newsletter";
import CreatedBy from "@/app/components/CreatedBy";
import Payment from "@/app/pricing/Payment";
import Prices from "@/app/components/Prices";

import { LocaleProps } from "../../lib/index";

function Home({ params: { locale } }: LocaleProps) {

  return (
    <main>
      <Header locale={locale} />
      <Payment />
      <Prices />
      <Newsletter />
      <Footer />
      <CreatedBy />
    </main>
  );
}

export default Home;
