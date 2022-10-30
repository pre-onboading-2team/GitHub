import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./components/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Router>
    <GlobalStyles />
    <App />
  </Router>
  // </React.StrictMode>
);
// https://shiny-parfait-47e153.netlify.app/
