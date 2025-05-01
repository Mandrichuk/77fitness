import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import TextLayers from "../common/TextLayers";
import BluredCirlce from "../common/BluredCirlce";
import Image from "../common/Image";
import { BluredCircleColors } from "../../constants";

function News() {
  const t = useTranslations("HomePage.News");

  return (
    <section className="News" id="team">
      <TextLayers title={t("title")} bgText={t("bgText")} />
      <div id="sliderSection" className="sliderSection">

      <div className="imagesNews">
        <div className="image">
            <Image image="IMG_2381_jsc66w" alt="image" imgQuality={100} />
        </div>
        <div className="image">
            <Image image="sdfsdfsdfsdf" alt="image" imgQuality={100} />
        </div>
      </div>
        {/* <div data-anchor="sliderSection" className="pinkCircle">
          <BluredCirlce color={BluredCircleColors.pink} blurRange={"85"} />
        </div>
        <div data-anchor="sliderSection" className="blueCircle">
          <BluredCirlce color={BluredCircleColors.blue} blurRange={"85"} />
        </div> */}
      </div>
    </section>
  );
}

export default News;
