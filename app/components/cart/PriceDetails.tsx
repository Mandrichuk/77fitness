"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { emptyCart } from "@/app/features/clientCart";

import getHash from "@/app/utils/getHash";

import { PriceDetailsProps } from "../../lib/index";
import { ProductCartText } from "../../constants";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function PriceDetails({ locale }: PriceDetailsProps) {
  const dispatch = useDispatch();

  const t = ProductCartText[locale] || ProductCartText["en"];
  const cart = useSelector((state: RootState) => state.cart.value);
  const [data, setData] = useState<any>(null);
  const [productsData, setProductsData] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const clientData = useSelector((state: RootState) => state.clientLogin.value);

  const handleCheckout = async () => {
    if (typeof window !== "undefined" && !clientData) {
      window.location.href = "/login";
      return;
    }
    setLoading(true);
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      next: { revalidate: 10 },
      body: JSON.stringify(productsData),
    });
    const session = await response.json();
    const result = await stripe?.redirectToCheckout({ sessionId: session.id });
    if (result?.error) {
      console.error(result.error.message);
    }
    setLoading(false);
  };

  const notifyClientRegistered = () => {
    toast.success(t.notify, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        });
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    if (cart.length !== 0) {
      fetchData();
    }
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        });
        const data = await response.json();
        setData(data);
        setTotalPrice(data.totalPrice);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    if (cart.length !== 0) {
      fetchData();
    }
  }, [cart]);

  if (cart.length === 0) {
    return <div></div>;
  }

  if (!data) {
    return null;
  }

  return (
    <section className="PriceDetailsShop">
      <div className="wrapper">
        <div className="priceContainer">
          <div className="text">{t.totalPriceText}:</div>
          <div className="value">€{totalPrice}</div>
        </div>
        <div className="buttonContainer">
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="button"
          >
            {t.buttonCheckout.text}
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default PriceDetails;
