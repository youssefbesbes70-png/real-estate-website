import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <p>
            We are a real estate developer focused on building quality
            residential projects and delivering modern living spaces for
            families and investors.
          </p>
        </div>

        <div className="footer-column">
          <h3>USEFUL LINKS</h3>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-column">
          <h3>CONTACT INFO</h3>
          <p>Tunis, Tunisia</p>
          <p>+216 22 250 152</p>
          <p>contact@dreambuild.com</p>
        </div>

        <div className="footer-column">
          <h3>SALES OFFICE</h3>
          <p>Our commercial team is available to answer your questions.</p>
          <p>Monday - Friday: 08:00 to 17:00</p>
          <p>Saturday: 08:00 to 13:00</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 Dream Build. All rights reserved.</p>

        <div className="footer-bottom-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer