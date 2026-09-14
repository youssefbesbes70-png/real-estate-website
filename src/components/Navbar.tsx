import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Archytas Immobilière</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar