"use client";
import React, { useState, useEffect } from "react";

import { InputProps } from "../../lib";

function Input({ placeholderText }: InputProps) {
  const [value, setValue] = useState<string>("");

  function updateValue(e: any) {
    setValue(e.target.value);
  }

  useEffect(() => {
    // getValue(value);
  }, [value]);

  return (
    <section className="InputSection">
      <input
        onChange={(e) => updateValue(e)}
        type="text"
        placeholder={placeholderText}
      />
    </section>
  );
}

export default Input;
