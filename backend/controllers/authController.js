const bcrypt =
  require("bcryptjs");

const jwt =
  require("jsonwebtoken");

const pool =
  require("../db");

async function login(
  req,
  res
) {
  try {
    const {
      username,
      password,
    } = req.body;

    const result =
      await pool.query(
        `
        SELECT
          id,
          username,
          password_hash

        FROM admins

        WHERE username = $1
        `,
        [username]
      );

    if (
      result.rows.length === 0
    ) {
      return res
        .status(401)
        .json({
          message:
            "Invalid username or password",
        });
    }

    const admin =
      result.rows[0];

    const passwordMatches =
      await bcrypt.compare(
        password,
        admin.password_hash
      );

    if (!passwordMatches) {
      return res
        .status(401)
        .json({
          message:
            "Invalid username or password",
        });
    }

    if (!process.env.JWT_SECRET) {
      console.error(
        "JWT_SECRET is missing"
      );

      return res
        .status(500)
        .json({
          message:
            "Server configuration error",
        });
    }

    const token =
      jwt.sign(
        {
          adminId:
            admin.id,

          username:
            admin.username,
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "2h",
        }
      );

    res.json({
      message:
        "Login successful",

      token,

      admin: {
        id: admin.id,
        username:
          admin.username,
      },
    });
  } catch (error) {
    console.error(
      "Login error:",
      error
    );

    res
      .status(500)
      .json({
        message:
          "Server error",
      });
  }
}

function verify(
  req,
  res
) {
  res.json({
    valid: true,

    admin: {
      id:
        req.admin.adminId,

      username:
        req.admin.username,
    },
  });
}

module.exports = {
  login,
  verify,
};