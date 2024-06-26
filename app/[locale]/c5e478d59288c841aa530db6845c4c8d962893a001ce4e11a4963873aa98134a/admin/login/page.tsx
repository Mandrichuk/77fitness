import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Orders from "@/app/components/admin/Admin";

import { LocaleProps } from "@/app/lib";
import Login from "@/app/components/admin/Login";

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <Login locale={locale} />
    </main>
  );
}

export default Home;
