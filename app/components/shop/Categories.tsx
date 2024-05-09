"use client";
import React, { useEffect, useState } from "react";
import { toUpperCase } from "@/app/utils/toUpperCase";
import Link from "next/link";
import { CategoriesText } from "../../constants/index";
import { CategoriesProps } from "../../lib/index";

function Categories({ locale, sku }: CategoriesProps) {
  const [data, setData] = useState<any>(null);
  const t = CategoriesText[locale] || CategoriesText["en"];

  console.log(locale, data);

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

  if (!data) {
    return (
      <div className="flex flex-row items-center justify-center  ">
        <div className="loading" />
      </div>
    );
  }

  return (
    <section className="ShopCategories">
      <div className="wrapper">
        <div className="categoriesContainer">
          <Link href={"/shop"} className="categoryContainer">
            <p className="text">{toUpperCase(t.mainSection.text)}</p>
            {!sku && <div className="underline" />}
          </Link>
          {data.map(
            (item: any, index: number) =>
              item.toDisplay && (
                <Link
                  href={`/shop/category/${item.sku}`}
                  className="categoryContainer"
                  key={index}
                >
                  <p className="text">{toUpperCase(item.title[locale])}</p>
                  {sku === item.sku && <div className="underline" />}
                </Link>
              )
          )}
        </div>
        <div className="underline" />
      </div>
    </section>
  );
}

export default Categories;
