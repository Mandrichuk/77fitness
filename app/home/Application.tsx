import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Image from "../components/Image";

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

        <div className="imagesContainer">
          <div className="imageContainer">
            <Image
              image={t("details.Android.ImageQR.src")}
              alt={t("details.Android.ImageQR.alt")}
              imgQuality={100}
              imgPriority={false}
            />
          </div>

          <div className="imageContainer">
            <Image
              image={t("details.IOS.ImageQR.src")}
              alt={t("details.IOS.ImageQR.alt")}
              imgQuality={100}
              imgPriority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
