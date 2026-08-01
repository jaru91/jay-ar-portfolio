import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />

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