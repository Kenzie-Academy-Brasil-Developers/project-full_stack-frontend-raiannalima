import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { RoutesMain } from './routes/Routes_main.tsx';
import "./index.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesMain></RoutesMain>
    </BrowserRouter>
  </React.StrictMode>,
)
