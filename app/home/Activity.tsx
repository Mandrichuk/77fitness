import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import TextLayers from "../components/TextLayers";
import ActivityImages from "./ActivityImages";

import { SVGs } from "../constants";

function Activity() {
  const t = useTranslations("Activity");

  const scrollImages = [
    {
      src: t("scrollImages.scrollImage1.src"),
      alt: t("scrollImages.scrollImage1.alt"),
    },
    {
      src: t("scrollImages.scrollImage2.src"),
      alt: t("scrollImages.scrollImage2.alt"),
    },
    {
      src: t("scrollImages.scrollImage3.src"),
      alt: t("scrollImages.scrollImage3.alt"),
    },
  ];

  return (
    <section className="Activity" id="activity">
      <TextLayers bgText={t("bgText")} title={t("title")} />
      <div className="wrapper">
        <div className="linkContainer">
          <Link href={t("link.link")} className="text">
            {t("link.text")}
          </Link>
        </div>
        <div className="imgContainer">
          <ActivityImages images={scrollImages} />
        </div>
        <div className="linkContainerMobile">
          <Link href={t("link.link")} className="text">
            {t("link.text")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Activity;
