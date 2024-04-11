"use client";
import React, { useState } from "react";

import { SVGs, overviewText } from "../constants";
import Image from "./Image";

function Overview({ locale }: { locale: "en" | "ru" | "sk" }) {
  const t = overviewText[locale] || overviewText["en"];
  const [currentImage, setCurrentImage] = useState<number>(0);

  function changeImage(isNext: boolean) {
    if (isNext) {
      if (currentImage === t.images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    } else {
      if (currentImage === 0) {
        setCurrentImage(t.images.length - 1);
      } else {
        setCurrentImage(currentImage - 1);
      }
    }
  }

  return (
    <section className="Overview">
      <div className="wrapper">
        <div className="TextContainer">
          <p className="text">{t.text}</p>
          <div className="icons">
            <div
              className="prevImageIcon icon"
              onClick={() => changeImage(false)}
            >
              {SVGs.tranparentArrow}
            </div>
            <div
              className="nextImageIcon icon"
              onClick={() => changeImage(true)}
            >
              {SVGs.blueArrow}
            </div>
          </div>
        </div>
        <div className="imagesContainer">
          {t.images.map((image, index) => {
            return (
              index === currentImage && (
                <div key={image.alt} className="imageContainer">
                  <Image
                    image={image.src}
                    alt={image.alt}
                    imgQuality={100}
                    imgPriority={false}
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Overview;
