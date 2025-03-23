import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DataContextProvider from "./context/DataContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DataContextProvider>
);
