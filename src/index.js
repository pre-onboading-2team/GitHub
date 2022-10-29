import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
// import GlobalStyles from "./components/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(process.env.REACT_APP_API_KEY);

root.render(
  // <React.StrictMode>
  <Router>
    <GlobalStyles />
    <App />
  </Router>
  // </React.StrictMode>
);
