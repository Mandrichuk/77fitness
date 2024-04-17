"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "./Image";
import BluredCirlce from "./BluredCirlce";

import pathIntoSegments from "../utils/pathIntoSegments";

import { SVGs, footerText, BluredCircleColors } from "../constants";
import { FooterProps } from "../lib/index";

function Footer({ locale }: FooterProps) {
  const pathname = usePathname();
  const t = footerText[locale] || footerText["en"];

  const pathSegments = pathIntoSegments(pathname);
  const withoutLang = pathSegments.slice(1, pathSegments.length);

  return (
    <footer className="Footer" id="footer">
      <div className="wrapper">
        <div className="mainSection">
          <div className="brandContainer">
            <div className="logo">
              <Image image={t.logo.src} alt={t.logo.alt} imgPriority={true} />
            </div>
            <p className="name">{t.name}</p>
          </div>
          <a href={t.location.link} target="_blank" className="location">
            {t.location.text}
          </a>
        </div>
        <div className="details">
          <div className="detail">
            <p className="title">{t.sitemap.title}</p>
            <ul>
              {t.sitemap.links.map((i) => (
                <div className="linkContainer" key={i.text}>
                  <Link href={i.link}>{i.text}</Link>
                </div>
              ))}
            </ul>
          </div>
          <div className="detail">
            <p className="title">{t.languages.title}</p>
            <ul>
              {t.languages.links.map((i) => (
                <div className="linkContainer" key={i.text}>
                  <Link href={`/${i.link}${withoutLang}`}>{i.text}</Link>
                </div>
              ))}
            </ul>
          </div>
          <div className="detail">
            <p className="title">{t.socials.title}</p>
            <ul className="sosialsUl">
              {t.socials.links.map((i) => (
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
      <div data-anchor="footer" className="pinkCircle">
        <BluredCirlce color={BluredCircleColors.pink} blurRange={"70"} />
      </div>
      <div data-anchor="footer" className="blueCircle">
        <BluredCirlce color={BluredCircleColors.blue} blurRange={"70"} />
      </div>
    </footer>
  );
}

export default Footer;
