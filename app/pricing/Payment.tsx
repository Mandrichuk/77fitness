import React from "react";
import { useTranslations } from "next-intl";

import TextLayers from "../components/TextLayers";
import { SVGs } from "../constants";
import Image from "../components/Image";

function Payment() {
  const t = useTranslations("PricingPage.Payment");

  const points = [
    t("points.point1"),
    t("points.point2"),
    t("points.point3"),
    t("points.point5"),
    t("points.point4"),
  ];

  return (
    <section className="Pricing_Payment">
      <TextLayers bgText={t("bgText")} title={t("title")} />

      <div className="wrapper">
        <div className="imageContainerMobile">
          <Image
            image={t("image.src")}
            alt={t("image.alt")}
            imgQuality={100}
            imgPriority={false}
          />
        </div>

        <div className="points">
          {points.map((point) => (
            <div key={point} className="point">
              <div className="icon">{SVGs.included}</div>
              <p className="text">{point}</p>
            </div>
          ))}
        </div>
        <div className="imageContainer">
          <Image
            image={t("image.src")}
            alt={t("image.alt")}
            imgQuality={100}
            imgPriority={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Payment;
