import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { SVGs, BluredCircleColors } from "../../constants/index";

import BluredCirlce from "../../components/BluredCirlce";
import Image from "../../components/Image";

const promotionStyles = {
  color: "#097fd9",
  fontWeight: 600,
};

const descriptionStyles = {
  color: "gray",
};

function Introduction() {
  const t = useTranslations("HomePage.Introduction");

  return (
    <section className="Introduction" id="introduction">
      <div className="wrapper">
        <div className="textSection">
          <div id="Introduction_logoImg" className="logoImg">
            <Image
              image={t("logo.src")}
              alt={t("logo.alt")}
              imgQuality={100}
              imgPriority={true}
            />
          </div>
          <div data-anchor="Introduction_logoImg" className="pinkCircle">
            <BluredCirlce color={BluredCircleColors.pink} blurRange={"100"} />
          </div>
          <div data-anchor="Introduction_logoImg" className="blueCircle">
            <BluredCirlce color={BluredCircleColors.blue} blurRange={"100"} />
          </div>
          <h1 className="name">{t("name")}</h1>
          <p className="description" style={descriptionStyles}>
            {t("description")}
            &nbsp;
            <span className="promotion" style={promotionStyles}>
              {t("promotion")}
            </span>
            <span className="details" style={descriptionStyles}>
              {t("details")}
            </span>
          </p>

          <div className="buttons">
            <div className="buttonMore">
              <Link className="button" href={t("button.link")}>
                {t("button.text")}
              </Link>
            </div>
            <Link href={t("watchVideo.link")} className="buttonVideo">
              {SVGs.play}
              <p className="text">{t("watchVideo.text")}</p>
            </Link>
          </div>
        </div>
        <div className="imgSection">
          <div className="img">
            <Image
              image={t("introductionImg.src")}
              alt={t("introductionImg.alt")}
              imgPriority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
