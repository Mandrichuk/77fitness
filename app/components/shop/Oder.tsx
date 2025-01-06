import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import Link from "next/link";
import CreateOrder from "./CreateOrder";
import OrderPrice from "./OrderPrice";

function OderIBAN() {
  const t = useTranslations("Order");

  const steps = [
    {
      text: t("steps.step1.text"),
    },
    {
      text: t("steps.step2.text"),
    },
    {
      text: t("steps.step3.text"),
    },
    {
      text: t("steps.step4.text"),
    },
  ];

  return (
    <section className="OrderIBAN" id="order">
      <div className="wholeWrapper">
        <div className="wrapper">
          <div className="title">{t("title")}</div>
          <div className="instructionText">{t("instructionText")}</div>
          <div className="paymentInfo">
            <span className="">{t("paymentInfo1")}</span>
            <span className="">
              &nbsp;€
              <OrderPrice />
            </span>
            <span className="">{t("paymentInfo2")}</span>
          </div>
          <div className="stepsContainer">
            {steps.map((step, index) => (
              <div key={index} className="stepContainer">
                {index + 1}.&nbsp;{step.text}
              </div>
            ))}
          </div>
          <div className="ibanText">IBAN&nbsp;{t("ibanNumber")}</div>
          <div className="helpText">{t("helpText")}</div>
          <div className="areMoneySentText">{t("areMoneySentText")}</div>
          <div className="buttonsContainer">
            <Link href={t("buttonNo.link")} className="buttonNo">
              {t("buttonNo.text")}
            </Link>
            <CreateOrder text={t("buttonYes.text")} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OderIBAN;
