"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

import Link from "next/link";
import Image from "./Image";
import { SuccessProps } from "@/app/lib";
import { BluredCircleColors, successPageText } from "@/app/constants";
import BluredCirlce from "./BluredCirlce";
import getHash from "@/app/utils/getHash";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { emptyCart } from "@/app/features/clientCart";

function Success({ locale }: SuccessProps) {
  const dispatch = useDispatch();
  const t = successPageText[locale || "en"];
  const cart = useSelector((state: RootState) => state.cart.value);
  const userData = useSelector((state: RootState) => state.clientLogin.value);
  const [processing, setProcessing] = useState(false);

  const referrer = typeof window !== "undefined" ? document.referrer : "";

  const notifyClientRegistered = () => {
    toast.success("t.notify", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  };
  console.log(referrer);

  useEffect(() => {
    async function getToCheckout() {
      setProcessing(true);
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

          notifyClientRegistered();
          dispatch(emptyCart());
        } else {
          const text = await response.text();
          console.error("Error:", text);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
    if (cart.length > 0) {
      getToCheckout();
    }
  }, [1]);

  console.log(cart);

  return (
    <section id="success" className="ShopSuccess">
      <div className="wrapper">
        <div className="imageContainer">
          <Image image={t.image.src} alt={t.image.alt} imgQuality={100} />
        </div>
        <div className="textContainer">
          <h3 className="title">{t.title}</h3>
          <p className="text">{t.text}</p>
          <div className="buttonContainer">
            <Link href="/shop/orders" className="button">
              {t.button.text}
            </Link>
          </div>
        </div>
      </div>
      <div data-anchor="success" className="pinkCircle">
        <BluredCirlce color={BluredCircleColors.pink} blurRange={"70"} />
      </div>
      <div data-anchor="success" className="blueCircle">
        <BluredCirlce color={BluredCircleColors.blue} blurRange={"70"} />
      </div>
    </section>
  );
}

export default Success;
