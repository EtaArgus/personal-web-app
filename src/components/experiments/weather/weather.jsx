import React from "react";
import ExperimentsMenu from "../experimentsMenu/experimentsMenu";
import "../experiments.css";

const Weather = () => {
  return (
    <div className="resume section__padding" id="resume-experience">
      <div className="resume-menu">
        <ExperimentsMenu />
      </div>
      <div className="resume-content">
        <p style={{ color: "white" }}>Weather</p>
      </div>
    </div>
  );
};

export default Weather;
