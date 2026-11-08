import React from "react";
import { Link } from "react-router-dom";
import youtubeLinks from "../../data/youtubeLinks.json";
import "./header.css";
import StarChart from "./starChart";

const selectedWork = [
  {
    label: "Cencosud · Forecasting",
    headline: "2 h → 6 s",
    highlight: true,
    description:
      "Automated SKU distribution schedules from distribution centers to supermarkets in Argentina.",
  },
  {
    label: "Molycop · Machine learning",
    headline: "Predicting a SAG mill",
    description:
      "Models for power draw, throughput and pebble rate, plus analysis of unproductive operating states.",
  },
  {
    label: "Banco Security · Customers",
    headline: "Lifetime value and churn",
    description:
      "Led the predictive models and helped define the analytics tech stack and project portfolio.",
  },
];

const tracks = Object.keys(youtubeLinks);

const Header = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Carlos Tolvett · Santiago, Chile</p>
          <h1 className="hero-title">Take the time to play the right notes.</h1>
          <p className="hero-intro">
            I lead advanced analytics at Cencosud, building forecasting and
            optimization models for retail operations. I also write and record
            music as Eta Argus.
          </p>
          <div className="hero-actions">
            <Link to="/resume" className="btn btn--primary">
              See my work
            </Link>
            <Link to="/music" className="btn btn--secondary">
              Listen to the music
            </Link>
          </div>
        </div>
        <figure className="hero-chart">
          <StarChart />
          <figcaption className="meta">
            η Argus · RA 10h 45m · Dec −59° 41′
          </figcaption>
        </figure>
      </section>

      <section className="home-section">
        <h2 className="section-title home-sectionTitle">Selected work</h2>
        <div className="work-grid">
          {selectedWork.map((work) => (
            <article className="work-card" key={work.label}>
              <p className="meta">{work.label}</p>
              <p
                className={
                  work.highlight
                    ? "work-headline work-headline--highlight"
                    : "work-headline"
                }
              >
                {work.headline}
              </p>
              <p className="work-description">{work.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-teasers">
        <div>
          <h2 className="section-title">Music</h2>
          <p className="home-teaserText">
            {tracks.length} pieces, from {tracks[0]} to{" "}
            {tracks[tracks.length - 1]}.
          </p>
          <Link to="/music" className="text-link">
            Open the player
          </Link>
        </div>
        <div>
          <h2 className="section-title">Experiments</h2>
          <p className="home-teaserText">
            Small things built to learn. Start with the live weather lookup.
          </p>
          <Link to="/experiments" className="text-link">
            Try the weather app
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Header;
