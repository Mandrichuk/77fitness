"use client";
import React, { useState, useEffect } from "react";

import Input from "../common/Input";
import { NewProductProps } from "@/app/lib";
import { adminHash, CLOUDINARY_FOLDER, NewProductText } from "@/app/constants";
import getHash from "@/app/utils/getHash";
import TextLayers from "../common/TextLayers";
import { CldUploadWidget } from "next-cloudinary";
import Image from "../common/Image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface NewProductInputsProps {
  sku: any;
  name: string;
  categoryId: any;
  description_en: string;
  description_ru: string;
  description_sk: string;
  title_en: string;
  title_ru: string;
  title_sk: string;
  images: string[];
  newPrice: number;
  oldPrice: number;
  leftInStock: number;
  toDisplay: boolean;
}

interface ProductProps {
  bgText: {
    id: number;
    en: string;
    ru: string;
    sk: string;
  };
  categoryBgTextId: number;
  categoryTitleId: number;
  id: number;
  name: string;
  recommended: boolean;
  sku: string;
  title: {
    id: number;
    en: string;
    ru: string;
    sk: string;
  };
  toDisplay: boolean;
}

interface CloudinaryResultProps {
  public_id: string;
}

function NewProduct({ locale }: NewProductProps) {
  const [categoriesData, setCategoriesData] = useState<ProductProps[]>([]);
  const [cloudinaryResults, setCloudinaryResults] = useState<string>("");
  const t = NewProductText[locale] || NewProductText["en"];
  const [previewLanguage, setPreviewLanguage] = useState<"en" | "ru" | "sk">(
    "en"
  );
  const [newProductData, setNewProductData] = useState<NewProductInputsProps>({
    sku: String(getHash()),
    name: "",
    categoryId: null,
    description_en: "",
    description_ru: "",
    description_sk: "",
    title_en: "",
    title_ru: "",
    title_sk: "",
    images: [],
    newPrice: 0.01,
    oldPrice: 0.01,
    leftInStock: 0,
    toDisplay: false,
  });
  const adminData = useSelector((state: RootState) => state.adminLogin.value);

  useEffect(() => {
    if (typeof window !== "undefined" && !adminData) {
      window.location.href = `/${adminHash}/admin/login`;
      return;
    }
  }, [adminData]);
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
      newProductData.categoryId !== 0
    );
  }

  console.log(newProductData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/admin/category");
        const jsonData = await response.json();
        setCategoriesData(jsonData.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function addNewCategory() {
    if (isNewCategoryDataValid()) {
      const convertedProductData = {
        sku: String(getHash()),
        name: newProductData.name,
        categoryId: newProductData.categoryId.id,
        description: {
          en: newProductData.description_en,
          sk: newProductData.description_sk,
          ru: newProductData.description_ru,
        },
        title: {
          en: newProductData.title_en,
          sk: newProductData.title_sk,
          ru: newProductData.title_ru,
        },
        imageUrls: [newProductData.images[0]],
        newPrice: Number(newProductData.newPrice),
        oldPrice: Number(newProductData.oldPrice),
        leftInStock: Number(newProductData.leftInStock),
        toDisplay: newProductData.toDisplay,
      };
      console.log(convertedProductData);

      try {
        fetch("/api/admin/product/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(convertedProductData),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Error: " + response.statusText);
            }
          })
          .then((data) => {
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

  function setImagePublicId(public_id: string) {
    const parts = public_id.split("/");
    const result = parts.slice(parts.length - 1).join("/");

    setNewProductData((prevData) => ({
      ...prevData,
      images: [result],
    }));
  }

  return (
    <section className="NewProductSection">
      <div className="wrapper">
        <div className="title">
          <h3>{t.title}</h3>
        </div>
        <div className="content">
          <div className="inputsContainer">
            <h4 className="imageText">{"Add image"}</h4>
            <CldUploadWidget
              options={{ sources: ["local", "url"], maxFiles: 5 }}
              uploadPreset="woeoiuax"
              onUpload={(result, widget) => {
                if (result.event !== "success") return;
                const info = result.info as CloudinaryResultProps;
                setImagePublicId(info.public_id);
              }}
            >
              {({ open }) => <button onClick={() => open()}>Upload</button>}
            </CldUploadWidget>
            <h4 className="chooseCategoryText">{"Choose category"}</h4>
            <div className="chooseCategory">
              {categoriesData &&
                categoriesData.map((category) => (
                  <div
                    key={category.id}
                    className={`category ${
                      newProductData.categoryId &&
                      newProductData.categoryId.id === category.id &&
                      "chosen"
                    }`}
                    onClick={() =>
                      setNewProductData((prevData) => ({
                        ...prevData,
                        categoryId: { ...category },
                      }))
                    }
                  >
                    {locale === "en" && category.title.en}{" "}
                    {locale === "ru" && category.title.ru}{" "}
                    {locale === "sk" && category.title.sk}
                  </div>
                ))}
            </div>
            <div className="inputsContainer">
              <label className="inputLabel">{t.inputs.name.placeholder}</label>
              <Input
                placeholderText={t.inputs.name.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.name.field)
                }
                field={t.inputs.name.field}
                maxSymbols={30}
              />
              <label className="inputLabel">
                {t.inputs.title_en.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.title_en.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.title_en.field)
                }
                field={t.inputs.title_en.field}
                maxSymbols={70}
              />
              <label className="inputLabel">
                {t.inputs.title_ru.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.title_ru.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.title_ru.field)
                }
                field={t.inputs.title_ru.field}
                maxSymbols={70}
              />
              <label className="inputLabel">
                {t.inputs.title_sk.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.title_sk.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.title_sk.field)
                }
                field={t.inputs.title_sk.field}
                maxSymbols={70}
              />
              <label className="inputLabel">
                {t.inputs.title_en.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.description_en.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.description_en.field)
                }
                field={t.inputs.description_en.field}
                maxSymbols={70}
              />
              <label className="inputLabel">
                {t.inputs.title_ru.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.description_ru.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.description_ru.field)
                }
                field={t.inputs.description_ru.field}
                maxSymbols={70}
              />
              <label className="inputLabel">
                {t.inputs.title_sk.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.description_sk.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.description_sk.field)
                }
                field={t.inputs.description_sk.field}
                maxSymbols={70}
              />
              <label className="inputLabel">
                {t.inputs.newPrice.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.newPrice.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.newPrice.field)
                }
                field={t.inputs.newPrice.field}
                maxSymbols={6}
              />
              <label className="inputLabel">
                {t.inputs.oldPrice.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.oldPrice.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.oldPrice.field)
                }
                field={t.inputs.oldPrice.field}
                maxSymbols={6}
              />
              <label className="inputLabel">
                {t.inputs.leftInStock.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.leftInStock.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.leftInStock.field)
                }
                field={t.inputs.leftInStock.field}
                maxSymbols={6}
              />
            </div>
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
                <div className={`product`}>
                  <div className="imageBox">
                    <div className="imageContainer">
                      <Image
                        image={`shop/${newProductData.images[0]}`}
                        alt={"image"}
                        imgQuality={100}
                        isShopProduct={true}
                      />
                    </div>
                  </div>
                  <div className="details">
                    <p className="title">
                      {newProductData.categoryId &&
                        newProductData?.categoryId.title[previewLanguage]}
                    </p>
                    <p className="name">
                      {" "}
                      {previewLanguage === "en" && newProductData.title_en}
                      {previewLanguage === "sk" && newProductData.title_sk}
                      {previewLanguage === "ru" && newProductData.title_ru}
                    </p>
                    <p className="description">
                      {previewLanguage === "en" &&
                        newProductData.description_en}
                      {previewLanguage === "sk" &&
                        newProductData.description_sk}
                      {previewLanguage === "ru" &&
                        newProductData.description_ru}
                    </p>
                    <div className="cart">
                      <div className="prices">
                        <p className="newPrice">€{newProductData.newPrice}</p>
                        {newProductData.oldPrice !== 0.01 && (
                          <p className="oldPrice">€{newProductData.oldPrice}</p>
                        )}
                      </div>
                      <div className="buttonContainer">
                        <button
                          onClick={() => {
                            // addOneProduct(product.sku);
                          }}
                          className="button"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
