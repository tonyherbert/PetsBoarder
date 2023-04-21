import React from "react";
import ReactDOM from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import App from "./App";
import { MyProSidebarProvider } from "./components/Navbar/sidebarContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MyProSidebarProvider>
      <App />{" "}
    </MyProSidebarProvider>
  </React.StrictMode>
);
