import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Navbar() {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    const nextLanguage =
      i18n.language === "fr" ? "en" : "fr"

    i18n.changeLanguage(nextLanguage)

    localStorage.setItem(
      "language",
      nextLanguage
    )
  }

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink
          to="/"
          className="navbar-brand"
        >
          <img
            src="/archytas-logo.png"
            alt="Archytas Immobilière"
            className="navbar-logo"
          />

          <span>
            Archytas Immobilière
          </span>
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            {t("navbar.home")}
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            {t("navbar.projects")}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            {t("navbar.about")}
          </NavLink>

          <NavLink
            to="/contact"
            className="nav-contact-button"
          >
            {t("navbar.contact")}
          </NavLink>

          <button
            type="button"
            className="language-switcher"
            onClick={changeLanguage}
            aria-label="Change language"
          >
            {i18n.language === "fr"
              ? "EN"
              : "FR"}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar