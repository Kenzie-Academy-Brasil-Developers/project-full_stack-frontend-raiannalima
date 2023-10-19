import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
// import { RoutesMain } from './routes/Routes_main.tsx';
import "./index.css";
import "./styles/globals.css";
import App from './App.tsx';
import { UserProvider } from './providers/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
