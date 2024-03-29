import React from "react";
import { useTranslations } from "next-intl";

import Membership from "./Membership";

function Prices() {
  const t = useTranslations("Prices");

  const memberships = [
    {
      title: t("packages.package1.title"),
      price: t("packages.package1.price"),
      description: t("packages.package1.description"),
      included: [
        t("packages.package1.included.included1"),
        t("packages.package1.included.included2"),
        t("packages.package1.included.included3"),
        t("packages.package1.included.included4"),
      ],
      button: {
        text: t("packages.package1.button.text"),
        link: t("packages.package1.button.link"),
      },
    },
    {
      title: t("packages.package2.title"),
      price: t("packages.package2.price"),
      description: t("packages.package2.description"),
      included: [
        t("packages.package2.included.included1"),
        t("packages.package2.included.included2"),
        t("packages.package2.included.included3"),
        t("packages.package2.included.included4"),
      ],
      button: {
        text: t("packages.package2.button.text"),
        link: t("packages.package2.button.link"),
      },
    },
    {
      standOut: true,
      title: t("packages.package3.title"),
      price: t("packages.package3.price"),
      description: t("packages.package3.description"),
      included: [
        t("packages.package3.included.included1"),
        t("packages.package3.included.included2"),
        t("packages.package3.included.included3"),
        t("packages.package3.included.included4"),
        t("packages.package3.included.included5"),
      ],
      button: {
        text: t("packages.package3.button.text"),
        link: t("packages.package3.button.link"),
      },
    },
    {
      title: t("packages.package4.title"),
      price: t("packages.package4.price"),
      description: t("packages.package4.description"),
      included: [
        t("packages.package4.included.included1"),
        t("packages.package4.included.included2"),
        t("packages.package4.included.included3"),
        t("packages.package4.included.included4"),
      ],
      button: {
        text: t("packages.package4.button.text"),
        link: t("packages.package4.button.link"),
      },
    },
  ];

  console.log(memberships[0]);

  return (
    <section className="Prices">
      <div className="wrapper">
        <h6 className="text">{t("text")}</h6>
        <h3 className="title">{t("title")}</h3>
        <div className="details">
          <div className="memberships">
            {memberships.map((membership, index) => (
              <Membership key={`membership-${index}`} membership={membership} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
