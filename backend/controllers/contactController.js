const pool = require("../db");


// ======================================================
// CREATE CONTACT MESSAGE
// PUBLIC
// ======================================================

async function createContactMessage(req, res) {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO contact_messages (
        name,
        email,
        phone,
        subject,
        message
      )

      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5
      )

      RETURNING
        id,
        name,
        email,
        phone,
        subject,
        message,
        is_read AS "isRead",
        created_at AS "createdAt"
      `,
      [
        name,
        email,
        phone,
        subject,
        message,
      ]
    );

    res.status(201).json({
      message: "Message sent successfully",
      contact: result.rows[0],
    });

  } catch (error) {
    console.error(
      "Contact form error:",
      error
    );

    res.status(500).json({
      message: "Server error",
    });
  }
}


// ======================================================
// GET ALL CONTACT MESSAGES
// ADMIN ONLY
// ======================================================

async function getContactMessages(req, res) {
  try {
    const result = await pool.query(
      `
      SELECT
        id,
        name,
        email,
        phone,
        subject,
        message,
        is_read AS "isRead",
        created_at AS "createdAt"

      FROM contact_messages

      ORDER BY created_at DESC
      `
    );

    res.json(result.rows);

  } catch (error) {
    console.error(
      "Error getting contact messages:",
      error
    );

    res.status(500).json({
      message: "Server error",
    });
  }
}


// ======================================================
// MARK MESSAGE AS READ
// ADMIN ONLY
// ======================================================

async function markMessageAsRead(req, res) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        message: "Invalid message ID",
      });
    }

    const result = await pool.query(
      `
      UPDATE contact_messages

      SET is_read = TRUE

      WHERE id = $1

      RETURNING
        id,
        name,
        email,
        phone,
        subject,
        message,
        is_read AS "isRead",
        created_at AS "createdAt"
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.json({
      message: "Message marked as read",
      contact: result.rows[0],
    });

  } catch (error) {
    console.error(
      "Error marking message as read:",
      error
    );

    res.status(500).json({
      message: "Server error",
    });
  }
}


// ======================================================
// DELETE MESSAGE
// ADMIN ONLY
// ======================================================

async function deleteContactMessage(req, res) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        message: "Invalid message ID",
      });
    }

    const result = await pool.query(
      `
      DELETE FROM contact_messages

      WHERE id = $1

      RETURNING id
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.json({
      message:
        "Message deleted successfully",
    });

  } catch (error) {
    console.error(
      "Error deleting message:",
      error
    );

    res.status(500).json({
      message: "Server error",
    });
  }
}


module.exports = {
  createContactMessage,
  getContactMessages,
  markMessageAsRead,
  deleteContactMessage,
};