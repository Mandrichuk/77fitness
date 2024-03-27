"use client";
import React from "react";

import { InputNewsletterProps } from "../lib/index";

function InputNewsletter({
  placeholderText,
  buttonText,
}: InputNewsletterProps) {
  return (
    <div className="InputNewsletter">
      <input className="input" placeholder={placeholderText} />
      <div className="buttonContainer">
        <button className="button dark">{buttonText}</button>
      </div>
    </div>
  );
}

export default InputNewsletter;
