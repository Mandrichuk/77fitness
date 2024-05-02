"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";

import TextLayers from "../common/TextLayers";

import { PriceDetailsProps } from "../../lib/index";
import { ProductCartText } from "../../constants";

function PriceDetails({ locale }: PriceDetailsProps) {
  const t = ProductCartText[locale] || ProductCartText["en"];
  const cart = useSelector((state: RootState) => state.cart.value);
  const [data, setData] = useState<any>(null);

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
    return (
      <div>
        
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <div className="flex flex-row items-center justify-center">
          <div className="loading" />
        </div>
      </div>
    );
  }

  return (
    <section className="PriceDetailsShop">
      <div className="wrapper">
        <div className="priceContainer">
          <div className="text">{t.totalPriceText}:</div>
          <div className="value">€{data.totalPrice}</div>
        </div>
        <div className="buttonContainer">
          <Link href="/checkout" className="button">
            {t.buttonCheckout.text}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PriceDetails;
