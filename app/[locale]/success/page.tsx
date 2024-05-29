import React from "react";
import { Metadata } from "next";

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CreatedBy from "@/app/components/common/CreatedBy";
import Success from "@/app/components/common/Success";

import { LocaleProps } from "../../lib/index";
import Stripe from "stripe";

export const metadata: Metadata = {
	title: "Success",
};

async function getSession(session_id: string) {
	const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
	if (!stripeSecretKey) {
		throw new Error("Stripe secret key is not defined in environment variables.");
	}
	const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-04-10" });
	if (!session_id || !session_id.startsWith("cs_")) {
		return { error: "Invalid Checkout Session ID" };
	}
	try {
		const session = await stripe.checkout.sessions.retrieve(session_id); // можешь продебажить эту строку чтобы узнать что возвращает stripe
		return session;
	} catch (err: unknown) {
		const error = err as Error;
		return { statusCode: 500, message: error.message };
	}
}

export default async function Page({ params: { locale }, searchParams }: LocaleProps) {
	const session_id = new URLSearchParams(searchParams).get("session_id");
	if (session_id) {
		getSession(session_id).then((data) => {
			if ("payment_status" in data && data.payment_status !== "paid") {
				// тут ты можешь проверить статус платежа и если он не оплачен то перенаправить на страницу отмены
				window.location.href = "/[locale]/cancel";
			}
		});
	}
	return (
		<main>
			<Header locale={locale} />
			<Success locale={locale} />
			<Footer locale={locale} />
			<CreatedBy />
		</main>
	);
}
