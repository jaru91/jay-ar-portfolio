function About() {
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <p className="section-label">01 / ABOUT</p>

        <div className="about-layout">
          <div className="about-heading">
            <h2 id="about-heading">
              Connecting BIM experience with software development
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I’m a BIM Specialist with a civil engineering background and more
              than a decade of experience in Singapore’s construction industry.
            </p>

            <p>
              My work with digital construction tools showed me how software,
              automation, and better information management can improve
              coordination and solve repetitive industry problems.
            </p>

            <p>
              Building on my BIM experience, I have developed skills in software
              engineering, full-stack web development, databases, and AI. My
              goal is to create practical digital solutions that connect
              construction knowledge with modern technology.
            </p>

            <div className="about-focus">
              <p className="about-focus-label">CURRENT FOCUS</p>

              <ul className="focus-list">
                <li>BIM automation and digital workflows</li>
                <li>Full-stack web application development</li>
                <li>AI-enabled tools for construction and BIM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
