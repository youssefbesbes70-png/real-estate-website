import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Hero() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">
          {t("hero.eyebrow")}
        </p>

        <h1>
          {t("hero.title1")}

          <span>
            {t("hero.title2")}
          </span>
        </h1>

        <p className="hero-description">
          {t("hero.description")}
        </p>

        <div className="hero-actions">
          <button
            className="hero-primary-button"
            onClick={() => navigate("/projects")}
          >
            {t("hero.projects")}
            <span>→</span>
          </button>

          <button
            className="hero-secondary-button"
            onClick={() => navigate("/contact")}
          >
            {t("hero.contact")}
          </button>
        </div>

        <div className="hero-scroll-indicator">
          <span />
          {t("hero.discover")}
        </div>
      </div>
    </section>
  )
}

export default Hero