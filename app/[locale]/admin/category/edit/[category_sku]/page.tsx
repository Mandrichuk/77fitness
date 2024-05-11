import React from "react";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CategoryEdit from "@/app/components/admin/CategoryEdit";

import { EditCategory } from "@/app/lib";

function page({ params: { locale, category_sku } }: EditCategory) {
  return (
    <main>
      <Header locale={locale} />
      <CategoryEdit locale={locale} category_sku={category_sku} />
      <Footer locale={locale} />
    </main>
  );
}

export default page;
