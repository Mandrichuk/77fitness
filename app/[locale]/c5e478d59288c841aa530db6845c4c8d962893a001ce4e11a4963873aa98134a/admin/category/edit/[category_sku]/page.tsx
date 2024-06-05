import React from "react";

import AdminHeader from "@/app/components/admin/AdminHeader";
import Footer from "@/app/components/common/Footer";
import CategoryEdit from "@/app/components/admin/CategoryEdit";

import { EditCategory } from "@/app/lib";

function page({ params: { locale, category_sku } }: EditCategory) {
  return (
    <main>
      <AdminHeader locale={locale} />
      <CategoryEdit locale={locale} category_sku={category_sku} />
    </main>
  );
}

export default page;
