const { z } = require("zod");

const optionalUrl = z
  .string()
  .trim()
  .refine(
    (value) => {
      if (value === "") {
        return true;
      }

      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    {
      message: "Must be a valid URL",
    }
  );

const apartmentSchema = z.object({
  type: z
    .string()
    .trim()
    .min(1, "Apartment type is required")
    .max(50),

  images: z
    .array(optionalUrl)
    .max(30),

  plan: optionalUrl,

  available: z.boolean(),

  floor: z
    .string()
    .trim()
    .max(100),

  surface: z
    .string()
    .trim()
    .max(100),
});

const projectFields = {
  title: z
    .string()
    .trim()
    .min(
      2,
      "Title must contain at least 2 characters"
    )
    .max(150),

  location: z
    .string()
    .trim()
    .max(150),

  status: z.enum([
    "available",
    "sold",
  ]),

  price: z
    .string()
    .trim()
    .max(100),

  apartments: z
    .number()
    .int(
      "Apartments must be a whole number"
    )
    .min(
      0,
      "Apartments cannot be negative"
    )
    .max(10000),

  deliveryDate: z
    .string()
    .trim()
    .max(100),

  coverImage: optionalUrl,

  description: z
    .string()
    .trim()
    .max(5000),

  mapEmbedUrl: optionalUrl,

  projectImages: z
    .array(optionalUrl)
    .max(50),

  apartmentUnits: z
    .array(apartmentSchema)
    .max(200),
};

const createProjectSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must look like: green-city"
    ),

  ...projectFields,
});

const updateProjectSchema = z.object({
  ...projectFields,
});

const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1)
    .max(100),

  password: z
    .string()
    .min(8)
    .max(200),
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .max(100),

  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255),

  phone: z
    .string()
    .trim()
    .max(50)
    .optional()
    .default(""),

  subject: z
    .string()
    .trim()
    .max(200)
    .optional()
    .default(""),

  message: z
    .string()
    .trim()
    .min(
      10,
      "Message must contain at least 10 characters"
    )
    .max(5000),
});

module.exports = {
  createProjectSchema,
  updateProjectSchema,
  loginSchema,
  contactSchema,
};