import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import TextLayers from "../components/TextLayers";
import TeamSlider from "./TeamSlider";

function Team() {
  const t = useTranslations("Team");
 
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
  ];

  return (
    <section className="Team">
      <TextLayers title={t("title")} bgText={t("bgText")} />
      <div className="sliderSection">
        <div className="wrapper">
          <TeamSlider>{teamMembers}</TeamSlider>
        </div>
      </div>
    </section>
  );
}

export default Team;
