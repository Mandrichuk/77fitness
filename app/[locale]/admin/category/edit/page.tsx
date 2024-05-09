import React from "react";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CategoriesEdit from "@/app/components/admin/CategoriesEdit";

import { LocaleProps } from "@/app/lib";

function page({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <Header locale={locale} />
      <CategoriesEdit locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export default page;
