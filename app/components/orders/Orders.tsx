"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

import { OrdersText } from "@/app/constants";
import { shopRedirectFromOrders } from "@/app/constants";
import Image from "../common/Image";
import { OrderShopText } from "@/app/constants";
import { OrderProps, OrdersProps, OrderProductsProps } from "@/app/lib";
import { SVGs } from "@/app/constants";
import formatDate from "@/app/utils/formatDate";
import toFixedNumber from "@/app/utils/toFixedNumber";

import TextLayers from "../common/TextLayers";
import Link from "next/link";

function Orders({ locale }: OrdersProps) {
  const t = OrdersText[locale] || OrdersText["en"];
  const redirectT =
    shopRedirectFromOrders[locale] || shopRedirectFromOrders["en"];
  const clientData = useSelector((state: RootState) => state.clientLogin.value);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clientData),
        });

        if (response.ok) {
          console.log("Registration successful");

          const responseData = await response.json();
          setData(responseData);
        } else {
          const text = await response.text();
          console.error("Error:", text);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }

    fetchData();
  }, []);

  if (!data) {
    return (
      <div>
        <TextLayers bgText={t.bgText} title={t.title} />

        <div className=" h-[260px] flex flex-row items-center justify-center">
          <div className="loading" />
        </div>
      </div>
    );
  }

  if (!clientData) {
    return (
      <div className="shopRedirect">
        <div className="wrapper">
          <p className="title">{redirectT.isNotLoggined.title}</p>
          <p className="description">{redirectT.isNotLoggined.description}</p>
          <div className="buttonContainer">
            <Link className="button" href={redirectT.isNotLoggined.button.link}>
              {redirectT.isNotLoggined.button.text}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (data && data.length === 0 && clientData) {
    console.log("hello");
    return (
      <div className="shopRedirect">
        <div className="wrapper">
          <p className="title">{redirectT.noOrders.title}</p>
          <p className="description">{redirectT.noOrders.description}</p>
          <div className="buttonContainer">
            <Link className="button" href={redirectT.noOrders.button.link}>
              {redirectT.noOrders.button.text}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="OrdersShop">
      <TextLayers bgText={t.bgText} title={t.title} />
      <div className="wrapper">
        <div className="tableData">
          <div className="numberData">{t.tableData.numberText}</div>
          <div className="dateData">{t.tableData.dateText}</div>
          <div className="priceData">{t.tableData.priceText}</div>
          <div />
        </div>
        <div className="separator" />
        {data.map((order: any) => (
          <Order locale={locale} orderData={order} key={`order-${order.id}`} />
        ))}
      </div>
    </section>
  );
}

function Order({ locale, orderData }: OrderProps) {
  const [productsOpen, setProductsOpen] = useState(false);
  const t = OrderShopText[locale] || OrderShopText["en"];
  const [totalPrice, setTotalPrice] = useState(0);

  function calculateTotalPrice() {
    let total = 0;
    orderData.products.forEach((product: any) => {
      total += product.newPrice * product.quantity;
    });
    setTotalPrice(Number(toFixedNumber(total)));
  }

  useEffect(() => {
    calculateTotalPrice();
  }, []);

  function toggleProducts() {
    setProductsOpen(!productsOpen);
  }

  return (
    <div className={`OrderShop`}>
      <div onClick={toggleProducts} className="wrapper">
        <div className="sku">№&nbsp;{orderData.sku}</div>

        <div className="date">{formatDate(orderData.orderedDate)}</div>

        <div className="price">€{totalPrice}</div>

        <div className={`arrowDown ${productsOpen && "rotate-180"}`}>
          {SVGs.arrowDown}
        </div>
      </div>
      {productsOpen && (
        <div className={`orderDetails`}>
          <div className="orderProducts">
            {orderData.products.map((product: any) => (
              <OrderProducts
                locale={locale}
                product={product}
                key={`product-${product.id}`}
              />
            ))}
          </div>
          <div className="total">
            <div className="priceContainer">
              <p className="text">{t.totalText}</p>
              <p className="price">€{toFixedNumber(totalPrice)}</p>
            </div>
            <div className="statusContainer">
              <p className="text">{t.statusText}</p>
              <div
                className={`status ${orderData.isDone ? "done" : "inProgress"}`}
              >
                {orderData.isDone ? t.done : t.inProgress}
              </div>
            </div>

            <div className="separator" />
          </div>
        </div>
      )}
    </div>
  );
}

function OrderProducts({ locale, product }: OrderProductsProps) {
  return (
    <div className="orderProduct">
      <div className="productDescription">
        <div className="imageContainer">
          <Image
            image={`/shop/${product.images[0].url}`}
            alt={"cartProduct"}
            isShopProduct={true}
          />
        </div>
        <div className="details">
          {/* <p className="title">{"titlesdfs234243dfsdf"}</p> */}
          <p className="name">{product.name}</p>
          <p className="description">{product.description[locale]}</p>
        </div>
      </div>
      <div className="productDetails">
        <div className="quantity">
          <div className="text">{product.quantity}</div>
        </div>
        <div className="cartPrices">
          <p className="newPrice">€{toFixedNumber(product.newPrice)}</p>
        </div>
      </div>
    </div>
  );
}

export default Orders;
