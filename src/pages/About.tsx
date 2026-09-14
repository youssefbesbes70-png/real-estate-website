import StatCard from "../components/StatCard"

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are a real estate developer focused on building high-quality
          residential projects designed for modern living.
        </p>
      </section>

      <section className="about-stats">
        <StatCard end={10} suffix="+" label="Years of Experience" />
        <StatCard end={15} label="Projects Completed" />
        <StatCard end={300} suffix="+" label="Satisfied Clients" />
        <StatCard end={500} suffix="+" label="Apartments Delivered" />
      </section>

      <section className="about-description">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create modern, comfortable, and high-quality living
          spaces that meet the needs of families and investors.
        </p>

        <h2>Why Choose Us</h2>
        <ul>
          <li>✔ High-quality construction</li>
          <li>✔ Prime locations</li>
          <li>✔ Modern architecture</li>
          <li>✔ Trusted by hundreds of clients</li>
        </ul>
      </section>
    </div>
  )
}

export default About