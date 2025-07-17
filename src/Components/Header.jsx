import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, scale } from "framer-motion";
import PulsatingDot from "./PulsatingDot.jsx";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [openMenu, setMenu] = useState(false);
  function useWindowSize() {
    const [size, setSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () =>
        setSize({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
  }

  const { width } = useWindowSize();
  const isMobile = width < 800;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng; // Set <html lang="he"> dynamically
  };

  return (
    <div className="sticky_container">
      <div
        className={`flex gap-1 items-center justify-center absolute top-10 right-[9%] text-xs cursor-pointer ${
          window.location.pathname === "/" || window.location.pathname === ""
            ? "text-white"
            : "text-black"
        }`}
      >
        <a onClick={() => changeLanguage("en")}>English</a>
        <span>|</span>
        <a onClick={() => changeLanguage("ita")}>Italiana</a>
        <span>|</span>
        <a onClick={() => changeLanguage("spa")}>Española</a>
      </div>
      {openMenu && (
        <div
          className="w-full h-screen fixed top-0 inset-0 "
          style={{
            backgroundColor: "rgba(61, 42, 68, 1)",
          }}
        >
          <div className="w-full flex items-center justify-between mt-8 text-white">
            {" "}
            <div className="part1">
              <img src={logo} alt="Nothing" />
              <p>{t("title")}</p>
            </div>
            <div className="px-8" onClick={() => setMenu(false)}>
              X
            </div>{" "}
          </div>

          <div className="flex flex-col text-white mt-10 w-full items-center gap-6 text-sm ">
            <a
              onClick={() => {
                navigate("/");
                setMenu(false);
              }}
            >
              {t("nav1")}
            </a>
            <a
              onClick={() => {
                navigate("/about");
                setMenu(false);
              }}
            >
              {t("nav2")}
            </a>
            <a
              onClick={() => {
                navigate("/san");
                setMenu(false);
              }}
            >
              {t("nav3")}
            </a>
            <a
              onClick={() => {
                navigate("/maps");
                setMenu(false);
              }}
            >
              {t("nav4")}
            </a>
            <a
              onClick={() => {
                navigate("/participate");
                setMenu(false);
              }}
            >
              {" "}
              {t("nav5")}
            </a>
            <a
              onClick={() => {
                navigate("/journey");
                setMenu(false);
              }}
            >
              {t("nav6")}
            </a>
            <button
              onClick={() => {
                navigate("/enquiry");
                setMenu(false);
              }}
              className="btn2 text-black"
            >
              • {t("enquiry_button")}
            </button>
          </div>
        </div>
      )}
      <div className="conatiner">
        <div className="part1">
          <img src={logo} alt="Nothing" />
          <p>{t("title")}</p>
        </div>
        <div className="part2">
          <a
            className=" py-1 hover:border-b hover:border-b-white "
            onClick={() => navigate("/")}
          >
            {t("nav1")}
          </a>
          <a
            className=" py-1 hover:border-b hover:border-b-white "
            onClick={() => navigate("/about")}
          >
            {t("nav2")}
          </a>
          <a
            className=" py-1 hover:border-b hover:border-b-white "
            onClick={() => navigate("/san")}
          >
            {t("nav3")}
          </a>
          <a
            className=" py-1 hover:border-b hover:border-b-white "
            onClick={() => navigate("/maps")}
          >
            {t("nav4")}
          </a>
          <a
            className=" py-1 hover:border-b hover:border-b-white "
            onClick={() => navigate("/participate")}
          >
            {" "}
            {t("nav5")}
          </a>
          <a
            className=" py-1 hover:border-b hover:border-b-white "
            onClick={() => navigate("/journey")}
          >
            {t("nav6")}
          </a>
        </div>
        <div>
          <button
            onClick={() => navigate("/enquiry")}
            className="btn z-20 text-black enquiry2 flex items-center justify-center gap-2"
          >
            <PulsatingDot /> {t("enquiry_button")}
          </button>
          <button
            onClick={() => navigate("/enquiry")}
            className="btn z-20 text-black enquiry1 flex items-center justify-center gap-2 px-5"
          >
            <PulsatingDot /> {t("enquiry")}
          </button>
          {isMobile && (
            <div className="px-6" onClick={() => setMenu(true)}>
              <MenuIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
