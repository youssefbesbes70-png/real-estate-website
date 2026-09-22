import { useState } from "react"
import { Helmet } from "react-helmet-async"

import API_URL from "../config"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [isSubmitted, setIsSubmitted] =
    useState(false)

  const [error, setError] =
    useState("")

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
        if (
          data.errors &&
          Array.isArray(data.errors)
        ) {
          const validationErrors =
            data.errors
              .map(
                (item: {
                  field: string
                  message: string
                }) =>
                  `${item.field}: ${item.message}`
              )
              .join(" | ")

          throw new Error(
            validationErrors
          )
        }

        throw new Error(
          data.message ||
            "Something went wrong"
        )
      }

      setIsSubmitted(true)

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
    <>
      <Helmet>
        <title>
          Contact | Archytas Immobilière
        </title>

        <meta
          name="description"
          content="Contactez Archytas Immobilière pour obtenir plus d'informations sur nos projets, nos appartements disponibles et nos résidences en Tunisie."
        />

        <link
          rel="canonical"
          href="https://www.archytas-immobiliere.com/contact"
        />

        <meta
          property="og:title"
          content="Contact | Archytas Immobilière"
        />

        <meta
          property="og:description"
          content="Contactez notre équipe pour obtenir plus d'informations sur les projets immobiliers et appartements Archytas Immobilière."
        />

        <meta
          property="og:url"
          content="https://www.archytas-immobiliere.com/contact"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main className="contact-redesign">
        <section className="contact-intro">
          <div>
            <p className="section-eyebrow">
              CONTACT
            </p>

            <h1>
              Let's talk about
              <span> your next home.</span>
            </h1>
          </div>

          <p className="contact-intro-copy">
            Have a question about one of our projects,
            apartment availability, or the reservation
            process? Our team is here to help.
          </p>
        </section>

        <section className="contact-details-strip">
          <div>
            <span>PHONE</span>

            <a href="tel:+21612345678">
              +216 12 345 678
            </a>
          </div>

          <div>
            <span>EMAIL</span>

            <a href="mailto:contact@dreambuild.com">
              contact@dreambuild.com
            </a>
          </div>

          <div>
            <span>OFFICE</span>

            <p>
              Tunis, Tunisia
            </p>
          </div>
        </section>

        <section className="contact-main">
          <div className="contact-map-redesign">
            <div className="contact-section-heading">
              <p className="section-eyebrow">
                OUR OFFICE
              </p>

              <h2>
                Find us in Tunis.
              </h2>
            </div>

            <iframe
              src="https://www.google.com/maps?q=Tunis,Tunisia&output=embed"
              width="100%"
              height="560"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Archytas Immobilière office location"
            />
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-section-heading">
              <p className="section-eyebrow">
                GET IN TOUCH
              </p>

              <h2>
                Send us a message.
              </h2>

              <p>
                Tell us what you're looking for and
                our team will get back to you.
              </p>
            </div>

            <form
              className="contact-form-redesign"
              onSubmit={handleSubmit}
            >
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Your name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Your email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(event) =>
                    setSubject(event.target.value)
                  }
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows={6}
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting
                    ? "Sending..."
                    : "Send message"}
                </span>

                {!isSubmitting && (
                  <span className="contact-submit-arrow">
                    →
                  </span>
                )}
              </button>

              {isSubmitted && (
                <p className="success-message">
                  Your message has been sent successfully.
                </p>
              )}

              {error && (
                <p className="error-message">
                  {error}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact