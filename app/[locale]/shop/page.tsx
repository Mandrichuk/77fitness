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

export const metadata: Metadata = {
  title: "Pricing",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Head locale={locale} />
      <Categories locale={locale}/>
      <ProductSection locale={locale} />
      <Newsletter />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
