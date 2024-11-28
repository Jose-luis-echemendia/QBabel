import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import QBabel from "./qbabel";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QBabel />
  </StrictMode>
);
