import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Image from "../common/Image";
import { SVGs } from "../../constants";

const brand1Styles = {
  color: "#8DC53F",
};

const brand2Styles = {
  color: "#8E8E8E",
};

function Gallery() {
  const t = useTranslations("HomePage.Gallery");

  const points = [t("points.point1"), t("points.point2"), t("points.point3")];

  return (
    <section className="Gallery" id="gallery">
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
                  imgPriority={true}
                />
              </div>
              <div data-anchor="repel" className="img2 img">
                <Image
                  image={t("gallery.gallery2.src")}
                  alt={t("gallery.gallery2.alt")}
                  imgPriority={true}
                />
              </div>
              <div data-anchor="repel" className="img3 img">
                <Image
                  image={t("gallery.gallery3.src")}
                  alt={t("gallery.gallery3.alt")}
                  imgPriority={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="textSection">
          <div className="wrapper">
            <div className="machinesLogos">
              <div className="logoContainer">
                <Image
                  image="brands/PRIME_Logo_1200x1200-removebg-preview_shterm"
                  alt="logo"
                  imgQuality={100}
                />
              </div>
              <div className="logoContainer">
                <Image
                  image="brands/07c-removebg-preview_knfzbh"
                  alt="logo"
                  imgQuality={100}
                />
              </div>
              <div className="logoContainer">
                <Image
                  image="brands/output-onlinepngtools_2_vuhsml"
                  alt="logo"
                  imgQuality={100}
                />
              </div>
              <div className="logoContainer">
                <Image
                  image="brands/Hoist_Fitness_Logo_Classic_k49lg9"
                  alt="logo"
                  imgQuality={100}
                />
              </div>
              <div className="logoContainer">
                <Image
                  image="brands/output-onlinepngtools_f4lxdp"
                  alt="logo"
                  imgQuality={100}
                />
              </div>
              <div className="logoContainer">
                <Image
                  image="brands/DRAX_2-1024x403_o1ihox"
                  alt="logo"
                  imgQuality={100}
                />
              </div>
            </div>
            <h3 className="title">
              {t("title.main")}&nbsp;
              {/* <span className="text" style={brand1Styles}>
                {t("title.brand1")}
              </span>
              &nbsp;
              {t("title.text1")}&nbsp;
              <span className="text" style={brand2Styles}>
                {t("title.brand2")}
              </span>
              &nbsp;
              <span className="text" style={{ display: "block" }}>
                {t("title.text2")}
              </span> */}
            </h3>

            <div className="points">
              {points.map((p, index) => (
                <div className="point" key={`point-${index}`}>
                  <div className="icon">{SVGs.included}</div>
                  <p>{p}</p>
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
                <a className="button dark" href={`tel:${t("link.text")}`}>
                  {t("link.text")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
