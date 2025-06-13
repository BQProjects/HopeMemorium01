import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bg_5 from "../assets/bg_5.jpg";
import "./Enquiry.css";

const Enquiry = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div
      className="w-full h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url(${bg_5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Formhas been submited");
        }}
        style={{
          color: "rgba(205, 205, 205, 1)",
        }}
        className="flex flex-col justify-center items-center w-[55%] p-4 gap-6 container"
      >
        <h1
          className="text-lg font-semibold"
          style={{
            color: "rgba(205, 205, 205, 1)",
          }}
        >
          {t("enq_1")}
        </h1>
        <p className="text-xs text-center w-[70%] input_size">{t("enq_2")}</p>
        <div className="w-[80%] flex gap-3 items-center justify-between input_size">
          <div className="flex flex-col gap-1 w-[50%] ">
            <label>{t("enq_3")}</label>
            <input
              style={{
                backgroundColor: "rgba(205, 205, 205, 1)",
              }}
              className="outline-none border border-gray-300 w-full py-1.5 px-2 rounded-md text-gray-700"
              type="text"
              value={first}
              onChange={(e) => {
                setFirst(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-[50%] ">
            <label>{t("enq_4")}</label>
            <input
              style={{
                backgroundColor: "rgba(205, 205, 205, 1)",
              }}
              className="outline-none border border-gray-300 w-full py-1.5 px-2 rounded-md text-gray-700"
              type="text"
              value={last}
              onChange={(e) => {
                setLast(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-[80%] flex gap-3 items-center justify-between input_size">
          <div className="flex flex-col gap-1 w-[50%] ">
            <label>{t("enq_5")}</label>
            <input
              style={{
                backgroundColor: "rgba(205, 205, 205, 1)",
              }}
              className="outline-none border border-gray-300 w-full py-1.5 px-2 rounded-md text-gray-700"
              type="text"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-[50%] ">
            <label>{t("enq_6")}</label>
            <input
              style={{
                backgroundColor: "rgba(205, 205, 205, 1)",
              }}
              className="outline-none border border-gray-300 w-full py-1.5 px-2 rounded-md text-gray-700"
              type="text"
            />
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-1 input_size">
          <label>{t("enq_7")}</label>
          <textarea
            style={{
              backgroundColor: "rgba(205, 205, 205, 1)",
            }}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="h-24 w-full outline-none border border-gray-300 px-1 py-1 rounded-md text-gray-700"
            type="text"
            placeholder={t("enq_8")}
          />
        </div>
        <div className="flex gap-4 items-center justify-center input_size">
          <button
            onClick={() => navigate("/")}
            className="py-2 px-4 rounded-3xl cursor-pointer text-white border border-gray-400"
          >
            {t("enq_10")}
          </button>
          <button
            className="py-2 px-4 rounded-3xl cursor-pointer text-white border border-gray-400"
            type="submit"
          >
            {t("enq_9")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Enquiry;
