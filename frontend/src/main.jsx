import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthConextProvider } from "./context/AuthContext";
import { SocketContextProvider } from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthConextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthConextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
