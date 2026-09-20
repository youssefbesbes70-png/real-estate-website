const {
  rateLimit,
} = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 5,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    message:
      "Too many messages sent. Please try again later.",
  },
});

module.exports = contactLimiter;