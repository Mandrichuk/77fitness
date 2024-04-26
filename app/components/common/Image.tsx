"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

import { CLOUDINARY_FOLDER } from "../../constants";
import { type ImageProps } from "../../lib/index";

function Image({ image, alt, imgQuality, imgPriority }: ImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const checkedImgQuality = imgQuality || 90;
  const checkedImgPriority = imgPriority;
  const imageConverted = `${CLOUDINARY_FOLDER}${image}`;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    console.error("Error loading image");
    setIsLoading(false);
  };

  return (
    <div
      className="Image"
      style={{ position: "relative", width: "100%" }}
    >
      <CldImage
        src={imageConverted}
        alt={alt}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          opacity: isLoading && !checkedImgPriority ? 0.3 : 1,
        }}
        width={500}
        height={500}
        quality={checkedImgQuality}
        priority={checkedImgPriority}
        onLoad={handleLoad}
        onError={handleError}
      />
      {isLoading && !checkedImgPriority && (
        <span className="spinner loading loading-spinner loading-md" />
      )}
    </div>
  );
}

export default Image;
