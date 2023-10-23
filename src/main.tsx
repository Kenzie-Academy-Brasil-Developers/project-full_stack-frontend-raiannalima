import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { RoutesMain } from './routes/Routes_main.tsx';
import "./index.css";
import "./styles/globals.css";
import App from "./App";
import { UserProvider } from "./providers/UserContext";
import { AnouncementProvider } from "./providers/AnouncementContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AnouncementProvider>
          <App />
        </AnouncementProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);