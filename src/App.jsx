import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
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
        <Journey /> 
        <Contact />
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