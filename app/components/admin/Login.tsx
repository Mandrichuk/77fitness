"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { toast, ToastContainer } from "react-toastify";

import { login as adminLogin } from "@/app/features/adminLogin";
import getHash from "@/app/utils/getHash";
import Input from "../../components/common/Input";

import { LoginProps } from "../../lib";
import { LoginText } from "@/app/constants";

function Login({ locale }: LoginProps) {
  const dispatch = useDispatch();
  const t = LoginText[locale] || LoginText["en"];
  const [revealErrors, setRevealErrors] = useState(false);
  const [incorrectData, setIncorrectData] = useState(false);
  const isLogined = useSelector((state: RootState) => state.adminLogin.value);
  const [errors, setErrors] = useState({
    fieldsFilled: false,
  });
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const notifyClientLogined = () => {
    toast.success(t.notify, {
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
      fieldsFilled: inputs.username !== "" && inputs.password !== "",
    });

    return Object.values(errors).every((value) => value);
  }

  async function handleLogin() {
    if (isValid()) {
      const adminData = {
        username: inputs.username,
        password: inputs.password,
      };

      try {
        const response = await fetch("/api/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminData),
        });

        if (response.ok) {
          console.log("Registration successful");

          const responseData = await response.json();

          dispatch(
            adminLogin({
              sku: responseData.admin.sku,
              email: responseData.admin.email,
              username: responseData.admin.username,
            })
          );

          notifyClientLogined();
          if (typeof window !== "undefined") {
            window.location.href =
              "/c5e478d59288c841aa530db6845c4c8d962893a001ce4e11a4963873aa98134a/admin";
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
        <form className="inputs">
          <Input
            placeholderText={t.inputs.email.placeholder}
            getValue={(e, field) => getValue(e, field)}
            field={"username"}
          />
          {revealErrors &&
            !errors.fieldsFilled &&
            inputs.username.length < 1 && (
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
          inputs.username.length > 1 &&
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
