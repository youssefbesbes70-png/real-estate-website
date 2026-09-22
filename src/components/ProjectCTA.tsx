import { Link } from "react-router-dom"

type ProjectCTAProps = {
  title: string
}

function ProjectCTA({
  title,
}: ProjectCTAProps) {
  return (
    <section className="project-cta">
      <div className="project-cta-content">
        <p className="project-section-eyebrow">
          INTERESTED IN THIS PROJECT?
        </p>

        <h2>
          Make {title}
          <span> your next home.</span>
        </h2>

        <p>
          Contact our team for more information about
          availability, apartment types, plans, and the
          reservation process.
        </p>
      </div>

      <div className="project-cta-actions">
        <Link
          to="/contact"
          className="project-cta-primary"
        >
          Contact our team
          <span>→</span>
        </Link>

        <Link
          to="/projects"
          className="project-cta-secondary"
        >
          View other projects
        </Link>
      </div>
    </section>
  )
}

export default ProjectCTA