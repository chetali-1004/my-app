import React from "react";
import "./index.css";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Project from "./routes/Project";
 
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
