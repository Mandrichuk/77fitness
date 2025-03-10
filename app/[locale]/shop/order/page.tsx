import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Login from "@/app/components/common/Login";
import Order from "@/app/components/shop/Oder";

import { LocaleProps } from "@/app/lib";

export const metadata: Metadata = {
  title: "Login",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Order />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
