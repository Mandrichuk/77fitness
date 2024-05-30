"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "./Image";

import { SVGs, headerText, homepagePaths } from "../../constants";
import pathIntoSegments from "../../utils/pathIntoSegments";
import { useWindowWidth } from "../../utils/useWindowWidth";
import { HeaderProps } from "../../lib/index";
import { toUpperCase } from "../../utils/toUpperCase";
import clientLogin from "@/app/features/clientLogin";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const clientLoginData = useSelector(
    (state: RootState) => state.clientLogin.value
  );
  const windowWidth = useWindowWidth();
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
  const [isHomePage, setIsHomePage] = useState<boolean>(true);
  const t = headerText[locale] || headerText["en"];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathSegments = pathIntoSegments(pathname);
  const withoutLang = pathSegments.slice(1, pathSegments.length);

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

  const openLangToggle = () => {
    setIsLangOpen(!isLangOpen);
  };

  const openShopToggle = () => {
    setIsShopOpen(!isShopOpen);
  };

  const openToggle = () => {
    setIsOpen(!isOpen);
  };

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
            {t.links.map((l) =>
              l.link !== "/login" ? (
                <Link href={l.link} key={l.link}>
                  {l.text}
                </Link>
              ) : null
            )}
            {t.links.map((l) =>
              l.link === "/login" && !clientLoginData ? (
                <Link href={l.link} key={l.link}>
                  {l.text}
                </Link>
              ) : null
            )}

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
                  {t.shop.links.map((l, index) => (
                    <Link
                      href={l.link}
                      key={`${l.text}-${index}`}
                      className="option"
                      onClick={() => {
                        openShopToggle();
                      }}
                    >
                      {l.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
                {t.links.map((l) =>
                  l.link !== "/login" ? (
                    <div className="navLink" key={l.link}>
                      <Link href={l.link}>{l.text}</Link>
                      <div className="underline" />
                    </div>
                  ) : null
                )}
                {t.links.map((l) =>
                  l.link === "/login" && !clientLoginData ? (
                    <div className="navLink" key={l.link}>
                      <Link href={l.link}>{l.text}</Link>
                      <div className="underline" />
                    </div>
                  ) : null
                )}
                {t.shop.links.map((l, index) => (
                  <div className="navLink" key={`${l.text}-${index}`}>
                    <Link
                      href={`${l.link}`}
                      className="option"
                      onClick={() => {
                        openToggle();
                      }}
                    >
                      {l.text}
                    </Link>
                    <div className="underline" />
                  </div>
                ))}
                <div className="options">
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
