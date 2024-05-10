"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

import TextLayers from "../common/TextLayers";
import { CategoriesEditProps } from "../../lib";
import { toUpperCase } from "@/app/utils/toUpperCase";
import { ProductsEditAdminText } from "@/app/constants";

import Image from "../common/Image";
import { SVGs } from "@/app/constants";

function ProductsEdit({ locale }: CategoriesEditProps) {
  const [data, setData] = useState<any>(null);
  const t = ProductsEditAdminText[locale] || ProductsEditAdminText["en"];

  const notifyAddedToCart = () => {
    toast.success("t.notify", {
      position: "top-right",
      autoClose: 1300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/admin/product");
        const jsonData = await response.json();
        console.log("helo");
        setData(jsonData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function toggleVisibility(sku: number, updatedToDisplay: boolean) {
    const productData = { sku: sku, updatedToDisplay: updatedToDisplay };
    console.log(productData);
    try {
      const response = await fetch("/api/admin/product/visibility", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const responseData = await response.json();
      console.log("Response data:", responseData);
      if (response.ok) {
        console.log("Status changed successfully");
        notifyAddedToCart();
        window.location.reload();
      } else {
        const data = await response.json();
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Error toggling visibility:", error);
    }
  }

  if (!data) {
    return (
      <div className="flex flex-row items-center justify-center h-[400px]">
        <div className="loading" />
      </div>
    );
  }

  if (data) {
    console.log(data[0]);
  }

  return (
    <section className="ProductsEditAdminSection">
      <div className="wrapper">
        <h3 className="title">{t.title}</h3>

        <div className="subtitle">{t.visible}</div>
        <div className="productsGrid">
          {data.map(
            (product: any, index: number) =>
              product.toDisplay && (
                <div className="categoryContainer" key={index}>
                  <div className={`product`} key={`product-${index}`}>
                    <div className="imageBox" key={`image-${index}`}>
                      <div className="imageContainer">
                        <Image
                          image={`/shop/${product.images[0].url}`}
                          alt={"image"}
                          imgQuality={100}
                          isShopProduct={true}
                        />
                      </div>
                    </div>
                    <div className="details">
                      <p className="name">{product.name}</p>
                      <p className="description">
                        {product.description
                          ? product.description[locale]
                          : "Not Found"}
                      </p>
                      <div className="cart">
                        <div className="prices">
                          <p className="newPrice">{product.newPrice}€</p>
                          {product.oldPrice && product.oldPrice > 0.01 && (
                            <p className="oldPrice">{product.oldPrice}€</p>
                          )}
                        </div>
                        <div className="buttonsContainer">
                          <div className="edit">{SVGs.edit}</div>
                          <div
                            onClick={() =>
                              toggleVisibility(product.sku, !product.toDisplay)
                            }
                            className="notVisible"
                          >
                            {SVGs.invisible}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="underline" />
        <div className="subtitle">{t.invisible}</div>
        <div className="productsGrid">
          {data.map(
            (product: any, index: number) =>
              !product.toDisplay && (
                <div className="categoryContainer" key={index}>
                  <div className={`product`} key={`product-${index}`}>
                    <div className="imageBox" key={`image-${index}`}>
                      <div className="imageContainer">
                        <Image
                          image={`/shop/${product.images[0].url}`}
                          alt={"image"}
                          imgQuality={100}
                          isShopProduct={true}
                        />
                      </div>
                    </div>
                    <div className="details">
                      <p className="name">{product.name}</p>
                      <p className="description">
                        {product.description
                          ? product.description[locale]
                          : "Not Found"}
                      </p>
                      <div className="cart">
                        <div className="prices">
                          <p className="newPrice">{product.newPrice}€</p>
                          {product.oldPrice && product.oldPrice > 0.01 && (
                            <p className="oldPrice">{product.oldPrice}€</p>
                          )}
                        </div>
                        <div className="buttonsContainer">
                          <div className="edit">{SVGs.edit}</div>
                          <div
                            onClick={() =>
                              toggleVisibility(product.sku, !product.toDisplay)
                            }
                            className="notVisible"
                          >
                            {SVGs.visible}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="underline" />
      </div>
      <ToastContainer />
    </section>
  );
}

export default ProductsEdit;
