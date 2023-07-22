import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import "./normalize.css";
import App from "./src/App";

const root = createRoot(document.getElementById("app"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
