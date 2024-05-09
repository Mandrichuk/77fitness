"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

import TextLayers from "../common/TextLayers";
import { CategoriesEditProps } from "../../lib";
import { toUpperCase } from "@/app/utils/toUpperCase";
import { CategoriesEditAdminText } from "@/app/constants";

import { SVGs } from "@/app/constants";

function CategoriesEdit({ locale }: CategoriesEditProps) {
  const [data, setData] = useState<any>(null);
  const t = CategoriesEditAdminText[locale] || CategoriesEditAdminText["en"];

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
        const response = await fetch("/api/admin/category");
        const jsonData = await response.json();
        setData(jsonData.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function toggleVisibility(sku: number, updatedToDisplay: boolean) {
    const categoryData = { sku: sku, updatedToDisplay: updatedToDisplay };

    try {
      const response = await fetch(`/api/admin/category/visibility`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
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

  // if (data) {
  //   console.log(data);
  // }

  return (
    <section className="CategoriesEditAdminSection">
      <div className="wrapper">
        <h3 className="title">{t.title}</h3>

        <div className="subtitle">{t.visible}</div>
        <div className="categoriesContainer">
          {data.map(
            (item: any, index: number) =>
              item.toDisplay && (
                <div className="categoryContainer" key={index}>
                  <TextLayers
                    bgText={item.bgText[locale]}
                    title={item.title[locale]}
                  />
                  <div className="functionalityContainer">
                    <div className="edit">{SVGs.edit}</div>
                    <div
                      onClick={() =>
                        toggleVisibility(item.sku, !item.toDisplay)
                      }
                      className="notVisible"
                    >
                      {SVGs.invisible}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="underline" />
        <div className="subtitle">{t.invisible}</div>
        <div className="categoriesContainer">
          {data.map(
            (item: any, index: number) =>
              !item.toDisplay && (
                <div className="categoryContainer" key={index}>
                  <TextLayers
                    bgText={item.bgText[locale]}
                    title={item.title[locale]}
                  />
                  <div className="functionalityContainer">
                    <div className="edit">{SVGs.edit}</div>
                    <div
                      onClick={() =>
                        toggleVisibility(item.sku, !item.toDisplay)
                      }
                      className="notVisible"
                    >
                      {SVGs.visible}
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

export default CategoriesEdit;
