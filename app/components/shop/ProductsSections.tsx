"use client";
import React, { useState, useEffect } from "react";
import Image from "../common/Image";
import TextLayers from "../common/TextLayers";
import { ProductsSectionsProps } from "../../lib";

function ProductsSections({ locale }: ProductsSectionsProps) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/section");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  if (!data) {
    return (
      <div className="flex flex-row items-center justify-center">
        <div className="loading" />
      </div>
    );
  }

  return (
    <section className="ProductsSectionsSection">
      <div className="wrapper">
        <div className="content">
          {data.map((item: any, index: number) => (
            <div className="section">
              <TextLayers
                bgText={
                  item.description ? item.description[locale] : "Not Found"
                }
                title={"product"}
              />
              {/* <h3 className="title">{item.title}</h3>
              <p className="description">{item.description}</p>
              <div className="imageContainer">
                <Image
                  image={item.image.image}
                  alt={item.image.alt}
                  imgQuality={100}
                  imgPriority={false}
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSections;
