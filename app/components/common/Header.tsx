"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "./Image";

import { SVGs, headerText } from "../../constants";
import pathIntoSegments from "../../utils/pathIntoSegments";
import { useWindowWidth } from "../../utils/useWindowWidth";
import { HeaderProps } from "../../lib/index";
import { toUpperCase } from "../../utils/toUpperCase";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const clientLoginData = useSelector(
    (state: RootState) => state.clientLogin.value
  );
  const windowWidth = useWindowWidth();
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = headerText[locale] || headerText["en"];

  // Extract current locale and path without the locale
  const pathSegments = pathIntoSegments(pathname);
  const currentLocale = pathSegments[0] || "en";
  const withoutLang = pathSegments.slice(1).join("/");

  console.log(`${locale} - Locale`)

  // Function to create a localized link
  const createLocaleLink = (locale: string) => {
    const newPath = `/${locale}/${withoutLang}`;
    return `${newPath}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
  };

  useEffect(() => {
    if (windowWidth > 900) {
      setIsOpen(false);
    }

    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }
  }, [isOpen, windowWidth]);

  const openLangToggle = () => setIsLangOpen(!isLangOpen);
  const openShopToggle = () => setIsShopOpen(!isShopOpen);
  const openToggle = () => setIsOpen(!isOpen);

  return (
    <header className={`header ${isOpen && "open"}`}>
      <div className={`logoContainer ${isOpen && "open"}`}>
        <Link href={t.logo.link}>
          <Image image={t.logo.image} alt={t.logo.alt} imgPriority={true} />
        </Link>
      </div>
      {windowWidth > 900 ? (
        <>
          <nav className="screenNav">
            {t.links.map((l) => (
              <Link href={l.link} key={l.link}>
                {l.text}
              </Link>
            ))}
            <div className="shop">
              <div
                id="shopContainer"
                className="current"
                onClick={() => openShopToggle()}
              >
                <p className="currentShop">{t.shop.title}</p>
                <div className={`icon ${isShopOpen && "open"}`}>
                  {SVGs.arrowDown}
                </div>
              </div>
              {isShopOpen && (
                <div data-anchor="currentShopContainer" className="options">
                  {t.shop.links.map((l, index) =>
                    l.link !== "/login" ? (
                      <Link
                        href={l.link}
                        key={`${l.text}-${index}`}
                        className="option"
                        onClick={() => openShopToggle()}
                      >
                        {l.text}
                      </Link>
                    ) : null
                  )}
                </div>
              )}
            </div>
            {!clientLoginData && (
              <Link href={t.login.link} className="option login">
                {t.login.text}
              </Link>
            )}
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
                {t.languages.links.map((l) => (
                  <Link
                    href={createLocaleLink(l.link)}
                    key={l.link}
                    className={`option ${
                      currentLocale === l.link ? "active" : ""
                    }`}
                    onClick={() => openLangToggle()}
                  >
                    {toUpperCase(l.link)}
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
                  <div className="navLink" key={l.link}>
                    <Link href={l.link}>{l.text}</Link>
                  </div>
                ))}
                {t.languages.links.map((l) => (
                  <Link
                    href={createLocaleLink(l.link)}
                    key={l.link}
                    className="option"
                    onClick={() => openToggle()}
                  >
                    {toUpperCase(l.link)}
                  </Link>
                ))}
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
