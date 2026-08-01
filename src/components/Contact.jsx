import contactLinks from "../data/contact";

function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container contact-layout">
        <div className="contact-introduction">
          <p className="section-label">05 / CONTACT</p>

          <h2 id="contact-heading">
            Let’s connect and build something useful
          </h2>

          <p className="contact-description">
            I’m interested in opportunities and conversations that connect BIM,
            digital construction, software development, automation, and AI.
          </p>

          <p className="contact-location">
            Based in Singapore
          </p>
        </div>

        <ul className="contact-list">
          {contactLinks.map((contact) => (
            <li className="contact-item" key={contact.id}>
              <span className="contact-label">{contact.label}</span>

              {contact.href ? (
                <a
                  className="contact-link"
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noreferrer" : undefined}
                >
                  {contact.displayText}

                  {contact.external && (
                    <span className="contact-arrow" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </a>
              ) : (
                <span className="contact-unavailable">
                  {contact.displayText}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;