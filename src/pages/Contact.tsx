import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

import API_URL from "../config"

function Contact() {
  const { t } = useTranslation()

  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [subject, setSubject] =
    useState("")

  const [message, setMessage] =
    useState("")

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false)

  const [
    isSubmitted,
    setIsSubmitted,
  ] = useState(false)

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
      const response =
        await fetch(
          `${API_URL}/api/contact`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
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

      const data =
        await response.json()

      if (!response.ok) {
        if (
          data.errors &&
          Array.isArray(
            data.errors
          )
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
            t(
              "contactPage.genericError"
            )
        )
      }

      setIsSubmitted(true)

      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (error) {
      if (
        error instanceof Error
      ) {
        setError(
          error.message
        )
      } else {
        setError(
          t(
            "contactPage.genericError"
          )
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
          {t(
            "seo.contact.title"
          )}
        </title>

        <meta
          name="description"
          content={t(
            "seo.contact.description"
          )}
        />

        <link
          rel="canonical"
          href="https://www.archytas-immobiliere.com/contact"
        />

        <meta
          property="og:title"
          content={t(
            "seo.contact.title"
          )}
        />

        <meta
          property="og:description"
          content={t(
            "seo.contact.description"
          )}
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
              {t(
                "contactPage.eyebrow"
              )}
            </p>

            <h1>
              {t(
                "contactPage.title1"
              )}

              <span>
                {t(
                  "contactPage.title2"
                )}
              </span>
            </h1>
          </div>

          <p className="contact-intro-copy">
            {t(
              "contactPage.intro"
            )}
          </p>
        </section>

        <section className="contact-details-strip">
          <div>
            <span>
              {t(
                "contactPage.phone"
              )}
            </span>

            <a href="tel:+21627717792">
              +216 27 717 792
            </a>
          </div>

          <div>
            <span>
              {t(
                "contactPage.email"
              )}
            </span>

            <a href="mailto:archytas.immobiliere@gmail.com">
              archytas.immobiliere@gmail.com
            </a>
          </div>

          <div>
            <span>
              {t(
                "contactPage.office"
              )}
            </span>

            <p>
              Av Hedi nouira ,Residence le diamant app A31 2037 Ariana Tunis - Tunisie
            </p>
          </div>
        </section>

        <section className="contact-main">
          <div className="contact-map-redesign">
            <div className="contact-section-heading">
              <p className="section-eyebrow">
                {t(
                  "contactPage.officeEyebrow"
                )}
              </p>

              <h2>
                {t(
                  "contactPage.officeTitle"
                )}
              </h2>
            </div>

            <iframe
              src="https://maps.app.goo.gl/BnNaShqw1VeAsoeF7"
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
                {t(
                  "contactPage.formEyebrow"
                )}
              </p>

              <h2>
                {t(
                  "contactPage.formTitle"
                )}
              </h2>

              <p>
                {t(
                  "contactPage.formIntro"
                )}
              </p>
            </div>

            <form
              className="contact-form-redesign"
              onSubmit={
                handleSubmit
              }
            >
              <div className="contact-field">
                <label htmlFor="contact-name">
                  {t(
                    "contactPage.name"
                  )}
                </label>

                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(
                    event
                  ) =>
                    setName(
                      event.target
                        .value
                    )
                  }
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  {t(
                    "contactPage.emailField"
                  )}
                </label>

                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(
                    event
                  ) =>
                    setEmail(
                      event.target
                        .value
                    )
                  }
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  {t(
                    "contactPage.subject"
                  )}
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(
                    event
                  ) =>
                    setSubject(
                      event.target
                        .value
                    )
                  }
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  {t(
                    "contactPage.message"
                  )}
                </label>

                <textarea
                  id="contact-message"
                  rows={6}
                  value={message}
                  onChange={(
                    event
                  ) =>
                    setMessage(
                      event.target
                        .value
                    )
                  }
                  required
                />
              </div>

              <button
                type="submit"
                disabled={
                  isSubmitting
                }
              >
                <span>
                  {isSubmitting
                    ? t(
                        "contactPage.sending"
                      )
                    : t(
                        "contactPage.send"
                      )}
                </span>

                {!isSubmitting && (
                  <span className="contact-submit-arrow">
                    →
                  </span>
                )}
              </button>

              {isSubmitted && (
                <p className="success-message">
                  {t(
                    "contactPage.success"
                  )}
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