"use client";
import React, { useState } from "react";

import Input from "../common/Input";
import { NewProductProps } from "@/app/lib";
import { NewProductText } from "@/app/constants";
import getHash from "@/app/utils/getHash";
import TextLayers from "../common/TextLayers";
import { CldUploadWidget } from "next-cloudinary";
import Image from "../common/Image";

interface NewProductInputsProps {
  sku: any;
  name: string;
  categoryId: number;
  description_en: string;
  description_ru: string;
  description_sk: string;
  images: string[];
  newPrice: number;
  oldPrice: number;
  leftInStock: number;
  toDisplay: boolean;
}

interface CloudinaryResultProps {
  public_id: string;
}

function NewProduct({ locale }: NewProductProps) {
  const [cloudinaryResults, setCloudinaryResults] = useState<string>("");
  const t = NewProductText[locale] || NewProductText["en"];
  const [previewLanguage, setPreviewLanguage] = useState<"en" | "ru" | "sk">(
    "en"
  );
  const [newProductData, setNewProductData] = useState<NewProductInputsProps>({
    sku: String(getHash()),
    name: "",
    categoryId: 0,
    description_en: "",
    description_ru: "",
    description_sk: "",
    images: [],
    newPrice: 0.01,
    oldPrice: 0.01,
    leftInStock: 0,
    toDisplay: false,
  });

  function isNewCategoryDataValid() {
    return (
      newProductData.name !== "" &&
      newProductData.description_en !== "" &&
      newProductData.description_ru !== "" &&
      newProductData.description_sk !== "" &&
      newProductData.images.length > 0 &&
      newProductData.newPrice > 0 &&
      newProductData.oldPrice > 0 &&
      newProductData.leftInStock > 0 &&
      newProductData.toDisplay === true
    );
  }

  function addNewCategory() {
    if (isNewCategoryDataValid()) {
      const convertedCategoryData = {
        sku: String(getHash()),
        name: newProductData.name,
        bgText: {
          en: newProductData.description_en,
          sk: newProductData.description_sk,
          ru: newProductData.description_ru,
        },
        images: [newProductData.images[0]],
        newPrice: newProductData.newPrice,
        oldPrice: newProductData.oldPrice,
        leftInStock: newProductData.leftInStock,
        toDisplay: newProductData.toDisplay,
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
    setNewProductData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

    console.log(cloudinaryResults)

  return (
    <section className="NewCategorySection">
      <div className="wrapper">
        <div className="title">
          <h3>{t.title}</h3>
        </div>
        <div className="content">
          <div className="inputsContainer">
            <CldUploadWidget
              uploadPreset="woeoiuax"
              onUploadAdded={(result, widget) => {
                if (result.event !== "success") return;
                const info = result.info as CloudinaryResultProps;
                setCloudinaryResults(info.public_id);
              }}
            >
              {({ open }) => (
                <button className="uploadButton" onClick={() => open()}>
                  Upload
                </button>
              )}
            </CldUploadWidget>
            <Input
              placeholderText={t.inputs.name.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.name.field)
              }
              field={t.inputs.name.field}
              maxSymbols={20}
            />
            <Input
              placeholderText={t.inputs.description_en.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.description_en.field)
              }
              field={t.inputs.description_en.field}
              maxSymbols={45}
            />
            <Input
              placeholderText={t.inputs.description_ru.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.description_ru.field)
              }
              field={t.inputs.description_ru.field}
              maxSymbols={45}
            />
            <Input
              placeholderText={t.inputs.description_sk.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.description_sk.field)
              }
              field={t.inputs.description_sk.field}
              maxSymbols={45}
            />
            <Input
              placeholderText={t.inputs.newPrice.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.newPrice.field)
              }
              field={t.inputs.newPrice.field}
              maxSymbols={6}
            />
            <Input
              placeholderText={t.inputs.oldPrice.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.oldPrice.field)
              }
              field={t.inputs.oldPrice.field}
              maxSymbols={6}
            />
            <Input
              placeholderText={t.inputs.leftInStock.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.leftInStock.field)
              }
              field={t.inputs.leftInStock.field}
              maxSymbols={6}
            />
            <div className="booleanInputs">
              <div className="booleanInput">
                <label>{t.inputs.toDisplay.placeholder}</label>
                <input
                  type="checkbox"
                  value={newProductData.toDisplay ? "true" : "false"}
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
               {cloudinaryResults && <Image image={cloudinaryResults} alt={"image"} />}
                {/* {previewLanguage === "en" && (
                  <TextLayers
                    bgText={newProductData.bgText_en}
                    title={newProductData.title_en}
                  />
                )}
                {previewLanguage === "ru" && (
                  <TextLayers
                    bgText={newProductData.bgText_ru}
                    title={newProductData.title_ru}
                  />
                )}
                {previewLanguage === "sk" && (
                  <TextLayers
                    bgText={newProductData.bgText_sk}
                    title={newProductData.title_sk}
                  />
                )} */}
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

export default NewProduct;
