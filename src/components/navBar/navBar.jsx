import { Link } from "react-router-dom";
import gitHubIcon from "../../assets/icons8-github-240.svg";
import linkedInIcon from "../../assets/icons8-linkedin-240.svg";
import twitterIcon from "../../assets/icons8-twitter-240.svg";
import logo from "../../assets/logo-rick-sanchez-400.svg";
import "./navBar.css";

const Menu = () => (
  <>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/resume">Resume</Link>
    </p>
    <p>
      <Link to="/ai">AI</Link>
    </p>
    <p>
      <Link to="/music">Music</Link>
    </p>
    <p>
      <Link to="/contact">Contact</Link>
    </p>
  </>
);

const SocialMediaIcons = () => (
  <>
    <a
      href="https://github.com/EtaArgus"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={gitHubIcon} alt="GitHub" />
    </a>
    <a
      href="https://www.linkedin.com/in/carlostolvett/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedInIcon} alt="LinkedIn" />
    </a>
    <a
      href="https://twitter.com/LugoLian"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={twitterIcon} alt="Twitter" />
    </a>
  </>
);

const NavBar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-icons">
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default NavBar;
