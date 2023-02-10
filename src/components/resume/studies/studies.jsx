import React from "react";
import Menu from "../menu/menu";
import "../resume.css";

import StudyTable from './studyTable';

const Studies = () => {
  return (
    <div className="resume section__padding" id="resume-studies">
      <div className="resume-menu">
        <Menu />
      </div>
      <div className="resume-content">
        <StudyTable />
      </div>
    </div>
  );
};

export default Studies;
