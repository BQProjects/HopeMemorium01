import { useState } from "react";

import "./App.css";
import RoutesW from "./Components/RoutesW";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log("sdjgkucvgsud");
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng; // Set <html lang="he"> dynamically
    if (lng === "he" || lng === "ar") {
      document.body.dir = "rtl"; // Right-to-Left for Hebrew, Arabic
    } else {
      document.body.dir = "ltr"; // Left-to-Right for English, etc.
    }
  };

  return (
    <>
      <div className="App ">
        <RoutesW />
      </div>
    </>
  );
}

export default App;
