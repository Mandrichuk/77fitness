import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { SVGs } from "../constants";

function CreatedBy() {
  const t = useTranslations("CreatedBy");

  return (
    <section className="CreatedBy">
      <div className="wrapper">
        <div className="date">
          <div className="icon">{SVGs.cSign}</div>
          <div className="year">{t("year")}</div>
        </div>
        <div className="creator">
          {t("text")}
          <Link className="link" href={t("link")} target="_blank">
            {" "}
            {t("creator")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CreatedBy;
