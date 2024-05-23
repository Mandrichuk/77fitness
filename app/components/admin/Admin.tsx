"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

import { AdminText } from "@/app/constants";
import Image from "../common/Image";
import { OrderShopText } from "@/app/constants";
import { OrderAdminProps, AdminProps, AdminProductsProps } from "@/app/lib";
import { SVGs } from "@/app/constants";
import formatDate from "@/app/utils/formatDate";
import TextLayers from "../common/TextLayers";
import toFixedNumber from "@/app/utils/toFixedNumber";

function Orders({ locale }: AdminProps) {
  const t = AdminText[locale] || AdminText["en"];
  const [data, setData] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const adminData = useSelector((state: RootState) => state.adminLogin.value);

  useEffect(() => {
    if (typeof window !== "undefined" && !adminData) {
      window.location.href = "/admin/login";
      return;
    }
  }, [adminData]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log("Fetch successful");
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

  const filteredData = data.filter(
    (order: any) =>
      order.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.clientSku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="AdminShop">
      <div className="wrapper">
        <div className="searchContainer">
          <label>{t.searchInput.label}</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchInput.placeholder}
          />
        </div>
        <div className="inProccessOrders">
          <TextLayers
            bgText={t.inProcessTextBg}
            title={t.inProcessTitleTextBg}
          />
          <div className="tableData">
            <div className="numberData">{t.tableData.numberText}</div>
            <div className="clientNumberData">
              {t.tableData.clientNumberText}
            </div>
            <div className="dateData">{t.tableData.dateText}</div>
            <div className="priceData">{t.tableData.priceText}</div>
            <div />
          </div>
          <div className="separator" />
          {filteredData.map((order: any) => (
            <InProccessOrder
              locale={locale}
              searchQuery={searchQuery}
              orderData={order}
              key={`order-${order.id}`}
            />
          ))}
        </div>

        <div className="doneOrders">
          <TextLayers bgText={t.doneTextBg} title={t.doneTitleTextBg} />
          <div className="tableData">
            <div className="numberData">{t.tableData.numberText}</div>
            <div className="clientNumberData">
              {t.tableData.clientNumberText}
            </div>
            <div className="dateData">{t.tableData.dateText}</div>
            <div className="priceData">{t.tableData.priceText}</div>
            <div />
          </div>
          <div className="separator" />
          {filteredData.map((order: any) => (
            <DoneOrder
              locale={locale}
              searchQuery={searchQuery}
              orderData={order}
              key={`order-${order.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
function InProccessOrder({
  locale,
  orderData,
  searchQuery,
}: OrderAdminProps & { searchQuery: string }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const t = OrderShopText[locale] || OrderShopText["en"];
  const [totalPrice, setTotalPrice] = useState(0);

  function changeStatus() {
    const updatedData = { isDone: !orderData.isDone };

    fetch(`/api/admin/order/${orderData.sku}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Status changed successfully");
          window.location.reload();
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function calculateTotalPrice() {
    let total = 0;
    orderData.products.forEach((product: any) => {
      total += product.newPrice * product.quantity;
    });
    setTotalPrice(total);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, []);

  function toggleProducts() {
    setProductsOpen(!productsOpen);
  }

  if (orderData.isDone) {
    return null;
  }

  const highlightSearchQuery = (sku: string, query: string) => {
    const parts = sku.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="highlight bg-[#D909C4]">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className={`OrderShop`}>
      <div onClick={toggleProducts} className="wrapper">
        <div className="sku">
          №&nbsp;
          {highlightSearchQuery(orderData.sku, searchQuery)}
        </div>

        <div className="sku">
          №&nbsp;
          {highlightSearchQuery(orderData.clientSku, searchQuery)}
        </div>

        <div className="date">{formatDate(orderData.orderedDate)}</div>

        <div className="price">€{toFixedNumber(totalPrice)}</div>

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
              <div className="statuses">
                <div
                  className={`status ${
                    !orderData.isDone ? "done" : "inProgress"
                  }`}
                >
                  {!orderData.isDone ? t.done : t.inProgress}
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button onClick={changeStatus}>
                {orderData.isDone
                  ? t.removeToUndoneButton.text
                  : t.moveToDoneButton.text}
              </button>
            </div>

            <div className="separator" />
          </div>
        </div>
      )}
    </div>
  );
}

function DoneOrder({
  locale,
  orderData,
  searchQuery,
}: OrderAdminProps & { searchQuery: string }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const t = OrderShopText[locale] || OrderShopText["en"];
  const [totalPrice, setTotalPrice] = useState(0);

  function changeStatus() {
    const updatedData = { isDone: !orderData.isDone };

    fetch(`/api/admin/order/${orderData.sku}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Status changed successfully");
          window.location.reload();
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function calculateTotalPrice() {
    let total = 0;
    orderData.products.forEach((product: any) => {
      total += product.newPrice * product.quantity;
    });
    setTotalPrice(total);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, []);

  function toggleProducts() {
    setProductsOpen(!productsOpen);
  }

  if (!orderData.isDone) {
    return null;
  }

  const highlightSearchQuery = (sku: string, query: string) => {
    const parts = sku.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="highlight bg-[#D909C4]">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className={`OrderShop`}>
      <div onClick={toggleProducts} className="wrapper">
        <div className="sku">
          №&nbsp;
          {highlightSearchQuery(orderData.sku, searchQuery)}
        </div>

        <div className="sku">
          №&nbsp;
          {highlightSearchQuery(orderData.clientSku, searchQuery)}
        </div>

        <div className="date">{formatDate(orderData.orderedDate)}</div>

        <div className="price">€{toFixedNumber(totalPrice)}</div>

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
              <div className="statuses">
                <div className="status done">
                  {orderData.isDone ? t.done : t.inProgress}
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button onClick={changeStatus}>
                {orderData.isDone
                  ? t.removeToUndoneButton.text
                  : t.moveToDoneButton.text}
              </button>
            </div>

            <div className="separator" />
          </div>
        </div>
      )}
    </div>
  );
}

function OrderProducts({ locale, product }: AdminProductsProps) {
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
