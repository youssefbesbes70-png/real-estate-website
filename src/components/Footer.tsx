import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>{t("footer.aboutTitle")}</h3>

          <p>
            {t("footer.description")}
          </p>
        </div>

        <div className="footer-column">
          <h3>{t("footer.usefulLinks")}</h3>

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
          <h3>{t("footer.contactInfo")}</h3>

          <p>Tunis, Tunisia</p>

          <p>+216 22 250 152</p>

          <p>contact@dreambuild.com</p>
        </div>

        <div className="footer-column">
          <h3>{t("footer.salesOffice")}</h3>

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