"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import Input from "./Input";

import { RegistrationProps } from "../../lib";
import { RegistrationText } from "@/app/constants";
import { error } from "console";

import getHash from "@/app/utils/getHash";

function Registration({ locale }: RegistrationProps) {
  const t = RegistrationText[locale] || RegistrationText["en"];
  const [emailAlredyRegistered, setEmailAlredyRegistered] = useState(false);
  const [errors, setErrors] = useState({
    fieldsFilled: false,
    emailValid: false,
    passwordValid: false,
    passwordsMatch: false,
  });
  const [revealErrors, setRevealErrors] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function getValue(value: any, field: string) {
    setInputs({ ...inputs, [field]: value });
  }

  function isValid() {
    setErrors({
      fieldsFilled:
        inputs.username !== "" &&
        inputs.email !== "" &&
        inputs.password !== "" &&
        inputs.repeatPassword !== "",
      emailValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email),
      passwordValid: inputs.password.length > 7,
      passwordsMatch: inputs.password === inputs.repeatPassword,
    });

    return Object.values(errors).every((value) => value);
  }

  const notifyAddedToCart = () => {
    toast.success("registered!!", {
      position: "top-right",
      autoClose: 1300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  };

  async function createAccount() {
    if (isValid()) {
      const clientData = {
        sku: getHash(),
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      };

      try {
        const response = await fetch("/api/client", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clientData),
        });

        if (response.ok) {
          console.log("Registration successful");
          notifyAddedToCart();

          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        } else {
          const text = await response.text();
          console.error("Error:", text);
          setEmailAlredyRegistered(true);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
  }

  useEffect(() => {
    isValid();
  }, [inputs]);

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
        <form className="inputs">
          <Input
            placeholderText={t.inputs.name.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.name.field}
            maxSymbols={10}
          />
          {revealErrors &&
            !errors.fieldsFilled &&
            inputs.username.length < 1 && (
              <p className="error fieldsNotFilled">
                *{t.inputErrors.fulfillFields}
              </p>
            )}

          <Input
            placeholderText={t.inputs.email.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.email.field}
          />
          {revealErrors && !errors.fieldsFilled && inputs.email.length < 1 && (
            <p className="error fieldsNotFilled">
              {" "}
              *{t.inputErrors.fulfillFields}
            </p>
          )}
          {revealErrors && !errors.emailValid && inputs.email.length > 0 && (
            <p className="error fieldsNotFilled">
              {t.inputErrors.invalidEmail}
            </p>
          )}
          {emailAlredyRegistered && (
            <p className="error fieldsNotFilled">
              *{t.inputErrors.emailAlreadyRegistered}&#160;
              <Link className="loginRedirect" href={"/login"}>
                {t.registerRedirect}
              </Link>
            </p>
          )}

          <Input
            placeholderText={t.inputs.password.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.password.field}
            maxSymbols={15}
          />
          {revealErrors &&
            !errors.fieldsFilled &&
            inputs.password.length < 8 && (
              <p className="error fieldsNotFilled">
                &#160; *{t.inputErrors.passwordLength}
              </p>
            )}

          <Input
            placeholderText={t.inputs.repeatPassword.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.repeatPassword.field}
          />
          {revealErrors &&
            !errors.fieldsFilled &&
            inputs.repeatPassword.length < 1 && (
              <p className="error fieldsNotFilled">
                {" "}
                *{t.inputErrors.fulfillFields}
              </p>
            )}
          {revealErrors &&
            !errors.passwordsMatch &&
            inputs.password.length > 1 && (
              <p className="error fieldsNotFilled">
                * Passwords does not match
              </p>
            )}
        </form>

        <div className="registrationButton">
          <button
            onClick={() => {
              createAccount();
              setRevealErrors(true);
            }}
            className="button"
          >
            {t.registrationButton.text}
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Registration;
