import { useNavigate } from "react-router-dom"

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>We Build Spaces You Can Call Home</h2>
        <p>
          Discover our residential projects, built with quality and designed for
          modern living.
        </p>

        <button onClick={() => navigate("/projects")} className="hero-button">
          Explore Projects
        </button>
      </div>
    </section>
  )
}

export default Hero