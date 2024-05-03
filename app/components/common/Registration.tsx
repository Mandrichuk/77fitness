"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import Input from "./Input";

import { RegistrationProps } from "../../lib";
import { RegistrationText } from "@/app/constants";

function Registration({ locale }: RegistrationProps) {
  const t = RegistrationText[locale] || RegistrationText["en"];
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function getValue(value: any, field: string) {
    setInputs({ ...inputs, [field]: value });
  }

  console.log(inputs);

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
          <Input
            placeholderText={t.inputs.name.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.name.field}
          />
          <Input
            placeholderText={t.inputs.email.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.email.field}
          />
          <Input
            placeholderText={t.inputs.password.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.password.field}
          />
          <Input
            placeholderText={t.inputs.repeatPassword.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.repeatPassword.field}
          />
        </div>
        <div className="registrationButton">
          <button className="button">{t.registrationButton.text}</button>
        </div>
      </div>
    </section>
  );
}

export default Registration;
