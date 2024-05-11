import React from "react";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

import { useSelector } from "react-redux";
import { LocaleProps } from "@/app/lib";
import NewCategory from "@/app/components/admin/NewCategory";


function page({ params: { locale } }: LocaleProps) {

  return (
    <main>
      <Header locale={locale} />
      <NewCategory locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export default page;
