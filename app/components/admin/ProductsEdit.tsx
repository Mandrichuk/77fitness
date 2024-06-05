"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

import TextLayers from "../common/TextLayers";
import { CategoriesEditProps } from "../../lib";
import { toUpperCase } from "@/app/utils/toUpperCase";
import { adminHash, ProductsEditAdminText } from "@/app/constants";

import Image from "../common/Image";
import { SVGs } from "@/app/constants";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface AdminData {
  username: string;
  sku: string;
}

function ProductsEdit({ locale }: CategoriesEditProps) {
  const [data, setData] = useState<any>(null);
  const t = ProductsEditAdminText[locale] || ProductsEditAdminText["en"];
  const adminData = useSelector((state: RootState) => state.adminLogin.value);

  useEffect(() => {
    if (typeof window !== "undefined" && !adminData) {
      window.location.href = `/${adminHash}/admin/admin/login`;
      return;
    }
  }, [adminData]);

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
        setData(jsonData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function toggleVisibility(sku: number, updatedToDisplay: boolean) {
    const productData = { sku: sku, updatedToDisplay: updatedToDisplay };
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

  return (
    <section className="ProductsEditAdminSection">
      <div className="wrapper">
        <h3 className="title">{t.title}</h3>

        <div className="buttonNewProductContainer">
          <Link href={`/${adminHash}/admin/product/new`} className="button">
            {t.newProductRedirect}
          </Link>
        </div>

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
                          image={`/shop/${product.images[product.images.length - 1].url}`}
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
                          <Link
                            href={`/${adminHash}/admin/product/edit/${product.sku}`}
                            className="edit"
                          >
                            {SVGs.edit}
                          </Link>
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
        <div className="subtitle">{t.invisible} sdfsdf</div>
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
                          <Link
                            href={`/${adminHash}/admin/product/edit/${product.sku}`}
                            className="edit"
                          >
                            {SVGs.edit}
                          </Link>
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
