import React from "react";
import Wrapper from "./Wrapper";
import { useTranslation } from "react-i18next";
import Subscribe from "./Subscribe";

const Journey = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div
        style={{
          backgroundColor: "rgba(247, 251, 226, 1)",
        }}
        className="w-full h-[65vh] flex flex-col justify-center items-center"
      >
        <div
          className="px-16 py-2 rounded-xl"
          style={{
            backgroundColor: "rgba(61, 42, 68, 1)",
            color: "white",
          }}
        >
          <h2 className="text-lg">{t("join_h1")}</h2>
        </div>
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
    </Wrapper>
  );
};

export default Journey;
