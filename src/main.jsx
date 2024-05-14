import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./utils/scrollToTop.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <ScrollToTop />
      <App />
    </React.StrictMode>
  </Router>
);
