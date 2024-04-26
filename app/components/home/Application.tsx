import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Image from "../common/Image";

import { BluredCircleColors } from "../../constants/index";

import BluredCirlce from "../common/BluredCirlce";

function Application() {
  const t = useTranslations("HomePage.Application");

  return (
    <section className="Application">
      <div className="textSection">
        <p className="text"> {t("text")}</p>
        <h3 className="title">{t("title")}</h3>

        <div className="descriptionContainer">
          <p className="description">
            {t("details.description")}
            <Link href={t("details.IOS.link")}>
              &nbsp;
              {t("details.IOS.text")}
            </Link>
            &nbsp;
            {t("details.and")}&nbsp;
            <Link href={t("details.Android.link")}>
              {t("details.Android.text")}
            </Link>
          </p>
        </div>
      </div>

      <div className="wrapper">
        <div className="textSection">
          <p className="text"> {t("text")}</p>
          <h3 className="title">{t("title")}</h3>

          <div className="descriptionContainer">
            <p className="description">
              {t("details.description")}
              <a target="_blank" href={t("details.IOS.link")}>
                &nbsp;
                {t("details.IOS.text")}
              </a>
              &nbsp;
              {t("details.and")}&nbsp;
              <a target="_blank" href={t("details.Android.link")}>
                {t("details.Android.text")}
              </a>
            </p>
          </div>
        </div>

        <div id="rightqrCodeContainer" className="imagesContainer">
          <div className="imageContainer">
            <Image
              image={t("details.Android.ImageQR.src")}
              alt={t("details.Android.ImageQR.alt")}
              imgQuality={100}
              imgPriority={true}
            />
          </div>

          <div id="leftQrCodeContainer" className="imageContainer">
            <Image
              image={t("details.IOS.ImageQR.src")}
              alt={t("details.IOS.ImageQR.alt")}
              imgQuality={100}
              imgPriority={true}
            />
            <div data-anchor="rightqrCodeContainer" className="pinkCircle">
              <BluredCirlce color={BluredCircleColors.pink} blurRange={"85"} />
            </div>
            <div data-anchor="leftQrCodeContainer" className="blueCircle">
              <BluredCirlce color={BluredCircleColors.blue} blurRange={"85"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
