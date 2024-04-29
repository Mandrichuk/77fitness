"use client";
import React from "react";
import Image from "../common/Image";
import { SVGs } from "../../constants";
import { ShopHeadText } from "../../constants";
import { HeadProps } from "@/app/lib";

function Head({ locale }: HeadProps) {
  const t = ShopHeadText[locale] || ShopHeadText["en"];
  return (
    <section className="shopHead">
      <div className="wrapperTitle">
        <h4 className="title">{t.title}</h4>
      </div>

      <div className="announcementContainer">
        <p className="text">{t.announcement}</p>
      </div>

      <div className="wrapperImage">
        <div className="imageContainer">
          <Image
            image={t.bannerImage.image}
            alt={t.bannerImage.alt}
            imgQuality={100}
          />
          <div className="arrowLeft">{SVGs.blueRotatedArrow}</div>
          <div className="arrowRight">{SVGs.blueArrow}</div>
        </div>
      </div>
    </section>
  );
}

export default Head;
