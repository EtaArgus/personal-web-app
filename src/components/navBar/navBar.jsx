import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

const links = [
  { to: "/resume", label: "Resume" },
  { to: "/music", label: "Music" },
  { to: "/experiments", label: "Experiments" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <div className="page">
      <nav className="navBar" aria-label="Main">
        <Link to="/" className="navBar-brand">
          Eta Argus
        </Link>
        <div className="navBar-links">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="navBar-link">
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
