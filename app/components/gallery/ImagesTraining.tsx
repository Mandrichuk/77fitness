"use client";
import React, { useEffect, useState } from "react";

import Image from "../../components/Image";

import { useWindowWidth } from "../../utils/useWindowWidth";
import { ImagesTrainingProps } from "../../lib";

function ImagesTraining({ images, buttonText }: ImagesTrainingProps) {
  const windowWidth = useWindowWidth();
  const [imageToReveal, setImageToReveal] = useState<number>(2);
  const revealedImages = images.slice(0, imageToReveal);
  const otherImages = images.slice(imageToReveal);
  const [revealAll, setRevealAll] = useState<boolean>(false);

  function revealeAll() {
    setRevealAll(true);
  }

  useEffect(() => {
    if (windowWidth < 1000) {
      setImageToReveal(2);
    } else {
      setImageToReveal(3);
    }
  }, [windowWidth]);

  return (
    <div className="Gallery_ImagesTraining">
      <div className="allImages">
        {revealedImages.map((image, index) => (
          <div key={index} className="imageContainer">
            <Image image={image.image} alt={image.alt} imgPriority={false} />
          </div>
        ))}

        {revealAll && (
          <>
            {otherImages.map((image, index) => (
              <div key={index} className="imageContainer">
                <Image
                  image={image.image}
                  alt={image.alt}
                  imgPriority={false}
                />
              </div>
            ))}
          </>
        )}
      </div>

      {!revealAll && (
        <div className="buttonContainer">
          <button onClick={revealeAll}>{buttonText}</button>
        </div>
      )}
    </div>
  );
}

export default ImagesTraining;
