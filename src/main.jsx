import { createRoot } from "react-dom/client";
import QBabel from "./QBabel.jsx";

import { store } from "./store";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/error/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCliente= new QueryClient()

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryCliente}>

  <ErrorBoundary>
    <Provider store={store}>
      <QBabel />
    </Provider>
  </ErrorBoundary>
  </QueryClientProvider>
);
