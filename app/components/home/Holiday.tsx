import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { toUpperCase } from "@/app/utils/toUpperCase";

function Holiday() {
  const t = useTranslations("Holiday");

  const holidaySchedule = [
    {
      title: t("schedule.schedule1.title"),
      day: t("schedule.schedule1.day"),
      time: t("schedule.schedule1.time"),
    },
    {
      title: t("schedule.schedule2.title"),
      day: t("schedule.schedule2.day"),
      time: t("schedule.schedule2.time"),
    },
    {
      title: t("schedule.schedule3.title"),
      day: t("schedule.schedule3.day"),
      time: t("schedule.schedule3.time"),
    },
    {
      title: t("schedule.schedule4.title"),
      day: t("schedule.schedule4.day"),
      time: t("schedule.schedule4.time"),
    },
    {
      title: t("schedule.schedule5.title"),
      day: t("schedule.schedule5.day"),
      time: t("schedule.schedule5.time"),
    },
  ];

  const holidayInfo = {
    title: t("title"),
    text: t("text"),
    subtitle: t("subtitle"),
    schedule: holidaySchedule,
  };

  return (
    <section className="Holiday_Homepage">
      <div className="wrapper">
        <h3 className="allText">{toUpperCase(holidayInfo.text)}</h3>
        <div className="scheduleContainer">
          {holidayInfo.schedule.map((schedule, index) => (
            <div className="scheduleItem" key={index}>
              <div className="text">
                <h4 className="title">{toUpperCase(schedule.title)}</h4>
                <p className="day">{schedule.day}</p>
              </div>
              <p className="time">{schedule.time}</p>
            </div>
          ))}
        </div>
        <h3 className="subtitle">{toUpperCase(holidayInfo.subtitle)}</h3>
      </div>
    </section>
  );
}

export default Holiday;
