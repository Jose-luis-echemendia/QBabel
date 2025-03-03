import { createRoot } from "react-dom/client";
import QBabel from "./QBabel.jsx";

import { store } from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <QBabel />
  </Provider>
);
