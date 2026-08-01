import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="container navbar" aria-label="Main navigation">
          <a className="brand" href="#home">
            Jay-Ar Bote
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container">
            <p className="section-label">BIM × SOFTWARE DEVELOPMENT</p>

            <h1>BIM Specialist building practical software solutions</h1>

            <p className="hero-description">
              I combine construction and BIM experience with web development,
              automation, and AI to solve real industry problems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View my projects
              </a>

              <a className="button button-secondary" href="#about">
                Learn more about me
              </a>
            </div>
          </div>
        </section>

        <section className="section section-placeholder" id="about">
          <div className="container">
            <p className="section-label">01 / ABOUT</p>
            <h2>About me</h2>
            <p>This section will introduce my BIM-to-software journey.</p>
          </div>
        </section>

        <section className="section section-placeholder" id="skills">
          <div className="container">
            <p className="section-label">02 / SKILLS</p>
            <h2>Technical skills</h2>
            <p>This section will organize my development and BIM capabilities.</p>
          </div>
        </section>

        <section className="section section-placeholder" id="projects">
          <div className="container">
            <p className="section-label">03 / PROJECTS</p>
            <h2>Featured projects</h2>
            <p>This section will present completed, active, and planned work.</p>
          </div>
        </section>

        <section className="section section-placeholder" id="journey">
          <div className="container">
            <p className="section-label">04 / JOURNEY</p>
            <h2>Learning journey</h2>
            <p>This section will show my professional development milestones.</p>
          </div>
        </section>

        <section className="section section-placeholder" id="contact">
          <div className="container">
            <p className="section-label">05 / CONTACT</p>
            <h2>Let’s connect</h2>
            <p>This section will provide my professional contact links.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2026 Jay-Ar Bote. Built with React and Vite.</p>
        </div>
      </footer>
    </>
  );
}

export default App;