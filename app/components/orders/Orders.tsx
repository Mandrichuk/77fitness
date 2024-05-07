"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

import { OrdersText } from "@/app/constants";
import Image from "../common/Image";
import { OrderShopText } from "@/app/constants";
import { OrderProps, OrderProductsProps } from "@/app/lib";
import { SVGs } from "@/app/constants";
import formatDate from "@/app/utils/formatDate";

import TextLayers from "../common/TextLayers";

function Orders({ locale }: OrderProps) {
  const t = OrdersText[locale] || OrdersText["en"];
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

        <div className="flex flex-row items-center justify-center">
          <div className="loading" />
        </div>
      </div>
    );
  }
  return (
    <section className="OrdersShop">
      <TextLayers bgText={t.bgText} title={t.title} />
      <div className="wrapper">
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
    setTotalPrice(total);
  }
  console.log(totalPrice);

  useEffect(() => {
    calculateTotalPrice();
  }, []);

  console.log(orderData);

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
              <p className="price">€{totalPrice}</p>
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
          <p className="newPrice">€{product.newPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default Orders;
