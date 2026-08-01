function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-content">
        <p className="section-label">BIM × SOFTWARE DEVELOPMENT</p>

        <p className="hero-introduction">Hello, I’m Jay-Ar Bote.</p>

        <h1>
          BIM Specialist building{" "}
          <span className="accent-text">practical software solutions</span>
        </h1>

        <p className="hero-description">
          I combine construction and BIM experience with web development,
          automation, and AI to create useful solutions for real industry
          challenges.
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
  );
}

export default Hero;