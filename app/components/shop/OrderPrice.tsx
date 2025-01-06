"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import toFixedNumber from "@/app/utils/toFixedNumber";

function OrderPrice() {
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
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

  // Проверка на null перед использованием toFixedNumber
  const formattedPrice =
    totalPrice !== null ? toFixedNumber(totalPrice) : "0.00";

  return <span className="price">{formattedPrice}</span>;
}

export default OrderPrice;
