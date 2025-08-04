import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import Context from "./comtext/Context.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Context>
      <App />

      <ToastContainer />
    </Context>
  </>
);
