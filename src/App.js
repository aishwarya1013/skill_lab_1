import React from "react";
import Home from "./Component/Home";
import About from "./Component/About";
import Destination from "./Component/Destination";
import Navbar from "./Component/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App (){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/Destination" element = {<Destination />} />
      <Route path="/About" element = {<About />} />
      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App