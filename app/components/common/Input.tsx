"use client";
import React, { useState, useEffect } from "react";

import { InputProps } from "../../lib";
import { getRandomValues } from "crypto";

function Input({
  placeholderText,
  field,
  maxSymbols,
  getValue,
  initialValue,
}: InputProps) {
  const [value, setValue] = useState<string>("");


  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, []);

  function updateValue(e: any) {
    if (maxSymbols && e.target.value.length > maxSymbols) {
      return;
    }
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
      {maxSymbols && (
        <div className="maxSymbolsIndicator">
          {value.length}/{maxSymbols}
        </div>
      )}
    </section>
  );
}

export default Input;
