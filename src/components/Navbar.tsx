import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
          <img
            src="/archytas-logo.png"
            alt="Archytas Immobilière"
            className="navbar-logo"
          />

          <span>Archytas Immobilière</span>
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className="nav-contact-button"
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar