# Archytas Immobilière

A full-stack real estate website built for **Archytas Immobilière**, designed to showcase residential projects, available apartments, project details, and contact information through a modern bilingual interface.

## Live Website

https://www.archytas-immobiliere.com

## Overview

This project is a complete real estate platform with:

- A responsive public website
- French / English language switching
- Dynamic real estate project pages
- Apartment availability and floor plans
- Image galleries and lightbox views
- Contact form
- Admin dashboard
- Project creation, editing, and deletion
- Image uploads
- PostgreSQL database integration
- Authentication for admin access
- SEO optimization
- Dynamic sitemap generation

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- react-i18next
- react-helmet-async

### Backend

- Node.js
- Express
- PostgreSQL
- JWT authentication
- bcrypt
- Zod
- Multer

### Services

- Neon — PostgreSQL database
- Cloudinary — image storage and optimization
- Render — backend hosting
- Vercel — frontend hosting
- Cloudflare — domain and DNS

## Main Features

### Real Estate Projects

Projects are loaded dynamically from the backend and include information such as:

- Project name
- Location
- Status
- Starting price
- Delivery date
- Number of apartments
- Project description
- Project images
- Apartment types
- Floor
- Surface
- Availability
- Floor plans

### Admin Dashboard

The protected admin dashboard allows project management without modifying the source code.

Administrators can:

- Add projects
- Edit existing projects
- Delete projects
- Upload images
- Manage apartment units
- Change availability
- View contact messages

### Authentication

Admin routes are protected using JWT authentication.

Passwords are securely hashed using bcrypt.

### Image Management

Project and apartment images are uploaded to Cloudinary.

Images are automatically optimized for the website using responsive sizing and modern image formats.

### Multilingual Interface

The public website supports:

- French
- English

The selected language is saved locally so the user's preference remains active when they return to the website.

### SEO

The website includes:

- Dynamic page titles
- Meta descriptions
- Open Graph metadata
- Canonical URLs
- Structured data
- robots.txt
- Dynamic XML sitemap
- Project-specific SEO metadata

## Project Structure

```text
real_estate_website/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── config.ts
│   ├── i18n.ts
│   ├── App.tsx
│   └── main.tsx
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── db.js
│   └── server.js
│
├── public/
│
├── vercel.json
├── package.json
└── README.md
```
