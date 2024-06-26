import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Newsletter from "@/app/components/common/Newsletter";
import Head from "@/app/components/shop/Head";
import { LocaleProps } from "../../lib/index";
import Categories from "@/app/components/shop/Categories";
import ProductSection from "@/app/components/shop/ProductsSections";
import CartButton from "@/app/components/shop/CartButton";
import ScreenLoading from "@/app/components/common/ScreenLoading";
import Prices from "@/app/components/common/Prices";

export const metadata: Metadata = {
  title: "Shop",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Head locale={locale} />
      <Categories locale={locale} />
      <ProductSection locale={locale} />
      <Prices locale={locale} />
      <Newsletter />
      <Footer locale={locale} />
      <CreatedBy />
      <CartButton />
      <ScreenLoading />
    </main>
  );
}

export default Home;
