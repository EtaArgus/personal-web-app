import React from "react";
import data from "../../../data/jobs.js";
import "./jobTable.css";

function JobTable() {
  return (
    <div className="jobTable">
      {data.map((job) => (
        <table className="gradient__bg" key={job.job_id}>
          <thead>
            <tr>
              <td colSpan="3">
                <h4>{job.position}</h4>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="jobTable-td-highlight"
                style={{ textAlign: "left" }}
              >
                {job.company_name}
              </td>
              <td>
                <i className="fa-regular fa-calendar-days"></i> {job.dates}
              </td>
              <td>
                <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                {job.location}
              </td>
            </tr>
            <tr>
              <td colSpan="3" style={{ textAlign: "left" }}>
                {job.accomplishments.map((acc) => (
                  <li key={acc}>{acc}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td colSpan="3" style={{ textAlign: "left" }}>
                {job.tech_stack.map((tech, index) => (
                  <span className="jobTable-span-techSstack" key={tech}>
                    {tech}
                  </span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default JobTable;
