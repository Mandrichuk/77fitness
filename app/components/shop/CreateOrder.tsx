"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { emptyCart } from "@/app/features/clientCart";
import getHash from "@/app/utils/getHash";
import { RootState } from "@/app/store/store";

function CreateOrder({ text }: { text: string }) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);
  const userData = useSelector((state: RootState) => state.clientLogin.value);
  const [processing, setProcessing] = useState(false);

  const createOrder = async () => {
    if (userData === null && typeof window !== "undefined") {
      window.location.href = "/login";
      return;
    }

    const orderHash = getHash();
    const clientSku = userData?.sku;
    const products = cart.map((product: any) => ({
      orderId: 1,
      productSku: product.sku,
      quantity: product.quantity,
    }));
    const isDone = false;

    const newOrder = {
      sku: orderHash,
      clientSku: clientSku,
      products: products,
      isDone: isDone,
    };

    setProcessing(true);
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        toast.success("Order created successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
        });
        dispatch(emptyCart());

        window.location.href = "/success";
      } else {
        const text = await response.text();
        console.error("Error:", text);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <button className="button" onClick={createOrder} disabled={processing}>
      {processing ? "Processing..." : text}
    </button>
  );
}

export default CreateOrder;
