import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function HomeCTA() {
  const { t } = useTranslation()

  return (
    <section className="home-cta">
      <div className="home-cta-inner">
        <div className="home-cta-copy">
          <p className="home-cta-eyebrow">
            {t("homeCta.eyebrow")}
          </p>

          <h2>
            {t("homeCta.title1")}
            <span>
              {t("homeCta.title2")}
            </span>
          </h2>

          <p>
            {t("homeCta.description")}
          </p>
        </div>

        <div className="home-cta-actions">
          <Link
            to="/projects"
            className="home-cta-primary"
          >
            {t("homeCta.projects")}
            <span>→</span>
          </Link>

          <Link
            to="/contact"
            className="home-cta-secondary"
          >
            {t("homeCta.contact")}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA