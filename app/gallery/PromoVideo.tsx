import React from "react";
import { useTranslations } from "next-intl";

import TextLayers from "../components/TextLayers";

import VideoPlayer from "../components/VideoPlayer";

function PromoVideo() {
  const t = useTranslations("GalleryPage.Promo");

  return (
    <section className="Gallery_PromoVideo" id="promoVideo">
      <TextLayers bgText={t("bgText")} title={t("title")} />
      <div className="wrapper">
        <div className="videoContainer">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/KSodnbXJwXQ?si=MD8xFuz7warkLHYP"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default PromoVideo;
