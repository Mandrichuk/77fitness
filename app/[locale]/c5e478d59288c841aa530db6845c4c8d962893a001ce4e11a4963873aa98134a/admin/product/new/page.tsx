import React from "react";

import AdminHeader from "@/app/components/admin/AdminHeader";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import NewProduct from "@/app/components/admin/NewProduct";
import { LocaleProps } from "@/app/lib";

function page({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <AdminHeader locale={locale} />
      <NewProduct locale={locale} />
    </main>
  );
}

export default page;
