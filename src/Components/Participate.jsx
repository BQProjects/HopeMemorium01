import React from "react";
import Wrapper from "./Wrapper";
import "./Participate.css";
import Subscribe from "./Subscribe";
import { useTranslation } from "react-i18next";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import InViewTopTransition from "./InViewTopTransition";
import InViewFadeSlide from "./InViewFadeSlide";
import par_1 from "../assets/par_2.jpg";

const Participate = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div
        className="w-[100%] h-fit flex flex-col items-center justify-center title
      "
        style={{
          backgroundColor: "rgba(247, 251, 226, 1)",
        }}
      >
        <InViewTopTransition>
          <div
            className="w-full flex items-center justify-center gap-1  mt-48 flex-col"
            style={{
              backgroundColor: "rgba(247, 251, 226, 1)",
            }}
          >
            <h1 className="text-[32px] font-bold">{t("title_capital")}</h1>
            <h2 className="text-[43px] w-[85%] font-bold text-center">
              {t("home_heading_2")}
            </h2>
          </div>
        </InViewTopTransition>
        <InViewFadeSlide duration={1.5}>
          <div
            className="w-full h-fit flex flex-col items-center justify-start mt-20 mb-32 par_3"
            style={{
              backgroundColor: "rgba(247, 251, 226, 1)",
            }}
          >
            <div className="w-full flex flex-col items-center ">
              <div className="about_mission">{t("title")}</div>
              <h2
                className="text-2xl mt-4 font-bold "
                style={{
                  color: "rgba(61, 42, 68, 1)",
                }}
              >
                {t("par_h1")}
              </h2>
              <p className="text-center w-[60%] mt-4">{t("par_p1")}</p>
            </div>
            <img
              src={par_1}
              className="h-24 w-[82%] object-cover position-top object-center -ml-2 mt-20 par_hide"
            />
            <div className=" w-[87%] flex items-start justify-center  mt-7 par_hide  ">
              <div className="flex flex-col  items-center justify-start gap-3 w-[85%] par_2  ">
                <h3 className="text-sm mt-1">{t("par_h2")}</h3>
                <p className="text-xs text-center mt-1 w-[75%] leading-normal ">
                  {t("par_p2")} <span>{t("par_p3")}</span>
                  {t("par_p4")}
                  <span>{t("par_p5")}</span>
                  {t("par_p6")}
                </p>
              </div>
              <div className="   flex flex-col  items-center justify-start gap-3 w-[85%] par_2 ml-5 ">
                <h3 className="text-sm">{t("par_h3")}</h3>
                <p className="text-xs text-center mt-1 w-[75%] leading-normal">
                  {t("par_p7")} <span>{t("par_p8")}</span>
                  {t("par_p9")}
                  <span>{t("par_p10")}</span>
                  {t("par_p11")}
                </p>
              </div>
              <div className=" w-[85%]  flex flex-col  items-center justify-start  gap-3  par_2 ">
                <h3 className="text-sm">{t("par_h4")}</h3>
                <p className="text-xs text-center mt-2 w-[75%] leading-normal">
                  {t("par_p12")} <span>{t("par_p13")}</span>
                  {t("par_p14")}
                  <span>{t("par_p15")}</span>
                  {t("par_p16")}
                </p>
              </div>
            </div>
            <div className=" w-[90%] flex items-start justify-center  mt-20 par_1 ">
              <div className="flex flex-col  items-center justify-start gap-3 w-[90%] par_2 mt-4  ">
                <div
                  className="w-16 h-16 flex items-center justify-center relative rounded-[50%]"
                  style={{
                    backgroundColor: "rgba(217, 158, 100, 1)",
                  }}
                >
                  <ForestOutlinedIcon className="text-lg " />
                  <div className="w-4 h-4 bg-white flex items-center justify-center text-center absolute top-0.5 right-0.5 rounded-[50%] text-xs z-20">
                    1
                  </div>
                </div>
                <h3 className="text-sm mt-1">{t("par_h2")}</h3>
                <p className="text-xs text-center mt-1 w-[75%] leading-normal ">
                  {t("par_p2")} <span>{t("par_p3")}</span>
                  {t("par_p4")}
                  <span>{t("par_p5")}</span>
                  {t("par_p6")}
                </p>
              </div>
              <div className="   flex flex-col  items-center justify-start gap-3 w-[90%] par_2 mt-4 ">
                <div
                  className="w-16 h-16 flex items-center justify-center relative rounded-[50%]"
                  style={{
                    backgroundColor: "rgba(217, 158, 100, 1)",
                  }}
                >
                  <ChurchOutlinedIcon className="text-lg " />
                  <div className="w-4 h-4 bg-white flex items-center justify-center text-center absolute top-0.5 right-0.5 rounded-[50%] text-xs z-20">
                    2
                  </div>
                </div>
                <h3 className="text-sm">{t("par_h3")}</h3>
                <p className="text-xs text-center mt-1 w-[75%] leading-normal">
                  {t("par_p7")} <span>{t("par_p8")}</span>
                  {t("par_p9")}
                  <span>{t("par_p10")}</span>
                  {t("par_p11")}
                </p>
              </div>
              <div className=" w-[90%]  flex flex-col  items-center justify-start  gap-3  par_2 mt-4 ">
                <div
                  className="w-16 h-16 flex items-center justify-center relative rounded-[50%]"
                  style={{
                    backgroundColor: "rgba(217, 158, 100, 1)",
                  }}
                >
                  <NotificationsNoneOutlinedIcon className="text-lg " />
                  <div className="w-4 h-4 bg-white flex items-center justify-center text-center absolute top-0.5 right-0.5 rounded-[50%] text-xs z-20">
                    3
                  </div>
                </div>
                <h3 className="text-sm">{t("par_h4")}</h3>
                <p className="text-xs text-center mt-2 w-[75%] leading-normal">
                  {t("par_p12")} <span>{t("par_p13")}</span>
                  {t("par_p14")}
                  <span>{t("par_p15")}</span>
                  {t("par_p16")}
                </p>
              </div>
            </div>
          </div>
        </InViewFadeSlide>
        <InViewFadeSlide direction={"right"}>
          <div className="home_part_3_for_par mb-16">
            <p>{t("home_para_6")}</p>
            <Subscribe />
          </div>
        </InViewFadeSlide>
      </div>
    </Wrapper>
  );
};

export default Participate;
