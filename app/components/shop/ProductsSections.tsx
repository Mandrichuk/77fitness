"use client";
import React, { useState, useEffect } from "react";
import Image from "../common/Image";
import TextLayers from "../common/TextLayers";
import { ProductsSectionsProps } from "../../lib";
import { ProductsSectionsText } from "../../constants";
import { ProductSectionProps } from "../../lib/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { toast, ToastContainer } from "react-toastify";

import {
  addOneToCart,
  removeOneFromCart,
  removeProduct,
  emptyCart,
} from "@/app/features/clientCart";

function ProductsSections({ locale, sku }: ProductSectionProps) {
  const t = ProductsSectionsText[locale] || ProductsSectionsText["en"];
  const [data, setData] = useState<any>(null);
  const cart = useSelector((state: RootState) => state.cart.value);
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

  const notifyAddedToCart = () => {
    toast.success(t.notify, {
      position: "top-right",
      autoClose: 1300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark"
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (sku) {
        try {
          const response = await fetch(`/api/section/${sku}`);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        try {
          const response = await fetch(`/api/section`);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.error) {
      if (typeof window !== "undefined") {
        window.location.href = "/shop";
      }
    }
  }, [data]);

  if (!data) {
    return (
      <div className="flex flex-row items-center justify-center">
        <div className="loading" />
      </div>
    );
  }

  return (
    <section className="ProductsSectionsSection">
      <div className="content">
        {data &&
          Array.isArray(data) &&
          data.map((item: any, index: number) => (
            <div className="section" key={`section-${index}`}>
              <div className="textLayer">
                <TextLayers
                  bgText={
                    item.category.bgText
                      ? item.category.bgText[locale]
                      : "Not Found"
                  }
                  title={
                    item.category.title
                      ? item.category.title[locale]
                      : "Not Found"
                  }
                />
              </div>
              <div className="wrapper">
                <div className="productsGrid">
                  {item.products.map((product: any, index: number) => (
                    <div className={`product`} key={`product-${index}`}>
                      {product.images.map((image: any, index: number) => (
                        <div className="imageBox" key={`image-${index}`}>
                          <div className="imageContainer">
                            <Image
                              image={`/shop/${image.url}`}
                              alt={"image"}
                              imgQuality={100}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="details">
                        <p className="title">
                          {item.category.title
                            ? item.category.title[locale]
                            : "Not Found"}
                        </p>
                        <p className="name">{product.name}</p>
                        <p className="description">
                          {product.description
                            ? product.description[locale]
                            : "Not Found"}
                        </p>
                        <div className="cart">
                          <div className="prices">
                            <p className="newPrice">{product.newPrice}€</p>
                            {product.oldPrice && (
                              <p className="oldPrice">{product.oldPrice}€</p>
                            )}
                          </div>
                          <div className="buttonContainer">
                            <button
                              onClick={() => {
                                addOneProduct(product.sku);
                                notifyAddedToCart();
                              }}
                              className="button"
                            >
                              {t.button.text}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      <ToastContainer />
    </section>
  );
}

export default ProductsSections;