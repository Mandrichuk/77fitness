"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { toast, ToastContainer } from "react-toastify";

import { login } from "@/app/features/clientLogin";
import getHash from "@/app/utils/getHash";
import Input from "./Input";

import { LoginProps } from "../../lib";
import { LoginText } from "@/app/constants";

function Login({ locale }: LoginProps) {
  const dispatch = useDispatch();
  const t = LoginText[locale] || LoginText["en"];
  const [revealErrors, setRevealErrors] = useState(false);
  const [incorrectData, setIncorrectData] = useState(false);
  const isLogined = useSelector((state: RootState) => state.clientLogin.value);
  const [errors, setErrors] = useState({
    fieldsFilled: false,
  });
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const notifyClientLogined = () => {
    toast.success("t.notify", {
      position: "top-right",
      autoClose: 1300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && isLogined !== null) {
      notifyClientLogined();
      window.location.href = "/shop";
    }
  }, []);

  function getValue(value: any, field: string) {
    setInputs({ ...inputs, [field]: value });
  }

  function isValid() {
    setErrors({
      fieldsFilled: inputs.email !== "" && inputs.password !== "",
    });

    return Object.values(errors).every((value) => value);
  }

  async function handleLogin() {
    if (isValid()) {
      const clientData = {
        email: inputs.email,
        password: inputs.password,
      };

      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clientData),
        });

        if (response.ok) {
          console.log("Registration successful");

          const responseData = await response.json();

          dispatch(
            login({
              sku: getHash(),
              email: responseData.user.email,
              username: responseData.user.username,
            })
          );

          notifyClientLogined();
          if (typeof window !== "undefined") {
            window.location.href = "/shop";
          }
        } else {
          const text = await response.text();
          console.error("Error:", text);
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
        <form className="inputs">
          <Input
            placeholderText={t.inputs.email.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.email.field}
          />
          {revealErrors && !errors.fieldsFilled && inputs.email.length < 1 && (
            <p className="error fieldsNotFilled">
              *{t.inputErrors.fulfillFields}
            </p>
          )}
          <Input
            placeholderText={t.inputs.password.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={t.inputs.password.field}
          />
          {revealErrors &&
            !errors.fieldsFilled &&
            inputs.password.length < 1 && (
              <p className="error fieldsNotFilled">
                *{t.inputErrors.fulfillFields}
              </p>
            )}
        </form>
        {revealErrors &&
          incorrectData &&
          inputs.email.length > 1 &&
          inputs.password.length > 1 && (
            <div className="loginRedirect">
              <p className="error fieldsNotFilled">
                *{t.inputErrors.unaccurateData}.&#160;
                <Link className="loginRedirect" href={"/login"}>
                  {t.loginRedirect}
                </Link>
              </p>
            </div>
          )}

        <div className="loginButton">
          <button onClick={handleLogin} className="button">
            {t.registrationButton.text}
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Login;
