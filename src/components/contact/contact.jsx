import socialLinks from "../../data/socialLinks";
import "./contact.css";

function Contact() {
  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Let's talk.</h1>
      </header>

      <div className="contact-links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            className="contact-link"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-linkName">{link.name}</span>
            <span className="meta">{link.handle}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
