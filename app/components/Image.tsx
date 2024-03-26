"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

import { CLOUDINARY_FOLDER } from "../constants";
import { type ImageProps } from "../lib/index";

function Image({ image, alt, imgQuality, imgPriority }: ImageProps) {
  const checkedImgQuality = imgQuality || 75;
  const checkedImgPriority = imgPriority || false;
  const imageConverted = `${CLOUDINARY_FOLDER}${image}`;

  return (
    <CldImage
      src={imageConverted}
      alt={alt}
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
      width={500}
      height={500}
      quality={checkedImgQuality}
      priority={checkedImgPriority}
    />
  );
}

export default Image;
