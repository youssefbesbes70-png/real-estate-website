const bcrypt = require("bcryptjs");
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");
const pool = require("./db");

async function createAdmin() {
  const rl = readline.createInterface({
    input,
    output,
  });

  try {
    const username = (
      await rl.question("Admin username: ")
    ).trim();

    const password = await rl.question(
      "Admin password: "
    );

    if (!username) {
      console.log("Username is required");
      return;
    }

    if (password.length < 8) {
      console.log(
        "Password must contain at least 8 characters"
      );
      return;
    }

    const passwordHash = await bcrypt.hash(
      password,
      12
    );

    await pool.query(
      `
      INSERT INTO admins (
        username,
        password_hash
      )
      VALUES ($1, $2)
      ON CONFLICT (username)
      DO UPDATE SET
        password_hash = EXCLUDED.password_hash
      `,
      [username, passwordHash]
    );

    console.log("Admin created successfully ✅");
  } catch (error) {
    console.error(
      "Error creating admin:",
      error
    );
  } finally {
    rl.close();
    await pool.end();
  }
}

createAdmin();