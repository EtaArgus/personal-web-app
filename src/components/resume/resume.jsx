import React from "react";
import jobs from "../../data/jobs";
import skills from "../../data/skills";
import studies from "../../data/studies";
import "./resume.css";

const Resume = () => {
  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Resume</p>
        <h1 className="page-title">
          Data science for mining, banking and retail.
        </h1>
      </header>

      <div className="resume">
        <section className="resume-main" aria-labelledby="resume-experience">
          <h2 className="resume-heading" id="resume-experience">
            Experience
          </h2>
          {jobs.map((job) => (
            <article className="job" key={job.job_id}>
              <p className="meta job-dates">{job.dates}</p>
              <div className="job-body">
                <h3 className="job-position">{job.position}</h3>
                <p className="job-company">
                  {job.company_name} · {job.location}
                </p>
                <ul className="job-accomplishments">
                  {job.accomplishments.map((accomplishment) => (
                    <li key={accomplishment}>{accomplishment}</li>
                  ))}
                </ul>
                <p className="meta">{job.tech_stack.join(" · ")}</p>
              </div>
            </article>
          ))}
        </section>

        <aside className="resume-aside">
          <section className="resume-panel">
            <h2 className="resume-panelTitle">Studies</h2>
            {studies.map((study) => (
              <div className="study" key={study.study_id}>
                <p className="study-degree">{study.degree}</p>
                <p className="study-detail">
                  {study.university} · {study.date}
                </p>
              </div>
            ))}
          </section>

          <section className="resume-panel">
            <h2 className="resume-panelTitle">Skills</h2>
            {skills.map((skill) => (
              <div className="skill" key={skill.group}>
                <p className="meta">{skill.group}</p>
                <p>{skill.items}</p>
              </div>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Resume;
