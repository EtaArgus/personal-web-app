import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => (
  <div className="menu-links gradient__bg">
    <p>
      <Link to="/resume">Experience</Link>
    </p>
    <p>
      <Link to="/resume/studies">Studies</Link>
    </p>
    <p>
      <Link to="/resume/skills">Skills</Link>
    </p>
    <p>
      <Link to="/resume/projects">Projects</Link>
    </p>
  </div>
);

export default Menu;
