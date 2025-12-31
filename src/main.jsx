import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Shopcontextprovider from "./context/shopcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
    >
      <Shopcontextprovider>
        <App />
      </Shopcontextprovider>
    </BrowserRouter>
  </React.StrictMode>
);