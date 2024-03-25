import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { CLOUDINARY_FOLDER } from "../constants/index";

import { SVGs } from "../constants/index";

import Image from "../components/Image";

const promotionStyles = {
  color: "#097fd9",
  fontWeight: 600,
};

const descriptionStyles = {
  color: "gray",
};

function Introduction() {
  const t = useTranslations("Introduction");

  return (
    <section className="Introduction">
      <div className="wrapper">
        <div className="textSection">
          <div className="logoImg">
            <Image
              image={`${CLOUDINARY_FOLDER}${t("logo.src")}`}
              alt={t("logo.alt")}
              imgQuality={100}
              imgPriority={true}
            />
          </div>
          <h1 className="name">{t("name")}</h1>
          <p className="description" style={descriptionStyles}>
            {t("description")}
            &nbsp;
            <span className="promotion" style={promotionStyles}>
              {t("promotion")}
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
              image={`${CLOUDINARY_FOLDER}${t("introductionImg.src")}`}
              alt={t("introductionImg.alt")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
