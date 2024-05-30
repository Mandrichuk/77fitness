"use client";

import React, { useState } from "react";
import TextLayers from "../common/TextLayers";
import { TrainersProps } from "@/app/lib";
import Image from "../common/Image";
import { TrainerProps } from "@/app/lib";

function Trainer({
  trainer,
  selectedGender,
  selectedLanguage,
  locale,
  seeMoreText, 
  seeLessText
}: TrainerProps) {
  const [seeMore, setSeeMore] = useState(false);
  const trainerAllLanguages = trainer.languageFilter.map((language) => {
    return language.value;
  });
  console.log(trainerAllLanguages);

  if (selectedGender !== "all" && trainer.gender !== selectedGender) {
    return null;
  }

  if (!trainerAllLanguages.includes(selectedLanguage)) {
    return null;
  }

  return (
    <div className="trainer">
      <div className="nameInfo">
        <div
          className={`logo ${trainer.gender === "male" ? "male" : "female"}`}
        >
          <Image
            image={trainer.image.src}
            alt={trainer.image.alt}
            imgQuality={100}
          />
        </div>
        <a href={trainer.instagram.link} target="_blank" className="title">
          @{trainer.instagram.name}
        </a>
      </div>
      <div
        className={`postImage ${trainer.gender === "male" ? "male" : "female"}`}
      >
        <Image
          image={trainer.post.src}
          alt={trainer.post.alt}
          imgQuality={100}
        />
      </div>
      <div className="contactDetails">
        <a href={`tel:${trainer.number}`} target="_blank" className="phone">
          {trainer.number}
        </a>
        <a href={`mailto:${trainer.email}`} target="_blank" className="email">
          {trainer.email}
        </a>
      </div>
      <div className={`details ${seeMore ? "open" : "closed"}`}>
        <span className={`${trainer.gender === "male" ? "male" : "female"}`}>
          {trainer.name}
        </span>
        <span className="text">&nbsp;-&nbsp;{trainer.description}</span>
      </div>
      <div className="moreButton">
        <div onClick={() => setSeeMore(!seeMore)} className="more">
          {seeMore ? seeLessText : seeMoreText}
        </div>
      </div>
    </div>
  );
}

export default Trainer;
