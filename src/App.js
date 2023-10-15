import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Experience from "./pages/Experience/experience";
import Skills from "./pages/Skills/skills";
import Interest from "./pages/Interest/interest";
import Awards from "./pages/Awards/awards";
import Contact from "./pages/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
