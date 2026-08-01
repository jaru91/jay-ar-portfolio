function Navbar() {
  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Jay-Ar Bote — Home">
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
  );
}

export default Navbar;