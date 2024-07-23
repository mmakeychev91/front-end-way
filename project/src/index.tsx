/* eslint-disable quotes */
import React from "react";
import ReactDOM from "react-dom/client";
import './styles/globals.scss';
import './styles/normalize.css';
import './styles/_settings.scss';
import App from "./components/app/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
