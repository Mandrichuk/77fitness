"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";

import { SVGs } from "@/app/constants";

function CartButton() {
  const cart = useSelector((state: RootState) => state.cart.value);
  const [quantityChanged, setQuantityChanged] = useState(false);

  const allProductsQuantity = cart.reduce(
    (acc: any, item: any) => {
      return { quantity: acc.quantity + item.quantity };
    },
    { quantity: 0 }
  );

  useEffect(() => {
    if (allProductsQuantity.quantity !== 0) {
      setQuantityChanged(true);

      const timer = setTimeout(() => {
        setQuantityChanged(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [allProductsQuantity.quantity]);

  if (allProductsQuantity.quantity !== 0) {
    return (
      <Link href="/shop/cart" className="CartButtonShop">
        <div className={`wrapper ${quantityChanged ? "scaling" : ""}`}>
          <div className="icon">{SVGs.shoppingBag}</div>
          <div className="count">{allProductsQuantity.quantity}</div>
        </div>
      </Link>
    );
  }

  return null;
}

export default CartButton;
