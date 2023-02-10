import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Ai,
  Contact,
  Experience,
  Header,
  Music,
  NavBar,
  Projects,
  Skills,
  Studies,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/resume">
          <Route index element={<Experience />} />
          <Route path="studies" element={<Studies />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="/ai" element={<Ai />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
