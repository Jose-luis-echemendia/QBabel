import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import QBabel from "./QBabel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QBabel />
  </StrictMode>
);
