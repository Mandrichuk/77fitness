import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

function SocialMedia() {
  const t = useTranslations("SocialMedia");

  return (
    <section className="SocialMedia">
      <div className="wrapper">
        <div className="textSection">
          <h4 className="title">
            {t("text")}
          </h4>
          <h4>
            {t("name")}
          </h4>
        </div>
        <div className="link">
          <Link  className="button" href={t("links.link1.link")}>{t("links.link1.text")}</Link>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
