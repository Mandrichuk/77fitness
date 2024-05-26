"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

import getId from "@/app/utils/getId";
import Image from "../common/Image";
import TextLayers from "../common/TextLayers";
import { shopRedirectFromCart } from "../../constants";

import { SVGs } from "../../constants";

import { CartProductsProps } from "../../lib/index";
import { ProductCartText } from "../../constants";

import {
  addOneToCart,
  removeOneFromCart,
  removeProduct,
  emptyCart,
} from "@/app/features/clientCart";
import Link from "next/link";
import toFixedNumber from "@/app/utils/toFixedNumber";

function CartProducts({ locale }: CartProductsProps) {
  const t = ProductCartText[locale] || ProductCartText["en"];
  const redirectT = shopRedirectFromCart[locale] || shopRedirectFromCart["en"];
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
      <div className="shopRedirect">
        <div className="wrapper">
          <p className="title">{redirectT.title}</p>
          <p className="description">{redirectT.description}</p>
          <div className="buttonContainer">
            <Link className="button" href={"/shop"}>
              {redirectT.button.text}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <TextLayers bgText={t.bgText} title={t.title} />
        <div className="h-[250px] flex flex-row items-center justify-center">
          <div className="loading" />
        </div>
      </div>
    );
  }
  return (
    <section className="CartProductsCart">
      <TextLayers bgText={t.bgText} title={t.title} />

      <div className="cartProductsShop">
        {data.cartProducts.map((product: any) => (
          <CartProduct
            locale={locale}
            product={product}
            quantity={product.quantity}
            key={`product-${product.sku}`}
          />
        ))}
      </div>
    </section>
  );
}

interface ProductImage {
  id: number;
  url: string;
  productId: number;
}

interface Product {
  categoryId: number;
  createdAt: string;
  descriptionId: number;
  id: number;
  leftInStock: number;
  name: string;
  newPrice: number;
  oldPrice: number;
  sku: string;
  toDisplay: boolean;
  images: ProductImage[];
  title: {
    en: string;
    ru: string;
    sk: string;
  };
  description: {
    en: string;
    ru: string;
    sk: string;
  };
}

interface ProductProps {
  product: Product;
}

interface CartProduct {
  product: ProductProps;
  quantity: number;
  locale: "en" | "ru" | "sk";
}

function CartProduct({ locale, product, quantity }: CartProduct) {
  const dispatch = useDispatch();

  function addOneProduct(sku: string) {
    dispatch(addOneToCart(sku));
  }

  function removeOneProduct(sku: string) {
    dispatch(removeOneFromCart(sku));
  }

  function deleteProduct(sku: string) {
    dispatch(removeProduct(sku));
  }

  function makeEmptyCart() {
    dispatch(emptyCart());
  }

  console.log(product);

  return (
    <div className="cartProduct">
      <div className="productDescription">
        <div className="imageContainer">
          <Image
            image={`shop/${product.product.images[0].url}`}
            alt={"cartProduct"}
            isShopProduct={true}
          />
        </div>
        <div className="details">
          <p className="title">{product.product.name}</p>
          <p className="name">{product.product.title[locale]}</p>
          <p className="description">{product.product.description[locale]}</p>
        </div>
      </div>
      <div className="productDetails">
        <div className="quntityAndPrices">
          <div className="quantity">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => addOneProduct(product.product.sku)}
              className="text"
            >
              +
            </div>
            <div className="separator" />
            <div className="text">{quantity}</div>
            <div className="separator" />
            <div
              style={{ cursor: "pointer" }}
              onClick={() => removeOneProduct(product.product.sku)}
              className="text"
            >
              -
            </div>
          </div>
          <div className="cartPrices">
            <p className="newPrice">
              €{toFixedNumber(product.product.newPrice)}
            </p>
            {product.product.oldPrice &&
              product.product.oldPrice > product.product.newPrice && (
                <p className="oldPrice">
                  €{toFixedNumber(product.product.oldPrice)}
                </p>
              )}
          </div>
        </div>
        <div
          onClick={() => deleteProduct(product.product.sku)}
          className="removeItem"
        >
          {SVGs.trash}
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
