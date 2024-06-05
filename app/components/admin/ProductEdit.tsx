"use client";
import React, { useState, useEffect } from "react";

import Input from "../common/Input";
import { EditProductProps } from "@/app/lib";
import { CLOUDINARY_FOLDER, NewProductText } from "@/app/constants";
import getHash from "@/app/utils/getHash";
import TextLayers from "../common/TextLayers";
import { CldUploadWidget } from "next-cloudinary";
import Image from "../common/Image";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

import { adminHash } from "@/app/constants";

interface ImageProductProps {
  id: number;
  url: string;
  productId: number;
}
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
  images: string[];
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

function NewProduct({ locale, product_sku }: EditProductProps) {
  const [categoriesData, setCategoriesData] = useState<ProductProps[]>([]);
  const [cloudinaryResults, setCloudinaryResults] = useState<string>("");
  const t = NewProductText[locale] || NewProductText["en"];
  const [previewLanguage, setPreviewLanguage] = useState<"en" | "ru" | "sk">(
    "en"
  );
  const [data, setData] = useState<any>(null);
  const [editedProductData, setEditedProductData] =
    useState<NewProductInputsProps>({
      sku: String(getHash()),
      name: "",
      categoryId: {},
      title_en: "",
      title_ru: "",
      title_sk: "",
      description_en: "",
      description_ru: "",
      description_sk: "",
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/admin/product/update/${product_sku}`
        );
        if (response.ok) {
          const responseData = await response.json();

          setData(responseData);

          setEditedProductData({
            sku: responseData?.sku,
            name: responseData?.name,
            categoryId: responseData?.categoryId,
            title_en: responseData?.title.en,
            title_ru: responseData?.title.ru,
            title_sk: responseData?.title.sk,
            description_en: responseData?.description.en,
            description_ru: responseData?.description.ru,
            description_sk: responseData?.description.sk,
            images: [responseData?.images[responseData?.images.length - 1].url],
            newPrice: responseData?.newPrice,
            oldPrice: responseData?.oldPrice,
            leftInStock: responseData?.leftInStock,
            toDisplay: responseData?.toDisplay,
          });
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function isNewCategoryDataValid() {
    return (
      editedProductData.name !== "" &&
      editedProductData.description_en !== "" &&
      editedProductData.description_ru !== "" &&
      editedProductData.description_sk !== "" &&
      editedProductData.images.length > 0 &&
      editedProductData.newPrice > 0 &&
      editedProductData.oldPrice > 0 &&
      editedProductData.leftInStock > 0 &&
      editedProductData.categoryId !== 0 &&
      editedProductData.title_en !== "" &&
      editedProductData.title_sk !== "" &&
      editedProductData.title_ru !== ""
    );
  }

  const notifyAddedToCart = () => {
    toast.success("Added", {
      position: "top-right",
      autoClose: 1300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  };

  function addNewCategory() {
    if (isNewCategoryDataValid()) {
      const convertedProductData = {
        sku: String(getHash()),
        name: editedProductData.name,
        categoryId: editedProductData.categoryId.id,
        description: {
          en: editedProductData.description_en,
          sk: editedProductData.description_sk,
          ru: editedProductData.description_ru,
        },
        title: {
          en: editedProductData.title_en,
          sk: editedProductData.title_sk,
          ru: editedProductData.title_ru,
        },
        imageUrls: [editedProductData.images[0]],
        newPrice: Number(editedProductData.newPrice),
        oldPrice: Number(editedProductData.oldPrice),
        leftInStock: Number(editedProductData.leftInStock),
        toDisplay: editedProductData.toDisplay,
      };

      try {
        fetch(`/api/admin/product/update/${product_sku}`, {
          method: "PUT",
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
            console.log(data);
            console.log("Category created successfully");
            notifyAddedToCart();
            window.location.href = `/${adminHash}/admin/product/edit`;
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
    setEditedProductData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  function setImagePublicId(public_id: string) {
    const parts = public_id.split("/");
    const result = parts.slice(parts.length - 1).join("/");

    setEditedProductData((prevData) => ({
      ...prevData,
      images: [result],
    }));
  }

  if (!data) {
    return (
      <div className="flex flex-row items-center justify-center h-[400px]">
        <div className="loading" />
      </div>
    );
  }

  console.log(editedProductData);

  return (
    <section className="NewProductSection">
      <div className="wrapper">
        <div className="title">
          <h3>{t.titleEdit}</h3>
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
                      editedProductData.categoryId &&
                      editedProductData.categoryId.id === category.id &&
                      "chosen"
                    }`}
                    onClick={() =>
                      setEditedProductData((prevData) => ({
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
                initialValue={data.name}
                field={t.inputs.name.field}
                maxSymbols={30}
              />
              <label className="inputLabel">
                {t.inputs.description_en.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.description_en.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.description_en.field)
                }
                initialValue={data.description.en}
                field={t.inputs.description_en.field}
                maxSymbols={70}
              />
              <label className="inputLabel">
                {t.inputs.description_ru.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.description_ru.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.description_ru.field)
                }
                initialValue={data.description.ru}
                field={t.inputs.description_ru.field}
                maxSymbols={70}
              />
              <label className="inputLabel">
                {t.inputs.description_sk.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.description_sk.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.description_sk.field)
                }
                initialValue={data.description.sk}
                field={t.inputs.description_sk.field}
                maxSymbols={70}
              />
              <label className="inputLabel">
                {t.inputs.title_en.placeholder}
              </label>
              <Input
                placeholderText={t.inputs.title_en.placeholder}
                getValue={(value) =>
                  handleSetNewCategory(value, t.inputs.title_en.field)
                }
                initialValue={data.title.en}
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
                initialValue={data.title.ru}
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
                initialValue={data.title.sk}
                field={t.inputs.title_sk.field}
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
                initialValue={data.newPrice}
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
                initialValue={data.oldPrice}
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
                initialValue={data.leftInStock}
                field={t.inputs.leftInStock.field}
                maxSymbols={6}
              />
            </div>
            <div className="booleanInputs">
              <div className="booleanInput">
                <label>{t.inputs.toDisplay.placeholder}</label>
                <input
                  type="checkbox"
                  value={editedProductData.toDisplay ? "true" : "false"}
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
                        image={`shop/${editedProductData.images[0]}`}
                        alt={"image"}
                        imgQuality={100}
                        isShopProduct={true}
                      />
                    </div>
                  </div>
                  <div className="details">
                    <p className="category">
                      {editedProductData.categoryId.title &&
                        editedProductData?.categoryId.title[previewLanguage]}
                    </p>
                    <p className="title">
                      {previewLanguage === "en" && editedProductData.title_en}
                      {previewLanguage === "sk" && editedProductData.title_sk}
                      {previewLanguage === "ru" && editedProductData.title_ru}
                    </p>
                    <p className="description">
                      {previewLanguage === "en" &&
                        editedProductData.description_en}
                      {previewLanguage === "sk" &&
                        editedProductData.description_sk}
                      {previewLanguage === "ru" &&
                        editedProductData.description_ru}
                    </p>
                    <div className="cart">
                      <div className="prices">
                        <p className="newPrice">
                          €{editedProductData.newPrice}
                        </p>
                        <p className="oldPrice">
                          €{editedProductData.oldPrice}
                        </p>
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
                {t.buttons.editButton.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewProduct;
