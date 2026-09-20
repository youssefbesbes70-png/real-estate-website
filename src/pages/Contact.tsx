import { useState } from "react"
import API_URL from "../config"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    setIsSubmitting(true)
    setIsSubmitted(false)
    setError("")

    try {
      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            phone: "",
            subject,
            message,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Something went wrong"
        )
      }

      setIsSubmitted(true)

      // Clear the form
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError(
          "Something went wrong. Please try again."
        )
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Contact Us</h1>

        <p>
          Get in touch with our team for more
          information about our projects,
          availability, and apartment reservations.
        </p>
      </section>


      <section className="contact-content">

        {/* ============================= */}
        {/* CONTACT INFORMATION */}
        {/* ============================= */}

        <div className="contact-info">

          <h2>Our Office</h2>

          <p>
            <strong>Phone:</strong>{" "}
            +216 12 345 678
          </p>

          <p>
            <strong>Email:</strong>{" "}
            contact@dreambuild.com
          </p>

          <p>
            <strong>Address:</strong>{" "}
            Tunis, Tunisia
          </p>


          <div className="contact-map">

            <h3>
              Find Us on the Map
            </h3>

            <iframe
              src="https://www.google.com/maps?q=Tunis,Tunisia&output=embed"
              width="100%"
              height="300"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location map"
            />

          </div>

        </div>


        {/* ============================= */}
        {/* CONTACT FORM */}
        {/* ============================= */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h2>
            Send Us a Message
          </h2>


          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            required
          />


          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />


          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(event) =>
              setSubject(event.target.value)
            }
            required
          />


          <textarea
            placeholder="Your Message"
            rows={6}
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            required
          />


          <button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Sending..."
              : "Send Message"}
          </button>


          {/* SUCCESS */}

          {isSubmitted && (
            <p className="success-message">
              Your message has been sent successfully.
            </p>
          )}


          {/* ERROR */}

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

        </form>

      </section>

    </div>
  )
}

export default Contact