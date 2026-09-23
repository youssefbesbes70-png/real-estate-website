import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>
            {t("footer.aboutTitle")}
          </h3>

          <p>
            {t("footer.description")}
          </p>
        </div>

        <div className="footer-column">
          <h3>
            {t("footer.usefulLinks")}
          </h3>

          <div className="footer-links">
            <Link to="/">
              {t("footer.home")}
            </Link>

            <Link to="/about">
              {t("footer.about")}
            </Link>

            <Link to="/projects">
              {t("footer.projects")}
            </Link>

            <Link to="/contact">
              {t("footer.contactLink")}
            </Link>
          </div>
        </div>

        <div className="footer-column">
          <h3>
            {t("footer.contactInfo")}
          </h3>

          <p>
            Av Hedi Nouira, Résidence Le Diamant,
            App A31, 2037 Ariana, Tunis - Tunisie
          </p>

          <p>
            <a href="tel:+21627717792">
              +216 27 717 792
            </a>
          </p>

          <p>
            <a href="mailto:archytas.immobiliere@gmail.com">
              archytas.immobiliere@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-column">
          <h3>
            {t("footer.salesOffice")}
          </h3>

          <p>
            {t("footer.salesDescription")}
          </p>

          <p>
            {t("footer.weekdays")}
          </p>

          <p>
            {t("footer.saturday")}
          </p>

          <p>
            {t("footer.sunday")}
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          {t("footer.copyright")}
        </p>

        <div className="footer-bottom-links">
          <Link to="/">
            {t("footer.home")}
          </Link>

          <Link to="/about">
            {t("footer.about")}
          </Link>

          <Link to="/contact">
            {t("footer.contactLink")}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer