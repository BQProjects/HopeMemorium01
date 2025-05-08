import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n.js";
import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadScript googleMapsApiKey="AIzaSyCUufoXopiUE0xu2NNs24YKyzMkowDeL9c">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoadScript>
  </StrictMode>
);
