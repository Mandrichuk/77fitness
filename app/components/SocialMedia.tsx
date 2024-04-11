import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import BluredCirlce from "./BluredCirlce";

import { BluredCircleColors } from "../constants";

function SocialMedia() {
  const t = useTranslations("Mutual.SocialMedia");

  return (
    <section className="SocialMedia" id="socialMedia">
      <div className="wrapper">
        <div className="textSection">
          <h4 className="title">{t("text")}</h4>
          <div className="name">
            <h4>
              <span className="dot">•&nbsp;</span>
              {t("name")}
            </h4>
          </div>
        </div>
        <div className="link">
          <Link className="button" target="_blank" href={t("links.link1.link")}>
            {t("links.link1.text")}
          </Link>
        </div>
      </div>
      <div data-anchor="Introduction_logoImg" className="pinkCircle">
        <BluredCirlce color={BluredCircleColors.pink} blurRange={"70"} />
      </div>
      <div data-anchor="Introduction_logoImg" className="blueCircle">
        <BluredCirlce color={BluredCircleColors.blue} blurRange={"70"} />
      </div>
    </section>
  );
}

export default SocialMedia;
