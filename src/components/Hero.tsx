import { useNavigate } from "react-router-dom"

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">
          ARCHYTAS IMMOBILIÈRE
        </p>

        <h1>
          We Build Spaces
          <span> Made to Last.</span>
        </h1>

        <p className="hero-description">
          Discover thoughtfully designed residential projects
          combining modern architecture, quality construction,
          and comfortable living.
        </p>

        <div className="hero-actions">
          <button
            className="hero-primary-button"
            onClick={() => navigate("/projects")}
          >
            Explore Projects
            <span>→</span>
          </button>

          <button
            className="hero-secondary-button"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>

        <div className="hero-scroll-indicator">
          <span />
          Discover Archytas
        </div>
      </div>
    </section>
  )
}

export default Hero