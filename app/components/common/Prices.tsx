"use client";
import React from "react";
import { useTranslations } from "next-intl";

import Membership from "../home/Membership";
import { PricesProps } from "../../lib/index";
import { PricesText } from "@/app/constants";

function Prices({ locale }: PricesProps) {
  const t = PricesText[locale] || PricesText["en"];

  return (
    <section className="Prices" id="prices">
      <div className="wrapper">
        <h6 className="text">{t.text}</h6>
        <h3 className="title">{t.title}</h3>
        <div className="details">
          <div className="memberships">
            {t.packages.map((membership, index) => (
              <Membership key={`membership-${index}`} membership={membership} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
