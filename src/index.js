import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/CommonComponents/Routes/Routes";
import { AuthProvider } from "./components/Context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router/>
    </AuthProvider>
  </React.StrictMode>
);
