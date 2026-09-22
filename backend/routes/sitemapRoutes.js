const express = require("express")
const pool = require("../db")

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT slug
      FROM projects
      ORDER BY id
    `)

    const baseUrl =
      "https://www.archytas-immobiliere.com"

    const staticPages = [
      "",
      "/projects",
      "/about",
      "/contact",
    ]

    const projectPages =
      result.rows.map(
        (project) =>
          `/projects/${project.slug}`
      )

    const allPages = [
      ...staticPages,
      ...projectPages,
    ]

    const urls = allPages
      .map((path) => {
        return `
  <url>
    <loc>${baseUrl}${path}</loc>
  </url>`
      })
      .join("")

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

    res.set(
      "Content-Type",
      "application/xml"
    )

    res.set(
      "Cache-Control",
      "public, max-age=300"
    )

    res.send(sitemap)
  } catch (error) {
    console.error(
      "Error generating sitemap:",
      error
    )

    res.status(500).send(
      "Unable to generate sitemap"
    )
  }
})

module.exports = router