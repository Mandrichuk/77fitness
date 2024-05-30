import React from "react";

import AdminHeader from "@/app/components/admin/AdminHeader";
import Footer from "@/app/components/common/Footer";
import ProductEdit from "@/app/components/admin/ProductEdit";

import { EditProductPageProps } from "@/app/lib";

function page({ params: { locale, product_sku } }: EditProductPageProps) {
  return (
    <main>
      <AdminHeader locale={locale} />
      <ProductEdit locale={locale} product_sku={product_sku} />
      <Footer locale={locale} />
    </main>
  );
}

export default page;
