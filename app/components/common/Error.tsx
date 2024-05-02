import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Image from "./Image";
import BluredCirlce from "./BluredCirlce";

import { BluredCircleColors } from "../../constants";

function Error() {
  const t = useTranslations("Shop.Error");

  return (
    <section id="error" className="ShopError">
      <div className="wrapper">
        <div className="imageContainer">
          <Image image={t("image.src")} alt={t("image.alt")} imgQuality={100} />
        </div>
        <div className="textContainer">
          <h3 className="title">{t("title")}</h3>
          <p className="text">{t("text")}</p>
          <div className="buttonContainer">
            <Link href={t("button.link")} className="button">
              {t("button.text")}
            </Link>
          </div>
        </div>
      </div>
      <div data-anchor="error" className="pinkCircle">
        <BluredCirlce color={BluredCircleColors.pink} blurRange={"70"} />
      </div>
      <div data-anchor="error" className="blueCircle">
        <BluredCirlce color={BluredCircleColors.blue} blurRange={"70"} />
      </div>
    </section>
  );
}

export default Error;
