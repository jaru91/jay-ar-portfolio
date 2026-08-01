import journeyMilestones from "../data/journey";

function Journey() {
  return (
    <section
      className="section journey-section"
      id="journey"
      aria-labelledby="journey-heading"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">04 / JOURNEY</p>

          <h2 id="journey-heading">
            From engineering and BIM to software development
          </h2>

          <p className="section-description">
            Each stage of my career has added another layer to how I understand
            and solve problems—from physical construction to digital workflows
            and software applications.
          </p>
        </div>

        <ol className="journey-timeline">
          {journeyMilestones.map((milestone) => (
            <li className="journey-item" key={milestone.id}>
              <div className="journey-marker" aria-hidden="true" />

              <div className="journey-period">
                <span>{milestone.period}</span>
              </div>

              <article className="journey-content">
                <p className="journey-type">{milestone.type}</p>

                <h3>{milestone.title}</h3>

                <p className="journey-organization">
                  {milestone.organization}
                </p>

                <p className="journey-description">
                  {milestone.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;