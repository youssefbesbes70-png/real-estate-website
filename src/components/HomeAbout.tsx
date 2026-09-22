import { Link } from "react-router-dom"

function HomeAbout() {
  return (
    <section className="home-about">
      <div className="home-about-image">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85"
          alt="Modern architecture"
          loading="lazy"
        />
      </div>

      <div className="home-about-content">
        <p className="home-about-eyebrow">
          ABOUT ARCHYTAS
        </p>

        <h2>
          Building with purpose.
          <span> Designing for everyday life.</span>
        </h2>

        <p className="home-about-description">
          Archytas Immobilière develops contemporary residential
          projects with a focus on architecture, quality, comfort,
          and long-term value.
        </p>

        <Link
          to="/about"
          className="home-about-link"
        >
          Discover our story
          <span>→</span>
        </Link>

        <div className="home-about-stats">
          <div>
            <strong>10+</strong>
            <span>Years of experience</span>
          </div>

          <div>
            <strong>15</strong>
            <span>Projects completed</span>
          </div>

          <div>
            <strong>300+</strong>
            <span>Satisfied clients</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Apartments delivered</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout