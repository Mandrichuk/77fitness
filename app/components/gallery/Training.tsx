import React from "react";
import { useTranslations } from "next-intl";

import TextLayers from "../../components/TextLayers";

import ImagesTraining from "./ImagesTraining";

function Training() {
  const t = useTranslations("GalleryPage.Training");
 
  const images = [
    { image: t("images.image1.src"), alt: t("images.image1.alt") },
    { image: t("images.image2.src"), alt: t("images.image2.alt") },
    { image: t("images.image3.src"), alt: t("images.image3.alt") },
    { image: t("images.image4.src"), alt: t("images.image4.alt") },
    { image: t("images.image5.src"), alt: t("images.image5.alt") },
    { image: t("images.image6.src"), alt: t("images.image6.alt") },
  ];

  return (
    <section className="Gallery_Training" id="training">
      <TextLayers bgText={t("bgText")} title={t("title")} />

      <div className="wrapper">
        <ImagesTraining images={images} buttonText={t("button.text")} />
      </div>
    </section>
  );
}

export default Training;
