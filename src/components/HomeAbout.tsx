import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function HomeAbout() {
  const { t } = useTranslation()

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
          {t("aboutHome.eyebrow")}
        </p>

        <h2>
          {t("aboutHome.title1")}
          <span>{t("aboutHome.title2")}</span>
        </h2>

        <p className="home-about-description">
          {t("aboutHome.description")}
        </p>

        <Link
          to="/about"
          className="home-about-link"
        >
          {t("aboutHome.story")}
          <span>→</span>
        </Link>

        <div className="home-about-stats">
          <div>
            <strong>15+</strong>
            <span>{t("aboutHome.years")}</span>
          </div>

          <div>
            <strong>10</strong>
            <span>{t("aboutHome.projects")}</span>
          </div>

          <div>
            <strong>200+</strong>
            <span>{t("aboutHome.clients")}</span>
          </div>

          <div>
            <strong>200+</strong>
            <span>{t("aboutHome.apartments")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout