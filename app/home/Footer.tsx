import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Image from "../components/Image";

import { SVGs } from "../constants";

function Footer() {
  const t = useTranslations("Footer");

  const details = {
    sitemap: {
      title: t("sitemap.title"),
      links: [
        {
          text: t("sitemap.links.link1.text"),
          link: t("sitemap.links.link1.link"),
        },
        { text: t("sitemap.links.link2.text"), link: "/schedule" },
        {
          text: t("sitemap.links.link3.text"),
          link: t("sitemap.links.link3.link"),
        },
        {
          text: t("sitemap.links.link4.text"),
          link: t("sitemap.links.link4.link"),
        },
      ],
    },
    languages: {
      title: t("languages.title"),
      links: [
        {
          text: t("languages.links.link1.text"),
          link: t("languages.links.link1.link"),
        },
        {
          text: t("languages.links.link2.text"),
          link: t("languages.links.link2.link"),
        },
        {
          text: t("languages.links.link3.text"),
          link: t("languages.links.link3.link"),
        },
      ],
    },
    socials: {
      title: t("socials.title"),
      links: [
        {
          icon: { src: SVGs.instagram, alt: t("socials.links.link1.icon.alt") },
          link: t("socials.links.link1.link"),
        },
      ],
    },
  };

  return (
    <footer className="Footer">
      <div className="wrapper">
        <div className="mainSection">
          <div className="brandContainer">
            <div className="logo">
              <Image image={t("logo.src")} alt={t("logo.alt")} />
            </div>
            <p className="name">{t("name")}</p>
          </div>
          <a href={t("location.link")} target="_blank" className="location">
            {t("location.text")}
          </a>
        </div>
        <div className="details">
          <div className="detail">
            <p className="title">{t("sitemap.title")}</p>
            <ul>
              {details.sitemap.links.map((i) => (
                <div className="linkContainer" key={i.text}>
                  <Link href={i.link}>{i.text}</Link>
                </div>
              ))}
            </ul>
          </div>
          <div className="detail">
            <p className="title">{t("languages.title")}</p>
            <ul>
              {details.languages.links.map((i) => (
                <div className="linkContainer" key={i.text}>
                  <Link href={i.link}>{i.text}</Link>
                </div>
              ))}
            </ul>
          </div>
          <div className="detail">
            <p className="title">{t("socials.title")}</p>
            <ul>
              {details.socials.links.map((i) => (
                <div key={i.link} className="linkContainer">
                  {i.icon && (
                    <Link href={i.link} target="_blank" className="icon">
                      {i.icon.src}
                    </Link>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
