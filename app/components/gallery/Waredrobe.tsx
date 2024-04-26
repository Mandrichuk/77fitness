import React from "react";
import { useTranslations } from "next-intl";

import Image from "../common/Image";
import TextLayers from "../common/TextLayers";

function Waredrobe() {
  const t = useTranslations("GalleryPage.Waredrobe");

  return (
    <section className="Gallery_Waredrobe">
      <TextLayers bgText={t("bgText")} title={t("title")} />
      <div className="wrapper">
        <div className="standoutImage">
          <Image
            image={t("images.image1.src")}
            alt={t("images.image1.alt")}
            imgQuality={100}
          />
        </div>
        <div className="imagesContainer">
          <div className="imageContainer imageContainerOne">
            <Image
              image={t("images.image2.src")}
              alt={t("images.image2.alt")}
              imgQuality={100}
            />
          </div>
          <div className="imageContainer">
            <Image
              image={t("images.image3.src")}
              alt={t("images.image3.alt")}
              imgQuality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Waredrobe;
