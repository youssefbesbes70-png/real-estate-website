import { useState } from "react"

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Get in touch with our team for more information about our projects,
          availability, and apartment reservations.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Our Office</h2>
          <p><strong>Phone:</strong> +216 12 345 678</p>
          <p><strong>Email:</strong> contact@dreambuild.com</p>
          <p><strong>Address:</strong> Tunis, Tunisia</p>

          <div className="contact-map">
            <h3>Find Us on the Map</h3>
            <iframe
              src="https://www.google.com/maps?q=Tunis,Tunisia&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location map"
            ></iframe>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows={6} required></textarea>

          <button type="submit">Send Message</button>

          {isSubmitted && (
            <p className="success-message">
              Your message has been sent successfully.
            </p>
          )}
        </form>
      </section>
    </div>
  )
}

export default Contact