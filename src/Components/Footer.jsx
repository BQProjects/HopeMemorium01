import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Subscribe from "./Subscribe";
import logo from "../assets/logo.jpeg";
import "./Footer.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-[50vh] container-f  "
      style={{
        backgroundColor: "rgba(61, 42, 68, 1)",
        color: "white",
      }}
    >
      <div className="flex items-start justify-between px-8 py-2 pt-7 text-sm foot_8">
        <div className="w-[35%] ml-7 flex flex-col items-start justify-start gap-3 foot_3 ">
          <div className="flex items-center justify-start gap-2">
            <img src={logo} alt="Nothing" className="h-7 w-7 rounded-[50%]" />
            <p>{t("title")}</p>
          </div>

          <p>{t("footer_para")}</p>
        </div>
        <div className="footer_part_2">
          <h2>{t("title")}</h2>
          <div className="footer_list mt-3">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t("nav1")}
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/about")}>
              {" "}
              {t("nav2")}
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/san")}>
              {t("nav3")}
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/maps")}>
              {t("nav4")}
            </p>
          </div>
        </div>
        <div className="footer_part_2">
          <h2>{t("legal")}</h2>
          <div className="footer_list  mt-3">
            <p>{t("privacy")}</p>
            <p>{t("terms")}</p>
          </div>
        </div>
        <div className="footer_part_2 mr-14 foot_5">
          <h2>{t("contact")}</h2>
          <div className="footer_list  mt-3">
            <p className="phone_no flex items-center justify-start gap-4">
              {" "}
              <LocalPhoneOutlinedIcon className="icon_1" /> +91 6292222221
            </p>
            <p className="email_id  flex items-center justify-start gap-5 mt-1">
              <EmailOutlinedIcon className="icon_1" /> Email Adress
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between px-16 mt-15 foot_4 ">
        <div>
          <Subscribe />
        </div>
        <div>
          {" "}
          <button
            onClick={() => navigate("/journey")}
            className="btn_foo text-black mt-1 "
          >
            • {t("enquiry_button")}
          </button>
        </div>
      </div>
      <div className="text-xs w-full flex items-end justify-center mt-14">
        {t("copyright")}
      </div>
    </div>
  );
};

export default Footer;
