import React from "react";
import { useTranslations } from "next-intl";

import images from "../constants/index";

function Introduction() {
  const t = useTranslations("GalleryPage.Introduction");

  return (
    <section className="Gallery_Introduction" id="introduction">
      <h1 className="name">{t("name")}</h1>
      <h4 className="title">{t("title")}</h4>
    </section>
  );
}

export default Introduction;
