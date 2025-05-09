import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="sticky_container">
      <div className="conatiner">
        <div className="part1">
          <img src={logo} alt="Nothing" />
          <p>{t("title")}</p>
        </div>
        <div className="part2">
          <a onClick={() => navigate("/")}>{t("nav1")}</a>
          <a onClick={() => navigate("/about")}>{t("nav2")}</a>
          <a onClick={() => navigate("/san")}>{t("nav3")}</a>
          <a onClick={() => navigate("/maps")}>{t("nav4")}</a>
          <a onClick={() => navigate("/participate")}> {t("nav5")}</a>
          <a onClick={() => navigate("/journey")}>{t("nav6")}</a>
        </div>
        <div>
          <button
            onClick={() => navigate("/journey")}
            className="btn z-20 text-black"
          >
            • {t("enquiry_button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
