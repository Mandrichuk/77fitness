"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  notifyNewsletterSuccess,
  notifyNewsletterError,
  notifyExistsNewsletterError,
} from "../constants";
import { InputNewsletterProps } from "../lib/index";

function InputNewsletter({
  placeholderText,
  buttonText,
}: InputNewsletterProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);
  const [emailInput, setEmailInput] = useState<string>("");

  function handleInput(e: any) {
    setEmailInput(e.target.value);
  }

  function isValidEmail(emailInput: string) {
    // const re =
    //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const reValidation = re.test(String(emailInput).toLowerCase());

    const reValidation = true;

    notifyNewsletterError();
    if (emailInput === "" && !reValidation) {
      setError(true);
    }

    return reValidation;
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!isValidEmail(emailInput)) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      } else if (response.ok) {
        notifyNewsletterSuccess();
      }

      // if (response.status === 400) {
      //   // notifyExistsNewsletterError();
      // }
      setEmailInput("");
    } catch (error) {
      console.error("Error submitting email");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="InputNewsletter">
        <input
          value={emailInput}
          placeholder={placeholderText}
          className="input"
          type="email"
          onChange={handleInput}
        />
        <div className="buttonContainer">
          <button onClick={handleSubmit} className="button dark">
            {isLoading ? "Loading..." : buttonText}
          </button>
        </div>
      </div>
    </>
  );
}

export default InputNewsletter;
