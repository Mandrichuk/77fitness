"use client";
import React, { useState, useEffect } from "react";

import Image from "../components/Image";

import { ImageProps } from "../lib";

function ImagesEquipment({
  additionalImages,
  buttonText,
}: {
  additionalImages: ImageProps[];
  buttonText: string;
}) {
  const [revealImages, setRevealImages] = useState<boolean>(false);

  function revealeAll() {
    setRevealImages(true);
  }

  return (
    <div className="ImagesEquipment">
      {!revealImages && (
        <div className="buttonMore">
          <button className="button" onClick={revealeAll}>
            {buttonText}
          </button>
        </div>
      )}

      {revealImages && (
        <div className="imagesContainer">
          {additionalImages.map((image, index) => (
            <div key={index} className="imageContainer">
              <Image image={image.image} alt={image.alt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImagesEquipment;
