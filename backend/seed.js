const pool = require("./db");
const projects = require("./data/projects");

async function seedDatabase() {
  try {
    for (const project of projects) {
      await pool.query(
        `
        INSERT INTO projects (
          slug,
          title,
          location,
          status,
          price,
          apartments,
          delivery_date,
          cover_image,
          description,
          map_embed_url,
          project_images,
          apartment_units
        )
        VALUES (
          $1, $2, $3, $4, $5, $6,
          $7, $8, $9, $10, $11, $12
        )
        ON CONFLICT (slug)
        DO UPDATE SET
          title = EXCLUDED.title,
          location = EXCLUDED.location,
          status = EXCLUDED.status,
          price = EXCLUDED.price,
          apartments = EXCLUDED.apartments,
          delivery_date = EXCLUDED.delivery_date,
          cover_image = EXCLUDED.cover_image,
          description = EXCLUDED.description,
          map_embed_url = EXCLUDED.map_embed_url,
          project_images = EXCLUDED.project_images,
          apartment_units = EXCLUDED.apartment_units
        `,
        [
          project.slug,
          project.title,
          project.location,
          project.status,
          project.price,
          project.apartments,
          project.deliveryDate,
          project.coverImage,
          project.description,
          project.mapEmbedUrl,
          JSON.stringify(project.projectImages),
          JSON.stringify(project.apartmentUnits),
        ]
      );

      console.log(`Added: ${project.title}`);
    }

    console.log("Database seeded successfully ✅");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await pool.end();
  }
}

seedDatabase();