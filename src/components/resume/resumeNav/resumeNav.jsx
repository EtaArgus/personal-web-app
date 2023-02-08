import { Link } from "react-router-dom";

const NavLinks = () => (
  <ul className="navbar-nav flex-column">
    <li className="nav-item">
      <Link className="nav-link" to="/link1">
        Experience
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/link2">
        Education
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/link3">
        Last Certifications
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/link4">
        Skills
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/link5">
        Free Time
      </Link>
    </li>
  </ul>
);

const ResumeNav = () => (
  <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-left mt-3 px-2">
    <NavLinks />
  </nav>
);

export default ResumeNav;
