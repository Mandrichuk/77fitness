import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Image from "../components/Image";
import { SVGs } from "../constants";

const brand1Styles = {
  color: "#8DC53F",
};

const brand2Styles = {
  color: "#8E8E8E",
};

function Gallery() {
  const t = useTranslations("Gallery");

  const points = [t("points.point1"), t("points.point2"), t("points.point3")];

  return (
    <section className="Gallery">
      <div className="cover">
        <div className="textSectionMobile">
          <div className="wrapper">
            <h3 className="title">
              {t("title.main")}&nbsp;
              <span className="text" style={brand1Styles}>
                {t("title.brand1")}
              </span>
              &nbsp;
              {t("title.text1")}&nbsp;
              <span className="text" style={brand2Styles}>
                {t("title.brand2")}
              </span>
              &nbsp;
              <span style={{ display: "inline-block" }} className="text">
                {t("title.text2")}
              </span>
            </h3>
          </div>
        </div>
        <div className="wrapper">
          <div className="imgSection">
            <div id="repel" className="repel">
              <div data-anchor="repel" className="img1 img">
                <Image
                  image={t("gallery.gallery1.src")}
                  alt={t("gallery.gallery1.alt")}
                />
              </div>
              <div data-anchor="repel" className="img2 img">
                <Image
                  image={t("gallery.gallery2.src")}
                  alt={t("gallery.gallery2.alt")}
                />
              </div>
              <div data-anchor="repel" className="img3 img">
                <Image
                  image={t("gallery.gallery3.src")}
                  alt={t("gallery.gallery3.alt")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="textSection">
          <div className="wrapper">
            <h3 className="title">
              {t("title.main")} &nbsp;
              <span className="text" style={brand1Styles}>
                {t("title.brand1")}
              </span>
              &nbsp;
              {t("title.text1")}&nbsp;
              <span className="text" style={brand2Styles}>
                {t("title.brand2")}
              </span>
              &nbsp;
              {t("title.text2")}
            </h3>

            <div className="points">
              {points.map((p, index) => (
                <div className="point">
                  <div className="icon">{SVGs.included}</div>
                  <p key={`point-${index}`}>{p}</p>
                </div>
              ))}
            </div>
            <div className="buttons">
              <div>
                <Link className="button" href={t("button.link")}>
                  {t("button.text")}
                </Link>
              </div>
              <div>
                <Link className="button dark" href={t("link.text")}>
                  {t("link.text")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
