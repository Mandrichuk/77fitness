"use client";
import React, { useEffect, useState } from "react";

import Input from "../common/Input";
import { NewCategoryProps } from "@/app/lib";
import { NewCategoryText } from "@/app/constants";
import getHash from "@/app/utils/getHash";
import TextLayers from "../common/TextLayers";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

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
  const [previewLanguage, setPreviewLanguage] = useState<"en" | "ru" | "sk">(
    "en"
  );
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
      toDisplay: false,
    });
  const adminData = useSelector((state: RootState) => state.adminLogin.value);

  useEffect(() => {
    if (typeof window !== "undefined" && !adminData) {
      window.location.href = "/admin/login";
      return;
    }
  }, [adminData]);

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
      const convertedCategoryData = {
        sku: String(getHash()),
        name: newCategoryData.name,
        bgText: {
          en: newCategoryData.bgText_en,
          sk: newCategoryData.bgText_sk,
          ru: newCategoryData.bgText_ru,
        },
        title: {
          en: newCategoryData.title_en,
          sk: newCategoryData.title_sk,
          ru: newCategoryData.title_ru,
        },
        recomended: newCategoryData.recomended,
        toDisplay: newCategoryData.toDisplay,
      };

      try {
        fetch("/api/admin/category/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(convertedCategoryData),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Error: " + response.statusText);
            }
          })
          .then((data) => {
            console.log(data);
            console.log("Category created successfully");
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  function handleSetNewCategory(value: any, field: string) {
    setNewCategoryData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  return (
    <section className="NewCategorySection">
      <div className="wrapper">
        <div className="title">
          <h3>{t.title}</h3>
        </div>
        <div className="content">
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
          <div className="details">
            <div className="preview">
              <div className="textAndLanguages">
                <h3>{t.previewText}:</h3>
                <div className="languages">
                  <div
                    onClick={() => setPreviewLanguage("en")}
                    className={`en language ${
                      previewLanguage === "en" && "selected"
                    }`}
                  >
                    en
                  </div>
                  <div
                    onClick={() => setPreviewLanguage("sk")}
                    className={`sk language ${
                      previewLanguage === "sk" && "selected"
                    }`}
                  >
                    sk
                  </div>
                  <div
                    onClick={() => setPreviewLanguage("ru")}
                    className={`ru language ${
                      previewLanguage === "ru" && "selected"
                    }`}
                  >
                    ru
                  </div>
                </div>
              </div>
              <div className="previewContainer">
                {previewLanguage === "en" && (
                  <TextLayers
                    bgText={newCategoryData.bgText_en}
                    title={newCategoryData.title_en}
                  />
                )}
                {previewLanguage === "ru" && (
                  <TextLayers
                    bgText={newCategoryData.bgText_ru}
                    title={newCategoryData.title_ru}
                  />
                )}
                {previewLanguage === "sk" && (
                  <TextLayers
                    bgText={newCategoryData.bgText_sk}
                    title={newCategoryData.title_sk}
                  />
                )}
              </div>
            </div>
            <div className="buttonsContainer">
              <button onClick={addNewCategory}>
                {t.buttons.saveButton.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewCategory;
