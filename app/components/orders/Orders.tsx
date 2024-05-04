"use client";
import React, { useState } from "react";

import { OrderProps } from "@/app/lib";
import { SVGs } from "@/app/constants";

import TextLayers from "../common/TextLayers";

function Orders({ locale }: OrderProps) {
  const [data, setData] = useState<any>(null);

  // if (!data) {
  //   return (
  //     <div>
  //       <TextLayers bgText={"Orders"} title={"Orders"} />

  //       <div className="flex flex-row items-center justify-center">
  //         <div className="loading" />
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <section className="OrdersShop">
      <TextLayers bgText={"Orders"} title={"Orders"} />
      <div className="wrapper">
        <div className="separator" />
        <Order locale={locale} />
        <Order locale={locale} />
      </div>
    </section>
  );
}

function Order({ locale }: OrderProps) {
  const [productsOpen, setProductsOpen] = useState(false);

  function toggleProducts() {
    setProductsOpen(!productsOpen);
  }

  return (
    <div className="OrderShop">
      <div onClick={toggleProducts} className="wrapper">
        <div className="sku">ABC123123234234</div>

        <div className="date">13.02.2024</div>

        <div className="price">€150</div>

        <div className="arrowDown">{SVGs.arrowDown}</div>
      </div>
      {productsOpen && (
        <div className="orderDetails">
          <div className="orderProducts">
            <OrderProducts locale={locale} />
            <OrderProducts locale={locale} />
            <OrderProducts locale={locale} />
          </div>
          <div className="total">
            <div className="priceContainer">
              <p className="text">{"Total"}</p>
              <p className="price">{"€150.00"}</p>
            </div>
            <div className="statusContainer">
              <p className="text">{"Status"}</p>
              <div className="status inProgress">{"In progress"}</div>
            </div>

            <div className="separator" />
          </div>
        </div>
      )}
    </div>
  );
}

function OrderProducts({ locale }: OrderProps) {
  return (
    <div className="orderProduct">
      <div className="productDescription">
        <div className="imageContainer">
          {/* <Image
            image={`shop/${product.product.images[0].url}`}
            alt={"cartProduct"}
          /> */}
        </div>
        <div className="details">
          <p className="title">{"titlesdfs234243dfsdf"}</p>
          <p className="name">{"namesdfsdffsfsdc"}</p>
          <p className="description">{"description"}</p>
        </div>
      </div>
      <div className="productDetails">
        <div className="quantity">
          <div className="text">{"13"}</div>
        </div>
        <div className="cartPrices">
          <p className="newPrice">€{"11.00"}</p>
        </div>
      </div>
    </div>
  );
}

export default Orders;
