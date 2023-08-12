import React from "react";
import { createRoot } from "react-dom/client";

import App from "./src/App";

import "./main.css";
import "./normalize.css";
import './src/component/css/header_option.css'

const root = createRoot(document.getElementById("app"));
root.render(
		<App />
);
