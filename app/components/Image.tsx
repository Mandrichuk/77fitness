"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

import { ImageProps } from "../lib/index";

function Image({ image, alt }: ImageProps) {
  return (
    <div>
      <CldImage
        src={image}
        alt={alt}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        width={1000}
        height={1000}
      />
    </div>
  );
}

export default Image;
