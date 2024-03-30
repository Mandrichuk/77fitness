import React from "react";
import { useTranslations } from "next-intl";

import TextLayers from "../components/TextLayers";

function PromoVideo() {
  const t = useTranslations("GalleryPage.Promo");

  return (
    <section className="Gallery_PromoVideo">
      <TextLayers bgText={t("bgText")} title={t("title")} />

      <div className="wrapper">
        <div className="video">Video Here!</div>
      </div>
    </section>
  );
}

export default PromoVideo;
