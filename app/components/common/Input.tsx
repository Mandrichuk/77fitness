"use client";
import React, { useState, useEffect } from "react";

import { InputProps } from "../../lib";
import { getRandomValues } from "crypto";

function Input({ placeholderText, field, getValue }: InputProps) {
  const [value, setValue] = useState<string>("");

  function updateValue(e: any) {
    setValue(e.target.value);
    getValue(e.target.value, field);
  }

  return (
    <section className="InputSection">
      <input
        value={value}
        onChange={(e) => updateValue(e)}
        type="text"
        placeholder={placeholderText}
      />
    </section>
  );
}

export default Input;
