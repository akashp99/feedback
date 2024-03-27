import  render  from "@testing-library/react";
import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import App from "./App";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <App/>
  </>
)