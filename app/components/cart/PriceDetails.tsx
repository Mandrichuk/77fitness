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

function PriceDetails({ locale }: PriceDetailsProps) {
  const dispatch = useDispatch();
  const t = ProductCartText[locale] || ProductCartText["en"];
  const cart = useSelector((state: RootState) => state.cart.value);
  const [data, setData] = useState<any>(null);
  const userData = useSelector((state: RootState) => state.clientLogin.value);

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

  async function getToCheckout() {
    if (userData === null && typeof window !== "undefined") {
      window.location.href = "/login";
      return;
    }
    const orderHash = getHash();
    const clientSku = userData?.sku;
    const products = cart.map((product: any) => {
      return {
        orderId: 1,
        productSku: product.sku,
        quantity: product.quantity,
      };
    });
    const isDone = false;

    const newOrder = {
      sku: orderHash,
      clientSku: clientSku,
      products: products,
      isDone: isDone,
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        console.log("order added successfuly");

        const responseData = await response.json();
        console.log(responseData);

        notifyClientRegistered();
        dispatch(emptyCart());
        if (typeof window !== "undefined") {
          window.location.href = "/shop/orders";
        }
      } else {
        const text = await response.text();
        console.error("Error:", text);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

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
          <div className="value">€{data.totalPrice}</div>
        </div>
        <div className="buttonContainer">
          <button onClick={getToCheckout} className="button">
            {t.buttonCheckout.text}
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default PriceDetails;
