import Link from "next/link";
import React from "react";

import Input from "./Input";

import { RegistrationProps } from "../../lib";
import { RegistrationText } from "@/app/constants";

function Registration({ locale }: RegistrationProps) {
  const t = RegistrationText[locale] || RegistrationText["en"];

  return (
    <section className="RegistrationSection">
      <div className="wrapper">
        <h3 className="title">{t.title}</h3>
        <div className="chooseOption">
          <Link href={""} className="button">
            {t.registrationLink}
          </Link>
          <Link href={t.registrationButton.link} className="borderButton">
            {t.loginLink}
          </Link>
        </div>
        <div className="inputs">
          <Input placeholderText={t.inputs.name.placeholder} />
          <Input placeholderText={t.inputs.email.placeholder} />
          <Input placeholderText={t.inputs.password.placeholder} />
          <Input placeholderText={t.inputs.repeatPassword.placeholder} />
        </div>
        <div className="registrationButton">
          <button className="button">{t.registrationButton.text}</button>
        </div>
      </div>
    </section>
  );
}

export default Registration;
