import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App.jsx";
import "./index.css";
import Contactus from "./components/Contactus.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
    <Route path="/Contactus" element={<Contactus />} />
    <Route path="/aboutus" element="/"/>


    </Routes>
          
      
    
    </BrowserRouter>
  </React.StrictMode>
);
