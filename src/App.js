import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ai from "./components/ai/ai";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Music from "./components/music/music";
import NavBar from "./components/navBar/navBar";
import Resume from "./components/resume/resume";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
