import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./containers/App";
import "./assets/favicon.ico";

const container = document.getElementById("app");
if (container) {
  hydrateRoot(
    container,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
