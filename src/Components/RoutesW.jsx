import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import DigitalGarden from "./DigitalGraden";
import Journey from "./Journey";
import Maps from "./Maps";
import Participate from "./Participate";
import Sanchuary from "./Sanchuary";

const RoutesW = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dg" element={<DigitalGarden />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/san" element={<Sanchuary />} />
      </Routes>
    </>
  );
};

export default RoutesW;
