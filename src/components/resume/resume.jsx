import React from "react";
import Experience from "./experience/experience.jsx";
import "./resume.css";
// import ResumeNav from "./resumeNav/resumeNav.jsx";

const Resume = () => {
  return (
    <div className="gpt3__resumeNav section__padding" id="resume navbar">
      <div className="gpt3__resumeNav-navbar">
        <div className="gpt3__resumeNav-navbar_links gradient__bg">
          <p>
            <a href="#experience">Experience</a>
          </p>
          <p>
            <a href="#studies">Studies</a>
          </p>
          <p>
            <a href="#skills">Skills</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
        </div>
      </div>
      <div className="gpt3__resumeNav-content">
        <Experience />
      </div>
    </div>
  );
};

export default Resume;

