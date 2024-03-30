import React from "react";
import { useTranslations } from "next-intl";

import TextLayers from "../components/TextLayers";
import { splitArrayIntoTwo } from "../utils/splitArrayIntoTwo";
import Image from "../components/Image";

function Equipment() {
  const t = useTranslations("GalleryPage.Equipment");

  const images = [
    { src: t("images.image1.src"), alt: t("images.image1.alt") },
    { src: t("images.image2.src"), alt: t("images.image2.alt") },
    { src: t("images.image3.src"), alt: t("images.image3.alt") },
    { src: t("images.image4.src"), alt: t("images.image4.alt") },
  ];

  const [ImagesFirstHalf, ImagesSecondHalf] = splitArrayIntoTwo(images);

  return (
    <section className="Gallery_Equipment" id="equipment">
      <TextLayers bgText={t("bgText")} title={t("title")} />
      <div className="wrapper">
        <div className="imagesContainer">
          {ImagesFirstHalf.map((image) => (
            <div key={image.src} className="imageContainer">
              <Image
                image={image.src}
                alt={image.alt}
                imgQuality={100}
                imgPriority={false}
              />
            </div>
          ))}
        </div>
        <p className="description">
          {t("description")}
        </p>
        <div className="imagesContainer">
          {ImagesSecondHalf.map((image) => (
            <div key={image.src} className="imageContainer">
              <Image
                image={image.src}
                alt={image.alt}
                imgQuality={100}
                imgPriority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipment;
