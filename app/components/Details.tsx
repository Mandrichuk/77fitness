import React from "react";
import { useTranslations } from "next-intl";

import { SVGs } from "../constants";

function Details() {
  const t = useTranslations("HomePage.Details");

  const included = [
    t("membership.included.included1"),
    t("membership.included.included2"),
    t("membership.included.included3"),
  ];

  return (
    <section className="Homepage_Details">
      <div className="wrapper">
        <div className="detailsContainer">
          <div className="entryTimeContainer">
            <h4 className="biggerText">{t("entry.text")}</h4>
            <div className="timedaysContainer">
              <div className="daysContainer">
                <p className="days">{t("entry.weekdays.days")}</p>
                <p className="days">{t("entry.weekend.days")}</p>
              </div>
              <div className="timeContainer">
                <p className="time">{t("entry.weekend.time")}</p>
                <p className="time">{t("entry.weekdays.time")}</p>
              </div>
            </div>
          </div>
          <div className="locationContainerMobile">
            <div className="locationTextContainer">
              <div className="icon">{SVGs.location}</div>
              <div className="locationText">{t("location.text")}</div>
            </div>
            <div className="mapContainer">
              <iframe
                src={t("location.link")}
                title="location"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="detailsTextContainer">
            <div className="entryTimeContainer">
              <h4 className="biggerText">{t("entry.text")}</h4>
              <div className="timedaysContainer">
                <div className="daysContainer">
                  <p className="days">{t("entry.weekdays.days")}</p>
                  <p className="days">{t("entry.weekend.days")}</p>
                </div>
                <div className="timeContainer">
                  <p className="time">{t("entry.weekend.time")}</p>
                  <p className="time">{t("entry.weekdays.time")}</p>
                </div>
              </div>
            </div>
            <div className="membershipContainer">
              <div className="description"> {t("membership.description")}</div>
              <h4 className="biggerText">{t("membership.text")}</h4>

              <div className="includedContainer">
                {included.map((i) => (
                  <div className="includedText" key={i}>
                    <span className="dot">•&nbsp;</span>
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
           <div className="locationContainer">
            <div className="locationTextContainer">
              <div className="icon">{SVGs.location}</div>
              <div className="locationText">{t("location.text")}</div>
            </div>
            <div className="mapContainer">
              <iframe
                src={t("location.link")}
                title="location"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
