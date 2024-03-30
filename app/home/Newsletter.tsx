import React from "react";
import { useTranslations } from "next-intl";

import InputNewsletter from "./InputNewsletter";

function Newsletter() {
  const t = useTranslations("Newsletter");

  return (
    <section className="Newsletter" id="newsletter">
      <div className="wrapper">
        <h3 className="title">{t("title")}</h3>
        <p className="description">{t("description")}</p>
        <InputNewsletter  placeholderText={t("input.placeholder")} buttonText={t("input.button.text")} />
      </div>
    </section>
  );
}

export default Newsletter;
