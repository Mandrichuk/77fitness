import React from "react";
import { Metadata } from "next";

import AdminHeader from "@/app/components/admin/AdminHeader";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Orders from "@/app/components/admin/Admin";

import { LocaleProps } from "@/app/lib";

export const metadata: Metadata = {
  title: "Admin Panel",
};

function Home({ params: { locale } }: LocaleProps) {
  return (
    <main>
      <AdminHeader locale={locale} />
      <Orders locale={locale} />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
