import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Contact,
  Experience,
  Weather,
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

        <Route path="/experiments">
          <Route index element={<Weather />} />
        </Route>



        {/* <Route path="/experiments" element={<Experiments />} /> */}
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
