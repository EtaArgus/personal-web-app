import React from "react";
import data from "../../../data/studies.js";
import "./studyTable.css";

function StudyTable() {
  return (
    <div className="studyTable">
      {data.map((study) => (
        <table className="gradient__bg" key={study.job_id}>
          <thead>
            <tr>
              <td colSpan="3">
                <h4>{study.university}</h4>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="studyTable-td-highlight"
                style={{ textAlign: "left" }}
              >
                {study.degree}
              </td>
            </tr>
            <tr>
              <td style={{ width: "50%" }}>
                <i className="fa-regular fa-calendar-days"></i> {study.date}
              </td>
              <td>
                <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                {study.location}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default StudyTable;
