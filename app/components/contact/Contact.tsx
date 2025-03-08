import React from "react";
import { useTranslations } from "next-intl";

function Details() {
  const t = useTranslations("HomePage.Contact");


  return (
    <section className="Contact">
      <div className="wrapper">
       <div className="title">{t("title")}</div>
       <div className="sro">{t("sro")}</div>
       <div className="ico">{t("ico")}</div>
       <div className="dic">{t("dic")}</div>
       <div className="dph">{t("dph")}</div>
       <div className="location">{t("location")}</div>
      </div>
    </section>
  );
}

export default Details;

