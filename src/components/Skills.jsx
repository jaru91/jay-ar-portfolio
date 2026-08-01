import skillGroups from "../data/skills";

function Skills() {
  return (
    <section
      className="section skills-section"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">02 / SKILLS</p>

          <h2 id="skills-heading">
            Skills connecting construction and technology
          </h2>

          <p className="section-description">
            My experience combines BIM and digital construction knowledge with
            developing full-stack, database, and AI capabilities.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.id}>
              <h3>{group.title}</h3>

              <p className="skill-card-description">{group.description}</p>

              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;