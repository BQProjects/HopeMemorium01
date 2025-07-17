import React from "react";
import Wrapper from "./Wrapper";
import { useTranslation } from "react-i18next";
import Subscribe from "./Subscribe";
import "./Journey.css";
import InViewTopTransition from "./InViewTopTransition";
import InViewOpacitySlide from "./InViewOpacitySlide";
import { motion } from "framer-motion";

const Journey = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div
        className="w-full flex items-center justify-center gap-1  flex-col title mt-48"
        style={{
          backgroundColor: "rgba(247, 251, 226, 1)",
        }}
      >
        <h1 className="text-[32px] font-bold">{t("title_capital")}</h1>
        <h2 className="text-[45px] font-bold text-center">
          {t("home_heading_2")}
        </h2>
      </div>
      <div className="w-full flex items-center justify-center mt-20">
        <motion.div
          className=" py-2  rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: "rgba(61, 42, 68, 1)",
            color: "white",
            width: "600px",
          }}
          initial={{ width: "550px" }}
          animate={{ width: "600px" }} // or set to "100%" or a fixed value like "200px"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-lg">{t("join_h1")}</h2>
        </motion.div>
      </div>

      <InViewOpacitySlide>
        <div
          style={{
            backgroundColor: "rgba(247, 251, 226, 1)",
          }}
          className="w-full h-[65vh] flex flex-col justify-start items-center jour "
        >
          <div className="mt-7 text-center flex items-center justify-center flex-col">
            <h3
              className="text-2xl font-semibold "
              style={{
                color: "rgba(61, 42, 68, 1)",
              }}
            >
              {t("join_h2")}
            </h3>
            <p className="w-[60%] mt-4 mb-6">{t("join_p1")}</p>
          </div>

          <div>
            <Subscribe />
          </div>
        </div>
      </InViewOpacitySlide>
    </Wrapper>
  );
};

export default Journey;
