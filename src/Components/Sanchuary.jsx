import React from "react";
import Wrapper from "./Wrapper";
import "./Sanchuary.css";
import Subscribe from "./Subscribe";
import { useTranslation } from "react-i18next";
import san1 from "../assets/san1.png";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import InViewTopTransition from "./InViewTopTransition";
import InViewFadeSlide from "./InViewFadeSlide";

const Sanchuary = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div
        className="w-full flex flex-col justify-start items-center title"
        style={{
          backgroundColor: "rgba(247, 251, 226, 1)",
        }}
      >
        <InViewTopTransition>
          <div
            className="w-full flex items-center justify-center gap-1 mt-48 flex-col"
            style={{
              backgroundColor: "rgba(247, 251, 226, 1)",
            }}
          >
            <h1 className="text-4xl font-bold">{t("title_capital")}</h1>
            <h2 className="text-xl font-bold text-center">
              {t("home_heading_2")}
            </h2>
          </div>
        </InViewTopTransition>
        <InViewTopTransition delay={0.5}>
          <div className="h-[100vh] w-[87%]  flex  justify-center gap-6 san mt-20  ">
            <img src={san1} className="w-50% h-[87%]  " alt="" />
            <div className="w-[50%] h-[90%] flex flex-col san_2">
              <div>
                <div className="about_mission px-2">
                  <p>• {t("san_h1")}</p>
                </div>
                <h2 className="text-3xl font-bold pt-5"> {t("san_h2")}</h2>
                <p className="pt-3">
                  <span className="font-semibold"> {t("san_p1")}</span>{" "}
                  {t("san_p2")}
                  <span className="font-semibold"> {t("san_p3")}</span>{" "}
                  {t("san_p4")}{" "}
                  <span className="font-semibold"> {t("san_p5")}</span>{" "}
                  {t("san_p6")}
                </p>
              </div>
              <div className="w-[110%] h-[55%] -ml-[20%] bg-white mt-6 rounded-xl flex items-center justify-center gap-7 san_1">
                <div className="h-[250px] w-[35%] border border-gray-200 rounded-xl p-3 san_4">
                  <div
                    style={{
                      color: "rgba(217, 158, 100, 1)",
                    }}
                    className="flex justify-start items-center  text-sm"
                  >
                    <ChurchOutlinedIcon className="mx-3" />
                    <h3> {t("san_h3")}</h3>
                  </div>
                  <p className="text-xs mt-4">
                    {" "}
                    {t("san_p7")} <span> {t("san_p8")}</span> {t("san_p9")}
                    <span> {t("san_p10")}</span> {t("san_p11")}
                  </p>
                </div>
                <div className="h-[250px] w-[55%] border border-gray-200 rounded-xl p-3 san_5">
                  <div
                    style={{
                      color: "rgba(217, 158, 100, 1)",
                    }}
                    className="flex justify-start items-center  text-sm"
                  >
                    <SpaOutlinedIcon className="mx-3" />
                    <h3> {t("san_h4")}</h3>
                  </div>
                  <p className="mt-7 text-xs">
                    {t("san_p12")} <span>{t("san_p13")}</span>
                    {t("san_p14")}
                  </p>
                  <p className="mt-2 text-xs">
                    • <span>{t("san_p15")}</span>
                    {t("san_p16")}
                  </p>
                  <p className="mt-2 text-xs">
                    • <span>{t("san_p17")}</span>
                    {t("san_p18")}
                  </p>
                  <p className="mt-2 text-xs">
                    • <span>{t("san_p19")}</span>
                    {t("san_p20")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </InViewTopTransition>
        <InViewFadeSlide>
          <div className="home_part_3_for_san mb-20">
            <p>{t("san_subscribe")}</p>
            <Subscribe />
          </div>
        </InViewFadeSlide>
      </div>
    </Wrapper>
  );
};

export default Sanchuary;
