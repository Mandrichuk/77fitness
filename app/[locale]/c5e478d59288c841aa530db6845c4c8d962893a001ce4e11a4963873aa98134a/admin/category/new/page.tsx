import React from "react";
import AdminHeader from "@/app/components/admin/AdminHeader";
import Footer from "@/app/components/common/Footer";

import { useSelector } from "react-redux";
import { LocaleProps } from "@/app/lib";
import NewCategory from "@/app/components/admin/NewCategory";
import ScreenLoading from "@/app/components/common/ScreenLoading";

function page({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <AdminHeader locale={locale} />
      <NewCategory locale={locale} />
      <Footer locale={locale} />
      <ScreenLoading />
    </main>
  );
}

export default page;
