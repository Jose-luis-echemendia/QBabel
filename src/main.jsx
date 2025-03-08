import { createRoot } from "react-dom/client";
import QBabel from "./QBabel.jsx";

import { store } from "./store";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/error/index.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <Provider store={store}>
      <QBabel />
    </Provider>
  </ErrorBoundary>
);
