import React from "react";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

import { useSelector } from "react-redux";
import { LocaleProps } from "@/app/lib";
import NewCategory from "@/app/components/admin/NewCategory";
import ScreenLoading from "@/app/components/common/ScreenLoading";

function page({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <NewCategory locale={locale} />
      <Footer locale={locale} />
      <ScreenLoading />
    </main>
  );
}

export default page;
