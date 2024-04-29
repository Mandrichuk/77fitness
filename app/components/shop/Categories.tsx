"use client";
import React, { useEffect, useState } from "react";
import { toUpperCase } from "@/app/utils/toUpperCase";
import Link from "next/link";

function Categories() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/category");
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
          {data.map((item: any, index: number) => (
            <Link
              href={`/shop/${item.sku}`}
              className="categoryContainer"
              key={index}
            >
              <p className="text">{toUpperCase(item.name)}</p>
              <div className="underline" />
            </Link>
          ))}
        </div>
        <div className="underline" />
      </div>
    </section>
  );
}

export default Categories;
