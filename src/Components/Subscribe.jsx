import React from "react";
import "./Subscribe.css";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <div className="subscribe">
      <input
        type="text"
        placeholder="Enter your Email Address"
        className="text-black placeholder:text-gray-500"
      />
      <button className=" shadow-lg">{t("subscribe")}</button>
    </div>
  );
};

export default Subscribe;
