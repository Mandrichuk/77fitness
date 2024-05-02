import Link from "next/link";
import React from "react";

import Input from "./Input";

import { LoginProps } from "../../lib";
import { LoginText } from "@/app/constants";

function Login({ locale }: LoginProps) {
  const t = LoginText[locale] || LoginText["en"];

  return (
    <section className="LoginSection">
      <div className="wrapper">
        <h3 className="title">{t.title}</h3>
        <div className="chooseOption">
          <Link href={t.registrationLink.link} className="borderButton">
            {t.registrationLink.text}
          </Link>
          <Link href={""} className="button">
            {t.loginLink.text}
          </Link>
        </div>
        <div className="inputs">
          <Input placeholderText={t.inputs.email.placeholder} />
          <Input placeholderText={t.inputs.password.placeholder} />
        </div>
        <div className="loginButton">
          <button className="button">{t.registrationButton.text}</button>
        </div>
      </div>
    </section>
  );
}

export default Login;
