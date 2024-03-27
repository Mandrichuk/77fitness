"use client";
import React, { useState } from "react";

import { ScrollImagesProps } from "../lib/index";
import Image from "../components/Image";
import { SVGs } from "../constants";

function ActivityImages({ images }: ScrollImagesProps) {
  const [imageToReveal, setImageToReveal] = useState(0);

  function handleClick() {
    if (imageToReveal === images.length - 1) {
      setImageToReveal(0);
    } else {
      setImageToReveal(imageToReveal + 1);
    }
  }
  return (
    <div id="ActivityImage" className="ActivityImages">
      {images.map((image, index) => (
        <div key={index} className="cover">
          {imageToReveal === index && (
            <div  className="imageContainer">
              <Image
                image={image.src}
                alt={image.alt}
                imgQuality={100}
                imgPriority={false}
              />
            </div>
          )}
        </div>
      ))}
      <div onClick={handleClick} data-anchor="ActivityImage" className="icon">
        {SVGs.rightScroll}
      </div>
    </div>
  );
}

export default ActivityImages;
