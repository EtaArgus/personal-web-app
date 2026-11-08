import { useLocation } from "react-router-dom";
import socialLinks from "../../data/socialLinks";
import "./footer.css";

const Footer = () => {
  const { pathname } = useLocation();

  // The contact page already lists these links as its main content.
  if (pathname === "/contact") return null;

  return (
    <div className="page">
      <footer className="footer">
        <p className="footer-title">Let's talk.</p>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className="footer-link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
