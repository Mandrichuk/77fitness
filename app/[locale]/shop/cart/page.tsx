import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Newsletter from "@/app/components/common/Newsletter";
import CartProducts from "@/app/components/cart/CartProducts";
import PriceDetails from "@/app/components/cart/PriceDetails";
import ScreenLoading from "@/app/components/common/ScreenLoading";

import { LocaleProps } from "../../../lib/index";

export const metadata: Metadata = {
	title: "Cart",
};

function Home({ params: { locale } }: LocaleProps) {
	return (
		<main>
			<Header locale={locale} />
			<CartProducts locale={locale} />
			<PriceDetails locale={locale} />
			<Newsletter />
			<Footer locale={locale} />
			<CreatedBy />
			<ScreenLoading />
		</main>
	);
}

export default Home;
