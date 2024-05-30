import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import TextLayers from "../common/TextLayers";
import TeamSlider from "./TeamSlider";
import BluredCirlce from "../common/BluredCirlce";

import { BluredCircleColors } from "../../constants";

function Team() {
  const t = useTranslations("HomePage.Team");

  const teamMembers = [
    {
      image: {
        src: t("trainers.trainer1.image.src"),
        alt: t("trainers.trainer1.image.alt"),
      },
      qr: {
        src: t("trainers.trainer1.qr.src"),
        alt: t("trainers.trainer1.qr.alt"),
      },
      name: t("trainers.trainer1.name"),
      number: t("trainers.trainer1.number"),
      email: t("trainers.trainer1.email"),
    },
    {
      image: {
        src: t("trainers.trainer2.image.src"),
        alt: t("trainers.trainer2.image.alt"),
      },
      qr: {
        src: t("trainers.trainer2.qr.src"),
        alt: t("trainers.trainer2.qr.alt"),
      },
      name: t("trainers.trainer2.name"),
      number: t("trainers.trainer2.number"),
      email: t("trainers.trainer2.email"),
    },
    {
      image: {
        src: t("trainers.trainer3.image.src"),
        alt: t("trainers.trainer3.image.alt"),
      },
      qr: {
        src: t("trainers.trainer3.qr.src"),
        alt: t("trainers.trainer3.qr.alt"),
      },
      name: t("trainers.trainer3.name"),
      number: t("trainers.trainer3.number"),
      email: t("trainers.trainer3.email"),
    },
    {
      image: {
        src: t("trainers.trainer4.image.src"),
        alt: t("trainers.trainer4.image.alt"),
      },
      qr: {
        src: t("trainers.trainer4.qr.src"),
        alt: t("trainers.trainer4.qr.alt"),
      },
      name: t("trainers.trainer4.name"),
      number: t("trainers.trainer4.number"),
      email: t("trainers.trainer4.email"),
    },
    {
      image: {
        src: t("trainers.trainer5.image.src"),
        alt: t("trainers.trainer5.image.alt"),
      },
      qr: {
        src: t("trainers.trainer5.qr.src"),
        alt: t("trainers.trainer5.qr.alt"),
      },
      name: t("trainers.trainer5.name"),
      number: t("trainers.trainer5.number"),
      email: t("trainers.trainer5.email"),
    },
    {
      image: {
        src: t("trainers.trainer6.image.src"),
        alt: t("trainers.trainer6.image.alt"),
      },
      qr: {
        src: t("trainers.trainer6.qr.src"),
        alt: t("trainers.trainer6.qr.alt"),
      },
      name: t("trainers.trainer6.name"),
      number: t("trainers.trainer6.number"),
      email: t("trainers.trainer6.email"),
    },
    {
      image: {
        src: t("trainers.trainer7.image.src"),
        alt: t("trainers.trainer7.image.alt"),
      },
      qr: {
        src: t("trainers.trainer7.qr.src"),
        alt: t("trainers.trainer7.qr.alt"),
      },
      name: t("trainers.trainer7.name"),
      number: t("trainers.trainer7.number"),
      email: t("trainers.trainer7.email"),
    },
    {
      image: {
        src: t("trainers.trainer8.image.src"),
        alt: t("trainers.trainer8.image.alt"),
      },
      qr: {
        src: t("trainers.trainer8.qr.src"),
        alt: t("trainers.trainer8.qr.alt"),
      },
      name: t("trainers.trainer8.name"),
      number: t("trainers.trainer8.number"),
      email: t("trainers.trainer8.email"),
    },
    {
      image: {
        src: t("trainers.trainer9.image.src"),
        alt: t("trainers.trainer9.image.alt"),
      },
      qr: {
        src: t("trainers.trainer9.qr.src"),
        alt: t("trainers.trainer9.qr.alt"),
      },
      name: t("trainers.trainer9.name"),
      number: t("trainers.trainer9.number"),
      email: t("trainers.trainer9.email"),
    },
    {
      image: {
        src: t("trainers.trainer10.image.src"),
        alt: t("trainers.trainer10.image.alt"),
      },
      qr: {
        src: t("trainers.trainer10.qr.src"),
        alt: t("trainers.trainer10.qr.alt"),
      },
      name: t("trainers.trainer10.name"),
      number: t("trainers.trainer10.number"),
      email: t("trainers.trainer10.email"),
    },
    {
      image: {
        src: t("trainers.trainer11.image.src"),
        alt: t("trainers.trainer11.image.alt"),
      },
      qr: {
        src: t("trainers.trainer11.qr.src"),
        alt: t("trainers.trainer11.qr.alt"),
      },
      name: t("trainers.trainer11.name"),
      number: t("trainers.trainer11.number"),
      email: t("trainers.trainer11.email"),
    },
    {
      image: {
        src: t("trainers.trainer12.image.src"),
        alt: t("trainers.trainer12.image.alt"),
      },
      qr: {
        src: t("trainers.trainer12.qr.src"),
        alt: t("trainers.trainer12.qr.alt"),
      },
      name: t("trainers.trainer12.name"),
      number: t("trainers.trainer12.number"),
      email: t("trainers.trainer12.email"),
    },
    {
      image: {
        src: t("trainers.trainer13.image.src"),
        alt: t("trainers.trainer13.image.alt"),
      },
      qr: {
        src: t("trainers.trainer13.qr.src"),
        alt: t("trainers.trainer13.qr.alt"),
      },
      name: t("trainers.trainer13.name"),
      number: t("trainers.trainer13.number"),
      email: t("trainers.trainer13.email"),
    },
    {
      image: {
        src: t("trainers.trainer14.image.src"),
        alt: t("trainers.trainer14.image.alt"),
      },
      qr: {
        src: t("trainers.trainer14.qr.src"),
        alt: t("trainers.trainer14.qr.alt"),
      },
      name: t("trainers.trainer14.name"),
      number: t("trainers.trainer14.number"),
      email: t("trainers.trainer14.email"),
    },
    {
      image: {
        src: t("trainers.trainer15.image.src"),
        alt: t("trainers.trainer15.image.alt"),
      },
      qr: {
        src: t("trainers.trainer15.qr.src"),
        alt: t("trainers.trainer15.qr.alt"),
      },
      name: t("trainers.trainer15.name"),
      number: t("trainers.trainer15.number"),
      email: t("trainers.trainer15.email"),
    },
  ];

  return (
    <section className="Team" id="team">
      <TextLayers title={t("title")} bgText={t("bgText")} />
      <div id="sliderSection" className="sliderSection">
        <div className="wrapper">
          <TeamSlider>{teamMembers}</TeamSlider>
        </div>

        <div data-anchor="sliderSection" className="pinkCircle">
          <BluredCirlce color={BluredCircleColors.pink} blurRange={"85"} />
        </div>
        <div data-anchor="sliderSection" className="blueCircle">
          <BluredCirlce color={BluredCircleColors.blue} blurRange={"85"} />
        </div>
      </div>
      <div className="RedirectSeciton">
        <Link href={"/trainers"} className="textSection">
          {t("seeMore")}
        </Link>
      </div>
    </section>
  );
}

export default Team;
