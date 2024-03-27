"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "../components/Image";

import { TeamSliderProps } from "../lib/index";
import { CLOUDINARY_FOLDER } from "../constants/index";
import { useWindowWidth } from "../utils/useWindowWidth";

function TeamSlider({ children }: TeamSliderProps) {
  const windowWidth = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(2.1);
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
  };

  useEffect(() => {
    if (windowWidth < 700) {
      setSlidesToShow(1.08);
    }
    if (windowWidth > 700) {
      setSlidesToShow(2.08);
    }
    if (windowWidth > 1250) {
      setSlidesToShow(3.08);
    }
  }, [windowWidth]);

  return (
    <div className="TeamSlider">
      <Slider {...settings}>
        {children.map((m, index) => (
          <div key={`teamMember-${index}`} className="teamMember">
            <div className="wrapper">
              <div className="textSection">
                <p className="name">{m.name}</p>
                <p className="number">{m.number}</p>
                <p className="email">{m.email}</p>
              </div>
              <div className="imagesSection">
                <div className="trainerImg">
                  <Image image={m.image.src} alt={m.image.alt} />
                </div>
                <div className="qrImg">
                  <Image image={m.qr.src} alt={m.qr.alt} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TeamSlider;
