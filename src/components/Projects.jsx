import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      className="section projects-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">03 / PROJECTS</p>

          <h2 id="projects-heading">
            Practical projects supporting my career transition
          </h2>

          <p className="section-description">
            These projects document what I have built, what I am currently
            improving, and how I plan to connect BIM knowledge with software
            development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;