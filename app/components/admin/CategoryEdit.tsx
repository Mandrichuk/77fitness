"use client";
import React, { useEffect, useState } from "react";

import Input from "../common/Input";
import { EditCategoryProps } from "@/app/lib";
import { EditCategoryText } from "@/app/constants";
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

function NewCategory({ locale, category_sku }: EditCategoryProps) {
  const t = EditCategoryText[locale] || EditCategoryText["en"];
  const [previewLanguage, setPreviewLanguage] = useState<"en" | "ru" | "sk">(
    "en"
  );
  const [data, setData] = useState<any>(null);
  const [editedCategoryData, setEditedCategoryData] =
    useState<NewCategoryInputsProps>({
      sku: data?.sku,
      name: data?.name,
      bgText_en: data?.bgText.en,
      bgText_ru: data?.bgText.ru,
      bgText_sk: data?.bgText.sk,
      title_en: data?.title.en,
      title_ru: data?.title.ru,
      title_sk: data?.title.sk,
      recomended: data?.recomended,
      toDisplay: data?.toDisplay,
    });

  const adminData = useSelector((state: RootState) => state.adminLogin.value);

  useEffect(() => {
    if (typeof window !== "undefined" && !adminData) {
      window.location.href = "/admin/login";
      return;
    }
  }, [adminData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/admin/category/update/${category_sku}`
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setEditedCategoryData({
            sku: String(getHash()),
            name: data?.name,
            bgText_en: data?.bgText.en,
            bgText_ru: data?.bgText.ru,
            bgText_sk: data?.bgText.sk,
            title_en: data?.title.en,
            title_ru: data?.title.ru,
            title_sk: data?.title.sk,
            recomended: data?.recomended,
            toDisplay: data?.toDisplay,
          });
        } else {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function isNewCategoryDataValid() {
    return (
      editedCategoryData.name !== "" &&
      editedCategoryData.bgText_en !== "" &&
      editedCategoryData.bgText_ru !== "" &&
      editedCategoryData.bgText_sk !== "" &&
      editedCategoryData.title_en !== "" &&
      editedCategoryData.title_ru !== "" &&
      editedCategoryData.title_sk !== "" &&
      editedCategoryData.sku !== ""
    );
  }

  function editCategory() {
    if (isNewCategoryDataValid()) {
      const convertedCategoryData = {
        sku: data.sku,
        name: editedCategoryData.name,
        bgText: {
          en: editedCategoryData.bgText_en,
          sk: editedCategoryData.bgText_sk,
          ru: editedCategoryData.bgText_ru,
        },
        title: {
          en: editedCategoryData.title_en,
          sk: editedCategoryData.title_sk,
          ru: editedCategoryData.title_ru,
        },
        recomended: editedCategoryData.recomended,
        toDisplay: editedCategoryData.toDisplay,
      };

      try {
        fetch(`/api/admin/category/update/${category_sku}`, {
          method: "PUT",
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
            window.location.href = "/admin/category/edit";
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
    setEditedCategoryData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  if (!data) {
    return (
      <div className="flex flex-row items-center justify-center h-[400px]">
        <div className="loading" />
      </div>
    );
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
              initialValue={data.name}
            />
            <Input
              placeholderText={t.inputs.bgText_en.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.bgText_en.field)
              }
              field={t.inputs.bgText_en.field}
              maxSymbols={12}
              initialValue={data.bgText.en}
            />
            <Input
              placeholderText={t.inputs.bgText_ru.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.bgText_ru.field)
              }
              field={t.inputs.bgText_ru.field}
              maxSymbols={12}
              initialValue={data.bgText.ru}
            />
            <Input
              placeholderText={t.inputs.bgText_sk.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.bgText_sk.field)
              }
              field={t.inputs.bgText_sk.field}
              maxSymbols={12}
              initialValue={data.bgText.sk}
            />
            <Input
              placeholderText={t.inputs.title_en.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.title_en.field)
              }
              field={t.inputs.title_en.field}
              maxSymbols={15}
              initialValue={data.title.en}
            />
            <Input
              placeholderText={t.inputs.title_ru.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.title_ru.field)
              }
              field={t.inputs.title_ru.field}
              maxSymbols={15}
              initialValue={data.title.ru}
            />
            <Input
              placeholderText={t.inputs.title_sk.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.title_sk.field)
              }
              field={t.inputs.title_sk.field}
              maxSymbols={15}
              initialValue={data.title.sk}
            />
            <div className="booleanInputs">
              <div className="booleanInput">
                <label>{t.inputs.recomended.placeholder}</label>
                <input
                  type="checkbox"
                  value={data.recomended ? "true" : "false"}
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
                  value={data.toDisplay ? "true" : "false"}
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
                {/* {previewLanguage === "en" && (
                  <TextLayers
                    bgText={editedCategoryData.bgText_en}
                    title={editedCategoryData.title_en}
                  />
                )}
                {previewLanguage === "ru" && (
                  <TextLayers
                    bgText={editedCategoryData.bgText_ru}
                    title={editedCategoryData.title_ru}
                  />
                )}
                {previewLanguage === "sk" && (
                  <TextLayers
                    bgText={editedCategoryData.bgText_sk}
                    title={editedCategoryData.title_sk}
                  />
                )} */}
              </div>
            </div>
            <div className="buttonsContainer">
              <button onClick={editCategory}>
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
