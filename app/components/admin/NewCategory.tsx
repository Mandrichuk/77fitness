"use client";
import React, { useState } from "react";

import Input from "../common/Input";
import { NewCategoryProps } from "@/app/lib";
import { NewCategoryText } from "@/app/constants";
import getHash from "@/app/utils/getHash";
import TextLayers from "../common/TextLayers";

interface NewCategoryInputsProps {
  sku: any;
  name: string;
  bgText_en: string;
  bgText_ru: string;
  bgText_sk: string;
  title_en: string;
  title_ru: string;
  title_sk: string;
  recomended: boolean;
  toDisplay: boolean;
}

function NewCategory({ locale }: NewCategoryProps) {
  const t = NewCategoryText[locale] || NewCategoryText["en"];
  const [newCategoryData, setNewCategoryData] =
    useState<NewCategoryInputsProps>({
      sku: String(getHash()),
      name: "",
      bgText_en: "",
      bgText_ru: "",
      bgText_sk: "",
      title_en: "",
      title_ru: "",
      title_sk: "",
      recomended: false,
      toDisplay: true,
    });

  function isNewCategoryDataValid() {
    return (
      newCategoryData.name !== "" &&
      newCategoryData.bgText_en !== "" &&
      newCategoryData.bgText_ru !== "" &&
      newCategoryData.bgText_sk !== "" &&
      newCategoryData.title_en !== "" &&
      newCategoryData.title_ru !== "" &&
      newCategoryData.title_sk !== "" &&
      newCategoryData.sku !== ""
    );
  }

  function addNewCategory() {
    if (isNewCategoryDataValid()) {
      console.log(newCategoryData);
    }
  }

  function handleSetNewCategory(value: any, field: string) {
    setNewCategoryData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  console.log("Protein Bars".length);

  return (
    <section className="NewCategorySection">
      <div className="wrapper">
        <div className="title">
          <h3>{t.title}</h3>
        </div>
        <div className="inputsContainer">
          <Input
            placeholderText={t.inputs.name.placeholder}
            getValue={(value) =>
              handleSetNewCategory(value, t.inputs.name.field)
            }
            field={t.inputs.name.field}
            maxSymbols={20}
          />
          <Input
            placeholderText={t.inputs.bgText_en.placeholder}
            getValue={(value) =>
              handleSetNewCategory(value, t.inputs.bgText_en.field)
            }
            field={t.inputs.bgText_en.field}
            maxSymbols={12}
          />
          <Input
            placeholderText={t.inputs.bgText_ru.placeholder}
            getValue={(value) =>
              handleSetNewCategory(value, t.inputs.bgText_ru.field)
            }
            field={t.inputs.bgText_ru.field}
            maxSymbols={12}
          />
          <Input
            placeholderText={t.inputs.bgText_sk.placeholder}
            getValue={(value) =>
              handleSetNewCategory(value, t.inputs.bgText_sk.field)
            }
            field={t.inputs.bgText_sk.field}
            maxSymbols={12}
          />
          <Input
            placeholderText={t.inputs.title_en.placeholder}
            getValue={(value) =>
              handleSetNewCategory(value, t.inputs.title_en.field)
            }
            field={t.inputs.title_en.field}
            maxSymbols={15}
          />
          <Input
            placeholderText={t.inputs.title_ru.placeholder}
            getValue={(value) =>
              handleSetNewCategory(value, t.inputs.title_ru.field)
            }
            field={t.inputs.title_ru.field}
            maxSymbols={15}
          />
          <Input
            placeholderText={t.inputs.title_sk.placeholder}
            getValue={(value) =>
              handleSetNewCategory(value, t.inputs.title_sk.field)
            }
            field={t.inputs.title_sk.field}
            maxSymbols={15}
          />
          <div className="booleanInputs">
            <div className="booleanInput">
              <label>{t.inputs.recomended.placeholder}</label>
              <input
                type="checkbox"
                value={newCategoryData.recomended ? "true" : "false"}
                onChange={(e) =>
                  handleSetNewCategory(
                    e.target.checked,
                    t.inputs.recomended.field
                  )
                }
              />
            </div>
            <div className="booleanInput">
              <label>{t.inputs.toDisplay.placeholder}</label>
              <input
                type="checkbox"
                value={newCategoryData.toDisplay ? "true" : "false"}
                onChange={(e) =>
                  handleSetNewCategory(
                    e.target.checked,
                    t.inputs.toDisplay.field
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="preview">
          <h3>{t.previewText}</h3>
          <div className="previewContainer">
            <TextLayers
              bgText={newCategoryData.bgText_en}
              title={newCategoryData.title_en}
            />
          </div>
        </div>
        <div className="buttonsContainer">
          <button onClick={addNewCategory}>{t.buttons.saveButton.text}</button>
        </div>
      </div>
    </section>
  );
}

export default NewCategory;
