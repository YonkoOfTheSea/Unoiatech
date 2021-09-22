import React from "react";
import ReactDOM from "react-dom";

import AppL from "./left/App"
import AppR from "./right/App"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppL />
    <AppR />
  </React.StrictMode>,
  rootElement
);
