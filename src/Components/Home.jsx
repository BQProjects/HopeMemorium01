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

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="__c">
        <div className="home_part_1">
          <h1>{t("title")}</h1>
          <h2>{t("home_heading_2")}</h2>
          <p>{t("home_para_1")}</p>
          <p>{t("home_para_2")}</p>
          <button onClick={() => navigate("/journey")}>{t("join")}</button>
        </div>
        <div className="home_2">
          <div className="home_part_2">
            <div className="home_part_2_section">
              <div className="attch_logo">
                <AttachFileIcon
                  style={{
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </div>
              <div className="icon_logo">
                <VolunteerActivismOutlinedIcon />
              </div>
              <h3>{t("home_heading_3")}</h3>
              <p>{t("home_para_3")}</p>
            </div>
            <div className="home_part_2_section">
              <div className="attch_logo">
                <AttachFileIcon
                  style={{
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </div>
              <div className="icon_logo">
                <HistoryIcon />
              </div>
              <h3>{t("home_heading_4")}</h3>
              <p>{t("home_para_4")}</p>
            </div>

            <div className="home_part_2_section">
              <div className="attch_logo">
                <AttachFileIcon
                  style={{
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </div>
              <div className="icon_logo">
                <ChurchOutlinedIcon />
              </div>
              <h3>{t("home_heading_5")}</h3>
              <p>{t("home_para_5")}</p>
            </div>
          </div>
          <div className="home_part_3">
            <p>{t("home_para_6")}</p>
            <Subscribe />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
