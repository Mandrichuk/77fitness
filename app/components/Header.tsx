"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "./Image";

import { SVGs, headerText, homepagePaths } from "../constants";
import pathIntoSegments from "../utils/pathIntoSegments";
import { useWindowWidth } from "../utils/useWindowWidth";
import { HeaderProps } from "../lib/index";
import { toUpperCase } from "../utils/toUpperCase";

function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const windowWidth = useWindowWidth();
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const [isHomePage, setIsHomePage] = useState<boolean>(true);
  const t = headerText[locale] || headerText["en"];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathSegments = pathIntoSegments(pathname);
  const withoutLang = pathSegments.slice(1, pathSegments.length);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const openLangToggle = () => {
    setIsLangOpen(!isLangOpen);
  };

  const openToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className={`logoContainer ${isOpen && "open"}`}>
        <Link href={t.logo.link}>
          <Image image={t.logo.image} alt={t.logo.alt} imgPriority={true} />
        </Link>
      </div>
      {windowWidth > 768 ? (
        <>
          <nav className="screenNav">
            {t.links.map((l) => (
              <Link href={l.link} key={l.link}>
                {l.text}
              </Link>
            ))}
          </nav>
          <div className="languages">
            <div
              id="currentLangContainer"
              className="current"
              onClick={() => openLangToggle()}
            >
              <p className="currentLang">{t.languages.title}</p>
              <div className={`icon ${isLangOpen && "open"}`}>
                {SVGs.arrowDown}
              </div>
            </div>
            {isLangOpen && (
              <div data-anchor="currentLangContainer" className="options">
                {t.languages.links.map((l, index) => (
                  <Link
                    href={`/${l.link}${withoutLang}`}
                    key={`${l.text}-${index}`}
                    className="option"
                    onClick={() => {
                      openLangToggle();
                    }}
                  >
                    {l.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="mobile">
          {isOpen ? (
            <div className="mobileNavContainer">
              <div onClick={() => openToggle()} className="close">
                {SVGs.close}
              </div>
              <nav className="mobileNav">
                {t.links.map((l) => (
                  <Link href={l.link} key={l.link} onClick={() => openToggle()}>
                    {l.text}
                  </Link>
                ))}
                <div data-anchor="currentLangContainer" className="options">
                  {t.languages.links.map((l, index) => (
                    <Link
                      href={`/${l.link}${withoutLang}`}
                      key={`${l.text}-${index}`}
                      className="option"
                      onClick={() => {
                        openToggle();
                      }}
                    >
                      {toUpperCase(l.link)}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          ) : (
            <div onClick={() => openToggle()} className="burgerMenu">
              {SVGs.burgerMenu}
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
