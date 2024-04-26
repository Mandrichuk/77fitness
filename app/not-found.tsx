"use client";
import React from "react";
import Link from "next/link";
import "./styles/globals.scss";

import Image from "./components/common/Image";
import Header from "./components/common/Header";

import { LocaleProps } from "./lib/index";
import { notFoundText } from "./constants";

import pathIntoSegments from "./utils/pathIntoSegments";

function NotFound() {
  const [locale, setLocale] = React.useState<"en" | "ru" | "sk">("en");
  const [t, setT] = React.useState<(typeof notFoundText)["en" | "ru" | "sk"]>(
    notFoundText["en"]
  );

  React.useEffect(() => {
    setLocale(
      pathIntoSegments(window.location.pathname)[0].slice(1) as
        | "en"
        | "ru"
        | "sk"
    );
    setT(notFoundText[locale]);
  }, [locale, t]);

  return (
    <section className="NotFound">
      <Header locale={locale} />
      <div className="cover">
        <div className="wrapper">
          <div className="content">
            <div id="LogoImage" className="details">
              <div className="imageContainer">
                <Image
                  image={t.backgroundImage.image}
                  alt={t.backgroundImage.alt}
                  imgQuality={100}
                  imgPriority={true}
                />
              </div>
              <div data-anchor="LogoImage" className="textContainer">
                <p className="text">{t.title}</p>
                <div className="homeContainer">
                  <Link className="homeButton" href={t.button.link}>
                    {t.button.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
