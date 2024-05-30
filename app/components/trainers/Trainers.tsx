"use client";

import React, { useEffect, useState } from "react";
import TextLayers from "../common/TextLayers";
import { TrainersProps } from "@/app/lib";
import Image from "../common/Image";
import Trainder from "./Trainer";
import { trainersText } from "@/app/constants";

function Trainers({ locale }: TrainersProps) {
  const t = trainersText[locale] || trainersText["en"];
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedGender, setSelectedGender] = useState("all");

  return (
    <section className="TrainersSection">
      <TextLayers bgText={t.bgText} title={t.title} />
      <div className="wrapper">
        <div className="filters">
          <div className="filter">
            <p className="title">{t.genderText}</p>
            <div className="options genderOptions">
              <button
                onClick={() => setSelectedGender("all")}
                className={`whiteButton button  ${
                  selectedGender === t.genderFilter.all.value && "selected"
                }`}
              >
                {t.genderFilter.all.text}
              </button>
              <button
                onClick={() => setSelectedGender("male")}
                className={`blueButton button ${
                  selectedGender === t.genderFilter.male.value && "selected"
                }`}
              >
                {t.genderFilter.male.text}
              </button>
              <button
                onClick={() => setSelectedGender("female")}
                className={`pinkButton  button ${
                  selectedGender === t.genderFilter.female.value && "selected"
                }`}
              >
                {t.genderFilter.female.text}
              </button>
            </div>
          </div>
          <div className="filter">
            <p className="title">{t.languageText}</p>
            <div className="options">
              {t.languageFilter.map((language) => (
                <button
                  key={language.value}
                  onClick={() => setSelectedLanguage(language.value)}
                  className={`whiteButton button ${
                    selectedLanguage === language.value && "selected"
                  }`}
                >
                  {language.text}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="trainers">
          {t.trainers.map((trainer, index) => (
            <Trainder
              trainer={trainer}
              selectedGender={selectedGender}
              selectedLanguage={selectedLanguage}
              locale={locale}
              seeMoreText={t.seeMoreText}
              seeLessText={t.seeLessText}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
