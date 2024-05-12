import React from "react";

import AdminHeader from "@/app/components/admin/AdminHeader";
import Footer from "@/app/components/common/Footer";
import ProductsEdit from "@/app/components/admin/ProductsEdit";

import { LocaleProps } from "@/app/lib";

function page({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <AdminHeader locale={locale} />
      <ProductsEdit locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export default page;
