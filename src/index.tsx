import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

axios.defaults.baseURL = process.env.REACT_APP_BIKE_BASE_URL;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
