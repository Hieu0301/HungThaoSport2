import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./components/ui/ScrollToTop"
function App() {
  
useEffect(() => {
    AOS.init({
      duration: 800, // thời gian hiệu ứng (ms)
      once: true,    // chỉ chạy 1 lần khi xuất hiện
    });
  }, []);

  return (
    <>
    <Toaster/>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route
          path="/"
          element={<HomePage/>}/>
          

          <Route
          path="/about"
          element={<About/>}/>


          <Route
          path="/service"
          element={<Service/>}/>


          <Route
          path="/contact"
          element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
