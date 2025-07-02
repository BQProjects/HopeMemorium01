import React from "react";
import Wrapper from "./Wrapper";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import HistoryIcon from "@mui/icons-material/History";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import Subscribe from "./Subscribe";
import { motion } from "motion/react";
import InViewFadeSlide from "./InViewFadeSlide";
import InViewOpacitySlide from "./InViewOpacitySlide";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="__c">
        <InViewOpacitySlide>
          <div className="home_part_1">
            <h1>{t("title_capital")}</h1>
            <h2 className="text-center ">{t("home_heading_2")}</h2>
            <p>{t("home_para_1")}</p>
            <p>{t("home_para_2")}</p>
            <button className="px-4 py-3" onClick={() => navigate("/journey")}>
              {t("join")}
            </button>
          </div>
        </InViewOpacitySlide>
        <div className="home_2">
          <InViewFadeSlide>
            <div className="home_part_2">
              <div className="home_part_2_section">
                <div className="attch_logo">
                  <AttachFileIcon
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                </div>
                <div className="icon_logo">
                  <VolunteerActivismOutlinedIcon />
                </div>
                <h3>{t("home_heading_3")}</h3>
                <div className="flex flex-col mt-1">
                  <p>
                    <span>{t("home_p1")}</span>
                    {t("home_p2")}
                    <span>{t("home_p3")}</span>
                    {t("home_p4")}
                  </p>

                  <p>
                    <span>{t("home_p5")}</span>

                    {t("home_p6")}
                    <span>{t("home_p7")}</span>
                    {t("home_p8")}
                  </p>
                </div>
              </div>
              <div className="home_part_2_section">
                <div className="attch_logo">
                  <AttachFileIcon
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                </div>
                <div className="icon_logo">
                  <HistoryIcon />
                </div>
                <h3>{t("home_heading_4")}</h3>
                <div className="flex flex-col mt-1">
                  <p>
                    {t("home_p9")}
                    <span>{t("home_p10")}</span>
                    {t("home_p11")}
                    <span>{t("home_p12")}</span>
                    {t("home_p13")}
                    <span>{t("home_p14")}</span>
                    {t("home_p15")}
                  </p>
                  <p>
                    {t("home_p16")}
                    <span>{t("home_p17")}</span>
                    {t("home_p18")}
                  </p>
                </div>
              </div>

              <div className="home_part_2_section">
                <div className="attch_logo">
                  <AttachFileIcon
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                </div>
                <div className="icon_logo">
                  <ChurchOutlinedIcon />
                </div>
                <h3>{t("home_heading_5")}</h3>
                <p className="mt-1">
                  {t("home_p19")}
                  <span>{t("home_p20")}</span>
                  {t("home_p21")}
                  <span>{t("home_p22")}</span>
                  {t("home_p23")}
                  <span>{t("home_p24")}</span>
                  {t("home_p25")}
                </p>
              </div>
            </div>
          </InViewFadeSlide>
          <InViewFadeSlide direction={"right"}>
            <div className="home_part_3_for_home ">
              <p>{t("home_para_6")}</p>
              <Subscribe />
            </div>
          </InViewFadeSlide>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
