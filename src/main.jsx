import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App.jsx";
import "./index.css";
import Contactus from "./components/Contactus.jsx";
import Footer from "./components/Footer";
import Services from "./components/Services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
     
    <Routes>
    <Route path="/Contactus" element={<Contactus />} />
    <Route path="/aboutus" element="/"/>
    {/* <Route path="/services"element={<Services />} /> */}
   

    </Routes>
    {/* <Services/> */}
          
    <Footer />
    
    </BrowserRouter>
  </React.StrictMode>
);
