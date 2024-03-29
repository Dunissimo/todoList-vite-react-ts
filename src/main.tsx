import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import ThemeContextProvider from "./context/ViewContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
