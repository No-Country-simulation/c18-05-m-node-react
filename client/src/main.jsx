import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from 'react-auth-kit'
import { store } from "./store/Auth/store.js";


ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
      <AuthProvider store={store}>
        <BrowserRouter>
          <App />
      </BrowserRouter>
      </AuthProvider>
        </React.StrictMode>
      
   
);
