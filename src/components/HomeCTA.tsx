import { Link } from "react-router-dom"

function HomeCTA() {
  return (
    <section className="home-cta">
      <div className="home-cta-inner">
        <div className="home-cta-copy">
          <p className="home-cta-eyebrow">
            YOUR NEXT HOME
          </p>

          <h2>
            Looking for a place
            <span> that feels right?</span>
          </h2>

          <p>
            Discover our available residences or speak directly with
            our team about your next property.
          </p>
        </div>

        <div className="home-cta-actions">
          <Link
            to="/projects"
            className="home-cta-primary"
          >
            Explore Projects
            <span>→</span>
          </Link>

          <Link
            to="/contact"
            className="home-cta-secondary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA