import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { CopyToClipboardText } from "../constants";

const CopyToClipboard = ({
  text,
  locale,
}: {
  text: string;
  locale: "sk" | "en" | "ru";
}) => {
  const t = CopyToClipboardText[locale];
  const notifyAddedToCart = () => {
    toast.success(t, {
      position: "bottom-center",
      autoClose: 1300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  };

  const handleClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        notifyAddedToCart();
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <>
      <ToastContainer />
      <div
        onClick={handleClick}
        style={{
          cursor: "pointer",
          padding: "3px",
          borderBottom: "1px solid white",
        }}
      >
        {text}
      </div>
    </>
  );
};

export default CopyToClipboard;
