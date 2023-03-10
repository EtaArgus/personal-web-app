import React from "react";
import Menu from "../menu/menu";
import "../resume.css";
import JobTable from "./jobTable";

const Experience = () => {
  return (
    <div className="resume section__padding" id="resume-experience">
      <div className="resume-menu">
        <Menu />
      </div>
      <div className="resume-content">
        <JobTable />
      </div>
    </div>
  );
};

export default Experience;
