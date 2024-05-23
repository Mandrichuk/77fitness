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
  images: ImageProductProps[];
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
      categoryId: 1,
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
      window.location.href = "/admin/login";
      return;
    }
  }, [adminData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/admin/product/update/${product_sku}`
        );
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);

          console.log(responseData.categoryId);
          setEditedProductData({
            sku: responseData?.sku,
            name: responseData?.name,
            categoryId: responseData?.categoryId,
            description_en: responseData?.description.en,
            description_ru: responseData?.description.ru,
            description_sk: responseData?.description.sk,
            images: [responseData?.images[0]],
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
      editedProductData.categoryId !== 0
    );
  }

  const notifyAddedToCart = () => {
    toast.success("t.notify", {
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
        sku: editedProductData.sku,
        name: editedProductData.name,
        categoryId: Number(editedProductData.categoryId),
        description: {
          en: editedProductData.description_en,
          sk: editedProductData.description_sk,
          ru: editedProductData.description_ru,
        },
        imageUrls: [editedProductData.images[0].url],
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
            window.location.href = "/admin/product/edit";
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
      images: [
        { id: editedProductData.images[0].id, url: result, productId: 0 },
      ],
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
            <Input
              placeholderText={t.inputs.name.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.name.field)
              }
              field={t.inputs.name.field}
              maxSymbols={20}
              initialValue={editedProductData.name}
            />
            <Input
              placeholderText={t.inputs.description_en.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.description_en.field)
              }
              field={t.inputs.description_en.field}
              maxSymbols={70}
              initialValue={editedProductData.description_en}
            />
            <Input
              placeholderText={t.inputs.description_ru.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.description_ru.field)
              }
              field={t.inputs.description_ru.field}
              maxSymbols={70}
              initialValue={editedProductData.description_ru}
            />
            <Input
              placeholderText={t.inputs.description_sk.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.description_sk.field)
              }
              field={t.inputs.description_sk.field}
              maxSymbols={70}
              initialValue={editedProductData.description_sk}
            />
            <Input
              placeholderText={t.inputs.newPrice.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.newPrice.field)
              }
              field={t.inputs.newPrice.field}
              maxSymbols={6}
              initialValue={String(editedProductData.newPrice)}
            />
            <Input
              placeholderText={t.inputs.oldPrice.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.oldPrice.field)
              }
              field={t.inputs.oldPrice.field}
              maxSymbols={6}
              initialValue={String(editedProductData.oldPrice)}
            />
            <Input
              placeholderText={t.inputs.leftInStock.placeholder}
              getValue={(value) =>
                handleSetNewCategory(value, t.inputs.leftInStock.field)
              }
              field={t.inputs.leftInStock.field}
              maxSymbols={6}
              initialValue={String(editedProductData.leftInStock)}
            />
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
                        image={`shop/${editedProductData.images[0].url}`}
                        alt={"image"}
                        imgQuality={100}
                        isShopProduct={true}
                      />
                    </div>
                  </div>
                  <div className="details">
                    <p className="title">
                      {/* {editedProductData.categoryId &&
                        editedProductData?.categoryId.title[previewLanguage]} */}
                    </p>
                    <p className="name">{editedProductData.name}</p>
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
                          "Add"
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
