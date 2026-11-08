import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Contact,
  Footer,
  Header,
  Music,
  NavBar,
  Resume,
  Weather,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/resume/*" element={<Navigate to="/resume" replace />} />
          <Route path="/experiments" element={<Weather />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
