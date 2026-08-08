function ProjectCard({ project }) {
  const hasProjectLinks = project.repositoryUrl || project.liveUrl;

  return (
    <article className="project-card">
      <div className="project-card-top">
        <p className="project-category">{project.category}</p>

        <span className={`project-status status-${project.statusKey}`}>
          {project.status}
        </span>
      </div>

      <h3>{project.title}</h3>

      <p className="project-description">{project.description}</p>

        <ul
          className="project-tech-list"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

      <div className="project-card-footer">
        {hasProjectLinks ? (
          <div className="project-card-links">
            {project.repositoryUrl && (
              <a
                className="project-link"
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} GitHub repository in a new tab`}
              >
                GitHub repository
              </a>
            )}

            {project.liveUrl && (
              <a
                className="project-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo in a new tab`}
              >
                Live demo
              </a>
            )}
          </div>
        ) : (
          <p className="project-link-note">
            Repository or case study coming soon.
          </p>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;