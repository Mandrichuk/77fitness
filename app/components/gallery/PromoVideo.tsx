import React from "react";
import { useTranslations } from "next-intl";

import TextLayers from "../common/TextLayers";

import VideoPlayer from "../common/VideoPlayer";
import { BluredCircleColors } from "../../constants/index";
import BluredCirlce from "../common/BluredCirlce";

function PromoVideo() {
  const t = useTranslations("GalleryPage.Promo");

  return (
    <section className="Gallery_PromoVideo" id="promoVideo">
      <TextLayers bgText={t("bgText")} title={t("title")} />
      <div className="wrapper">
        <div id="promoVideo" className="videoContainer">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/zQ9sLRUoQ7M?si=F5AjJYd7FlHAHyCL"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div data-anchor="promoVideo" className="pinkCircle">
        <BluredCirlce color={BluredCircleColors.pink} blurRange={"85"} />
      </div>
      <div data-anchor="promoVideo" className="blueCircle">
        <BluredCirlce color={BluredCircleColors.blue} blurRange={"85"} />
      </div>
    </section>
  );
}

export default PromoVideo;
