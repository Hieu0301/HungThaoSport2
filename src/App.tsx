import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  

  return (
    <>
    <Toaster/>
      <BrowserRouter>
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
