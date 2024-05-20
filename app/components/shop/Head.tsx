"use client";
import React from "react";
import Image from "../common/Image";
import { SVGs } from "../../constants";
import { ShopHeadText } from "../../constants";
import { HeadProps } from "@/app/lib";
import { useWindowWidth } from "@/app/utils/useWindowWidth";

function Head({ locale }: HeadProps) {
  const windowWidth = useWindowWidth();
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
          {windowWidth < 768 ? (
            <Image
              image={t.bannerImageMobile.image}
              alt={t.bannerImageMobile.alt}
              imgQuality={100}
            />
          ) : (
            <Image
              image={t.bannerImageFullScreen.image}
              alt={t.bannerImageFullScreen.alt}
              imgQuality={100}
            />
          )}
          <div className="arrowLeft">{SVGs.blueRotatedArrow}</div>
          <div className="arrowRight">{SVGs.blueArrow}</div>
        </div>
      </div>
    </section>
  );
}

export default Head;
