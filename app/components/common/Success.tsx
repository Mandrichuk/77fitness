"use client";

import React from "react";
import { SuccessProps } from "@/app/lib";
import { successPageText } from "@/app/constants";
import Image from "./Image";
import CreateOrder from "./CreateOrder";

function Success({ locale }: SuccessProps) {
  const t = successPageText[locale || "en"];

  return (
    <section id="success" className="ShopSuccess">
      <div className="wrapper">
        <div className="imageContainer">
          <Image image={t.image.src} alt={t.image.alt} imgQuality={100} />
        </div>
        <div className="textContainer">
          <h3 className="title">{t.title}</h3>
          <p className="text">{t.text}</p>
          <div className="buttonContainer">
            {/* Here you call CreateOrder to trigger order creation */}
            <CreateOrder text={t.button.text} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
