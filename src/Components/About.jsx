import React from "react";
import Wrapper from "./Wrapper";
import "./About.css";
import { useTranslation } from "react-i18next";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import about6 from "../assets/about6.png";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Subscribe from "./Subscribe";
import InViewTopTransition from "./InViewTopTransition";
import InViewFadeSlide from "./InViewFadeSlide";
import InViewOpacitySlide from "./InViewOpacitySlide";

const About = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="about">
        <InViewTopTransition>
          <div className="w-full flex items-center justify-center gap-1 mt-56 flex-col title ">
            <h1 className="text-[32px] font-bold">{t("title_capital")}</h1>
            <h2 className="text-[43px] w-[85%] font-bold text-center">
              {t("home_heading_2")}
            </h2>
          </div>
        </InViewTopTransition>
        <InViewTopTransition delay={0.5}>
          <div
            className="w-[87%] p-4 rounded-3xl mt-20"
            style={{
              backgroundColor: "rgba(61, 42, 68, 1)",
            }}
          >
            <div className="about_vision text-white mt-3">
              <p> • {t("about_h1")}</p>
            </div>
            <div className="mt-4">
              <p className="text-white w-full px-[3%] ">
                {t("about_p1")}
                <span>{t("about_p2")}</span>
                {t("about_p3")}
              </p>
              <br />
              <p className="text-white w-full px-[3%] pb-3 ">
                {t("about_p4")}
                <span>{t("about_p5")}</span>
                {t("about_p6")}
              </p>
            </div>
          </div>
        </InViewTopTransition>

        <InViewFadeSlide>
          <div className="about_part_3 mt-36">
            <img
              src={about2}
              alt=""
              className="w-[30%] h-full object-cover rounded-4xl"
            />
            <img
              src={about3}
              alt=""
              className="w-[70%] h-full object-cover rounded-4xl"
            />
          </div>
        </InViewFadeSlide>
        <InViewOpacitySlide>
          <div className="about_part_2 mt-36">
            <div className="about_2_1">
              <div className="about_vision px-2">
                <p> • {t("about_h2")}</p>
              </div>
            </div>
            <div className="about_2_2">
              <div className="about_2_table py-9">
                <h2>{t("about_h3")}</h2>
                <p>{t("about_p7")}</p>
              </div>
              <div className="about_2_table py-9">
                <h2>{t("about_h4")}</h2>
                <p>{t("about_p8")}</p>
              </div>
              <div className="about_2_table py-9">
                <h2>{t("about_h5")}</h2>
                <p>{t("about_p9")}</p>
              </div>
            </div>
          </div>
        </InViewOpacitySlide>

        <InViewTopTransition duration={1}>
          <div className="about_part_6">
            <div className="about_part_6_1">
              <div className="about_vision">
                <p> • {t("about_h6")}</p>
              </div>
            </div>
            <div className="about_6_2">
              <div className="about_6_same">
                <div className="about_6_3">
                  <h3 className="font-bold">01</h3>
                  <h3 className="font-bold">{t("about_h7")}</h3>
                </div>
                <div className="about_6_4">
                  <h3>
                    {t("about_p10")} <span>{t("about_p11")} </span>
                    {t("about_p12")}
                    <span>{t("about_p13")} </span>
                    {t("about_p14")}
                    <span>{t("about_p15")} </span>
                    {t("about_p16")}{" "}
                  </h3>
                  <p>
                    {t("about_p17")}
                    <span>{t("about_p18")} </span>
                    {t("about_p19")}{" "}
                  </p>
                </div>
              </div>
              <div className="about_6_same">
                <div className="about_6_3">
                  <h3 className="font-bold">02</h3>
                  <h3 className="font-bold">{t("about_h8")}</h3>
                </div>
                <div className="about_6_4">
                  <h3>
                    {t("about_p20")}
                    <span>{t("about_p21")} </span>
                    {t("about_p22")}{" "}
                  </h3>
                  <div className="flex items-start gap-2">
                    <div>• </div>
                    <div>
                      <span>{t("about_p23")}</span>
                      {t("about_p24")}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div>• </div>
                    <div>
                      <span>{t("about_p25")}</span>
                      {t("about_p26")}
                    </div>
                  </div>
                  <h3>
                    {t("about_p27")} <span>{t("about_p28")}</span>
                    {t("about_p29")}
                  </h3>
                </div>
              </div>
              <div className="about_6_same">
                <div className="about_6_3">
                  <h3 className="font-bold">03</h3>
                  <h3 className="font-bold">{t("about_h9")}</h3>
                </div>
                <div className="about_6_4">
                  <h3>
                    {t("about_p30")}
                    <span>{t("about_p31")}</span>
                    {t("about_p32")}
                    <span>{t("about_p33")}</span>
                    {t("about_p34")}
                    <span>{t("about_p35")}</span>
                    {t("about_p36")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </InViewTopTransition>
        <InViewFadeSlide direction={"right"}>
          <div className="home_part_3_for_about mt-20 mb-16">
            <p>{t("about_subscribe")}</p>
            <Subscribe />
          </div>
        </InViewFadeSlide>
      </div>
    </Wrapper>
  );
};

export default About;
