import React from "react";
import { useTranslations } from "next-intl";

function Policy() {
  const t = useTranslations("HomePage.Contact");

  return (
    <section className="Policy">
      <div className="wrapper">
        <div className="title">Dokumenty</div>
        <div className="cover">
          •{" "}
          <a
            href="/documents/VOP.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Všeobecné obchodné podmienky
          </a>
        </div>
        <div className="cover">
          •{" "}
          <a
            href="/documents/GDPR.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            GDPR všeobecné
          </a>
        </div>
        <div className="cover">
          •{" "}
          <a
            href="/documents/3docx.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prevádzkový poriadok
          </a>
        </div>
      </div>
    </section>
  );
}

export default Policy;
