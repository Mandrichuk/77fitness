import React from "react";

import AdminHeader from "@/app/components/admin/AdminHeader";
import Footer from "@/app/components/common/Footer";
import CategoriesEdit from "@/app/components/admin/CategoriesEdit";

import { LocaleProps } from "@/app/lib";

function page({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <AdminHeader locale={locale} />
      <CategoriesEdit locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export default page;
