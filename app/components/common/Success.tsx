import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Image from "./Image";
import BluredCirlce from "./BluredCirlce";

import { BluredCircleColors } from "../../constants";

function Success() {
  const t = useTranslations("Shop.Success");

  return (
    <section id="success" className="ShopSuccess">
      <div className="wrapper">
        <div className="imageContainer">
          <Image image={t("image.src")} alt={t("image.alt")} imgQuality={100} />
        </div>
        <div className="textContainer">
          <h3 className="title">{t("title")}</h3>
          <p className="text">{t("text")}</p>
          <div className="buttonContainer">
            <Link href="/shop/orders" className="button">
              {t("button.text")}
            </Link>
          </div>
        </div>
      </div>
      <div data-anchor="success" className="pinkCircle">
        <BluredCirlce color={BluredCircleColors.pink} blurRange={"70"} />
      </div>
      <div data-anchor="success" className="blueCircle">
        <BluredCirlce color={BluredCircleColors.blue} blurRange={"70"} />
      </div>
    </section>
  );
}

export default Success;
