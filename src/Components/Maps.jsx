import React, { useState } from "react";
import { useEffect } from "react";
import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import temp from "../assets/temp.jpeg";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import Wrapper from "./Wrapper";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.jpeg";
import { useTranslation } from "react-i18next";
import about2 from "../assets/about2.png";

const Maps = () => {
  const center = { lat: 32.825795, lng: 35.513093 };
  const [selj, setSelJ] = useState(null);
  const [seli, setSelI] = useState(null);
  const [Mapcenter, setMapCenter] = useState(center);
  const [popUp, setPopUp] = useState(null);
  const [zoom, setZoom] = useState(18);
  const [map, setMap] = useState(null);
  const [pos, setPos] = useState(null);
  const [directions, setDirection] = useState(false);
  const [image, setImage] = useState(false);
  const [imageNumber, setImageNumber] = useState(0);
  const { t } = useTranslation();
  const arrowButtonStyle = {
    padding: "0.5rem",
    borderRadius: "50%",
    backgroundColor: "white",
    height: "2rem",
    width: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

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
  const isMobile = width < 768;
  const isTab = width < 850;
  return (
    <Wrapper>
      <div
        className="w-full flex items-center justify-center gap-1 pt-[19vh] flex-col"
        style={{
          backgroundColor: "rgba(247, 251, 226, 1)",
        }}
      >
        <h1 className="text-4xl font-bold">{t("title_capital")}</h1>
        <h2 className="text-xl font-bold text-center">{t("home_heading_2")}</h2>
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(247, 251, 226, 1)",
        }}
      >
        <style>
          {`
    .grid-cell {
      position: absolute;
      box-shadow: 0 0 0 0.1px rgba(75, 85, 99, 0.7);
      cursor: pointer;
      text-align: center;
      transition: background-color 0.2s ease;
    }

    .grid-cell:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  `}
        </style>
        {image && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Dim background
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <img
              src={imageNumber % 2 === 0 ? temp : logo}
              alt="Centered Preview"
              style={{
                maxWidth: "60%",
                maxHeight: "60%",
                borderRadius: "10px",
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
              }}
            />
            <div
              className="text-xl px-2 py-3 text-white absolute top-[48%] left-1 cursor-pointer"
              onClick={() => setImageNumber(imageNumber - 1)}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              }}
            >
              <IoIosArrowBack />
            </div>
            <div
              className="text-xl px-2 py-3 text-white absolute top-[48%] right-1 cursor-pointer"
              onClick={() => setImageNumber(imageNumber + 1)}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              }}
            >
              <IoIosArrowForward />
            </div>
            <div
              className="text-xl p-2 rounded-[50%] text-white absolute top-3 right-3 cursor-pointer"
              onClick={() => setImage(false)}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              }}
            >
              <RxCross2 />
            </div>
          </div>
        )}

        {popUp !== null && (
          <div
            style={{
              position: "absolute",
              width: isMobile ? "80vw" : "25vw",
              height: "31vh",
              top: isMobile ? "110%" : "75%",
              left: isMobile ? "40%" : pos === "left" ? "17%" : undefined,
              right: pos === "right" ? "1%" : undefined,
              transform: "translate(-40%, -40%)",
              backgroundColor: "white",
              color: "black",
              zIndex: 5000,
              paddingTop: "5px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <button
              onClick={() => {
                setMapCenter({ lat: 32.825467, lng: 35.514139 });
                setZoom(19);
                setPopUp(null);
              }}
              style={{
                position: "absolute",
                top: "7px",
                right: "7px",
                border: "none",
                borderRadius: "50%",
                backgroundColor: "white",
                width: "25px",
                height: "25px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              X
            </button>

            <div
              style={{
                display: "flex",
                height: "50px",

                width: "100%",
                alignItems: "center",
                justifyContent: "start",
                borderBottom: "1px solid #bcbcbc",
              }}
            >
              <h3
                style={{
                  marginLeft: "15px",
                  fontSize: "13px",
                  fontWeight: "normal",
                }}
              >
                Parcel Number: {popUp}
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "65px",
                borderBottom: "1px solid #bcbcbc",
              }}
            >
              <div
                style={{
                  marginLeft: "15px",
                }}
              >
                <h2
                  style={{
                    margin: "0",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Images
                </h2>
                <p style={{ margin: "0", fontSize: "10px", color: "#999999" }}>
                  (Click on pictures for full view)
                </p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  gap: "5px",
                }}
              >
                <img
                  onClick={() => setImage(true)}
                  src={temp}
                  style={{
                    width: "50px",
                    height: "90%",
                  }}
                />
                <img
                  onClick={() => setImage(true)}
                  src={temp}
                  style={{
                    width: "50px",
                    height: "90%",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "60px",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  borderBottom: "1px solid #bcbcbc",
                  borderRight: "1px solid #bcbcbc",
                }}
              >
                <h2
                  style={{
                    margin: "10px",
                    fontSize: "13px",
                    fontWeight: "normal",
                  }}
                >
                  Block No: 234
                </h2>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  borderBottom: "1px solid #bcbcbc",
                  borderRight: "1px solid #bcbcbc",
                }}
              >
                <h2
                  style={{
                    margin: "10px",
                    fontSize: "13px",
                    fontWeight: "normal",
                  }}
                >
                  Lot No: 567
                </h2>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "50px",

                width: "100%",
                alignItems: "center",
                justifyContent: "start",
                borderBottom: "1px solid #bcbcbc",
              }}
            >
              <h2
                style={{
                  marginLeft: "10px",
                  fontSize: "13px",
                  fontWeight: "normal",
                }}
              >
                Price of Parcel : $$
              </h2>
            </div>
            <div
              style={{
                width: "100%",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  width: "30%",
                  height: "70%",
                  textAlign: "center",
                  borderRadius: "10px",
                  backgroundColor: "rgba(61,42 , 68 , 1)",
                  color: "white",
                  fontSize: "11px",
                }}
              >
                Enquiry Now
              </button>
            </div>
          </div>
        )}

        <div
          style={{
            width: "90%",
            height: "80vh",
            overflow: "hidden",
            position: "relative",
            marginTop: "15vh",
          }}
        >
          {/* Zoom In , Zoom Out and direction buttons */}
          <div
            style={{
              position: "absolute",
              height: "150px",
              width: "140px",
              bottom: "5%",
              right: "1%",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "space-evenly",
              padding: "0.5rem",
              borderRadius: "0.5rem",
            }}
          >
            {/* Zoom In */}
            <div
              style={{
                padding: "0.5rem",
                borderRadius: "50%",
                backgroundColor: "white",
                height: "2rem",
                width: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: zoom >= 19 ? "gray" : "black",
                cursor: "pointer",
              }}
              onClick={() => {
                if (zoom < 19) {
                  setZoom(zoom + 1);
                }
              }}
            >
              <FaPlus />
            </div>

            {/* Zoom Out */}
            <div
              style={{
                padding: "0.5rem",
                borderRadius: "50%",
                backgroundColor: "white",
                height: "2rem",
                width: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setZoom(zoom - 1);
              }}
            >
              <FaMinus />
            </div>

            {/* Expand/Collapse Direction Panel */}
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  padding: "0.5rem",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  height: "2rem",
                  width: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <MdZoomOutMap onClick={() => setDirection(!directions)} />
              </div>

              {/* Direction Controls */}
              {directions && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                    gap: "0.25rem",
                    position: "absolute",
                    right: "120%",
                    bottom: "-2rem",
                  }}
                >
                  <div></div>
                  <div
                    style={arrowButtonStyle}
                    onClick={() => {
                      setMapCenter({
                        ...Mapcenter,
                        lat: Mapcenter.lat + 0.00025,
                      });
                    }}
                  >
                    <IoIosArrowUp />
                  </div>
                  <div></div>

                  <div style={arrowButtonStyle}>
                    <IoIosArrowBack
                      onClick={() => {
                        setMapCenter({
                          ...Mapcenter,
                          lng: Mapcenter.lng - 0.0003,
                        });
                      }}
                    />
                  </div>
                  <div></div>
                  <div
                    style={arrowButtonStyle}
                    onClick={() => {
                      setMapCenter({
                        ...Mapcenter,
                        lng: Mapcenter.lng + 0.0003,
                      });
                    }}
                  >
                    <IoIosArrowForward />
                  </div>

                  <div></div>
                  <div style={arrowButtonStyle}>
                    <IoIosArrowDown
                      onClick={() => {
                        setMapCenter({
                          ...Mapcenter,
                          lat: Mapcenter.lat - 0.00025,
                        });
                      }}
                    />
                  </div>
                  <div></div>
                </div>
              )}
            </div>
          </div>

          {/* Map Container Force Zoming using scale */}
          <div
            style={{
              transform: zoom >= 19 ? `scale(2.2)` : "scale(1)",
              transformOrigin: "center center",
              transition: "transform 0.3s ease-in-out",
              width: "100%",
              height: "100%",
            }}
          >
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              center={Mapcenter}
              zoom={zoom}
              options={{
                mapTypeId: "satellite",
                mapTypeControl: false,
                disableDefaultUI: true,
                maxZoom: 30,
                gestureHandling: "greedy",
              }}
              onLoad={(map) => setMap(map)}
              onZoomChanged={() => {
                if (map) {
                  const newZoom = map.getZoom();
                  setZoom(newZoom);
                }
              }}
            >
              {/* Grid for 1000 parcels */}
              {zoom >= 18 && (
                <React.Fragment>
                  <OverlayView
                    position={
                      zoom < 19 ? center : { lat: 32.82551, lng: 35.5138 }
                    }
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  >
                    <div
                      style={{
                        width: "350px",
                        height: "140px",
                        transform: `scale(${
                          zoom >= 19
                            ? 2.3
                            : zoom === 18
                            ? 1
                            : zoom === 17
                            ? 0.7
                            : 0.5
                        }) rotate(10deg)`,
                        transformOrigin: "center center",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    >
                      {Array.from({ length: 20 }).map((_, i) =>
                        Array.from({ length: 50 }).map((_, j) => (
                          <div
                            key={`${i}-${j}`}
                            onClick={() => {
                              setPopUp(i * 50 + j + 1);
                              setZoom(19);
                              setSelI(j);
                              setSelJ(i);
                              if (j > 25) {
                                if (isMobile) {
                                  setMapCenter({
                                    lat: 32.8256 - i * 0.000022 - j * 0.0000009,
                                    lng: 35.5138 + j * 0.00002 - i * 0.000005,
                                  });
                                } else {
                                  setMapCenter({
                                    lat: 32.8256 - i * 0.000022 - j * 0.0000009,
                                    lng: 35.5138 + j * 0.000012 - i * 0.000005,
                                  });
                                }

                                setPos("left");
                              } else {
                                setMapCenter({
                                  lat: 32.8257 - i * 0.000022 - j * 0.0000009,
                                  lng: 35.5134 + j * 0.00002 - i * 0.0000015,
                                });
                                setPos("right");
                              }
                            }}
                            style={{
                              height: zoom >= 19 ? "5px" : "6px",
                              width: zoom >= 19 ? "5px" : "6px",
                              position: "absolute",
                              top: `${i * (zoom >= 19 ? 5 : 6)}px`,
                              left: `${j * (zoom >= 19 ? 5 : 6)}px`,
                              boxShadow: "0 0 0 0.1px (0 , 0, 0, 0.7)",
                              backgroundColor:
                                popUp === i * 50 + j + 1
                                  ? "white"
                                  : "rgba(255,255,255,0.2)",
                              fontSize: zoom >= 19 ? "2px" : "3px",
                              lineHeight: zoom >= 19 ? "6px" : "5px",
                              textAlign: "center",
                              cursor: "pointer",
                            }}
                          >
                            {i * 50 + j + 1}
                          </div>
                        ))
                      )}
                    </div>
                  </OverlayView>
                </React.Fragment>
              )}

              {/* location */}

              <React.Fragment>
                <OverlayView
                  position={
                    zoom < 19
                      ? { lat: 32.82546, lng: 35.51579 }
                      : { lat: 32.82529, lng: 35.51579 }
                  }
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <div
                    style={{
                      width: "200px",
                      height: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <style>
                      {`
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `}
                    </style>
                    <div
                      style={{
                        height: "2rem",
                        width: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        backgroundColor: "rgba(61, 42, 68, 1)",
                        fontSize: "18px",
                        borderRadius: "6px",
                        marginRight: "12px",
                        animation: "bounce 2s infinite ease-in-out",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setMapCenter({ lat: 32.825467, lng: 35.514139 });
                        setZoom(19);
                      }}
                    >
                      <MdOutlineLocationOn />
                    </div>
                    <div
                      style={{
                        width: "80%",
                        fontSize: "12px",
                        color: "white",
                      }}
                    >
                      Magdala Franciscan Excavations
                    </div>
                  </div>
                </OverlayView>
              </React.Fragment>
            </GoogleMap>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-start">
          <div
            style={{
              height: "4vh",
              width: isTab ? "40vw" : "17vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "small",
              border: "1px solid rgba(217, 158, 100, 1)",
              borderRadius: "15px",
              marginLeft: "2rem",
              marginTop: "4rem",
            }}
            className=" px-2"
          >
            <p>• {t("maps_h1")}</p>
          </div>
          <div
            className={`w-[95%] mt-6 flex ${
              isTab ? "flex-col" : "flex-row"
            } items-center justify-between mb-14 gap-10`}
          >
            <div
              className={` ${
                isTab ? "w-[90%]" : "w-[35%]"
              } p-2 flex flex-col justify-start items-center h-[60vh] bg-white rounded-xl`}
            >
              <img src={about2} className="w-[80%] h-30 mt-5" />
              <div
                style={{
                  height: "4vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "small",
                  border: "1px solid rgba(217, 158, 100, 1)",
                  borderRadius: "15px",
                  paddingX: "1rem",
                  marginTop: "2vh",
                }}
                className=" px-3"
              >
                <p>• {t("maps_h2")}</p>
              </div>
              <p className="text-xs w-[85%] mt-4">
                {t("maps_p1")}
                <span>{t("maps_p2")}</span>
                {t("maps_p3")}
                <span>{t("maps_h4")}</span>
                {t("maps_p5")}
                <span>{t("maps_p6")}</span>
                {t("maps_p7")}
                <span>{t("maps_p8")}</span>
                {t("maps_p9")}
              </p>
            </div>
            <div
              className={`${
                isTab ? "w-[90%]" : "w-[35%]"
              } p-2 flex flex-col justify-start items-center h-[60vh] bg-white rounded-xl`}
            >
              <img src={about2} className="w-[80%] h-30 mt-5" alt="" />
              <div
                style={{
                  height: "4vh",
                  paddingX: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "small",
                  border: "1px solid rgba(217, 158, 100, 1)",
                  borderRadius: "15px",
                  marginTop: "2vh",
                }}
                className=" px-3"
              >
                <p>• {t("maps_h3")}</p>
              </div>
              <p className="text-xs mt-4 w-[85%]">{t("maps_p10")}</p>
            </div>
            <div
              className={`${
                isTab ? "w-[90%]" : "w-[35%]"
              } p-2 flex flex-col justify-start items-center h-[60vh] bg-white rounded-xl"`}
            >
              <img src={about2} className="w-[80%] h-30 mt-5" />
              <div
                style={{
                  height: "4vh",
                  paddingX: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "small",
                  border: "1px solid rgba(217, 158, 100, 1)",
                  borderRadius: "15px",
                  marginTop: "2vh",
                }}
                className=" px-3"
              >
                <p>• {t("maps_h4")}</p>
              </div>
              <p className="text-xs w-[85%] mt-4 flex items-start gap-2">
                <div>• </div>{" "}
                <div>
                  {t("maps_p11")}
                  <span>{t("maps_p12")}</span>
                  {t("maps_p13")}
                  <span>{t("maps_p14")}</span>
                  {t("maps_p15")}
                </div>
              </p>
              <p className="text-xs w-[85%] mt-1 flex items-start gap-2">
                <div>• </div>
                <div>
                  {t("maps_p16")}
                  <span>{t("maps_p17")}</span>
                  {t("maps_p18")}
                </div>
              </p>
              <p className="text-xs w-[85%] mt-1 flex items-start gap-2">
                {" "}
                <div>• </div>
                <div>{t("maps_p19")}</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Maps;
