"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { SVGs, headerText } from "../constants";
import { useWindowWidth } from "../utils/useWindowWidth";
import { HeaderProps } from "../lib/index";

function Header({ locale }: HeaderProps) {
  const windowWidth = useWindowWidth();
  const t = headerText[locale] || headerText["en"];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div />

      {windowWidth > 768 ? (
        <>
          <nav className="screenNav">
            {t.links.map((l) => (
              <Link href={l.link} key={l.link}>
                {l.text}
              </Link>
            ))}
          </nav>
          <div />
        </>
      ) : (
        <div className="mobile">
          {isOpen ? (
            <>
              <div onClick={() => openToggle()} className="close">
                {SVGs.close}
              </div>
              <nav className="mobileNav">
                {t.links.map((l) => (
                  <Link href={l.link} key={l.link}>
                    {l.text}
                  </Link>
                ))}
              </nav>
            </>
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
