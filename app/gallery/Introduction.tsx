import React from "react";
import { useTranslations } from "next-intl";

function Introduction() {
  const t = useTranslations("GalleryPage.Introduction");

  return (
    <section className="Gallery_Introduction">
      <h1 className="name">{t("name")}</h1>
      <h4 className="title">{t("title")}</h4>
    </section>
  );
}

export default Introduction;
