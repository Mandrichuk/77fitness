import React from "react";
import { Metadata } from "next";

import AdminHeader from "@/app/components/admin/AdminHeader";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Orders from "@/app/components/admin/Admin";

import { LocaleProps } from "@/app/lib";
import { getOrders } from "@/app/services/data";

export const metadata: Metadata = {
  title: "Admin Panel",
};

async function Home({ params: { locale } }: LocaleProps) {
const orders = await getOrders();
console.log(orders)
  return (
    <main>
      <AdminHeader locale={locale} />
      <Orders locale={locale} orders={orders} />
      <Footer locale={locale} />
      <CreatedBy />
    </main>
  );
}

export default Home;
