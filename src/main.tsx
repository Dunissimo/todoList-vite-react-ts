import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import ContextProvider from "./utils/Context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
