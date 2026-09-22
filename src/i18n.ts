import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      /* =====================================================
         COMMON
      ===================================================== */

      common: {
        available: "Available",
        sold: "Sold",
        soldOut: "Sold Out",
        loading: "Loading...",
        retry: "Try Again",
        contact: "Contact",
        projects: "Projects",
        learnMore: "Learn more",
      },

      /* =====================================================
         NAVBAR
      ===================================================== */

      navbar: {
        home: "Home",
        projects: "Projects",
        about: "About Us",
        contact: "Contact",
      },

      /* =====================================================
         HOME HERO
      ===================================================== */

      hero: {
        eyebrow: "ARCHYTAS IMMOBILIÈRE",

        title1: "We Build Spaces",
        title2: "Made to Last.",

        description:
          "Discover thoughtfully designed residential projects combining modern architecture, quality construction, and comfortable living.",

        projects: "Explore Projects",
        contact: "Contact Us",
        discover: "Discover Archytas",
      },

      /* =====================================================
         FEATURED PROJECTS
      ===================================================== */

      featured: {
        eyebrow: "OUR PROJECTS",

        title: "Selected Developments",

        description:
          "Explore residences designed around contemporary architecture, thoughtful details, and comfortable living.",

        all: "View all projects",
      },

      /* =====================================================
         HOME ABOUT
      ===================================================== */

      aboutHome: {
        eyebrow: "ABOUT ARCHYTAS",

        title1: "Building with purpose.",
        title2: "Designing for everyday life.",

        description:
          "Archytas Immobilière develops contemporary residential projects with a focus on architecture, quality, comfort, and long-term value.",

        story: "Discover our story",

        years: "Years of experience",
        projects: "Projects completed",
        clients: "Satisfied clients",
        apartments: "Apartments delivered",
      },

      /* =====================================================
         WHY ARCHYTAS
      ===================================================== */

      why: {
        eyebrow: "WHY ARCHYTAS",

        title1: "Built around",
        title2: "what matters.",

        intro:
          "We focus on the details that create better places to live, from architecture and materials to location and delivery.",

        quality: "Quality",

        qualityText:
          "Carefully selected materials and attention to execution at every stage of development.",

        architecture: "Architecture",

        architectureText:
          "Contemporary residential spaces designed around comfort, function, and everyday living.",

        location: "Location",

        locationText:
          "Projects selected with accessibility, lifestyle, and long-term value in mind.",

        commitment: "Commitment",

        commitmentText:
          "A clear and reliable approach from project development through to final delivery.",
      },

      /* =====================================================
         HOME CTA
      ===================================================== */

      homeCta: {
        eyebrow: "YOUR NEXT HOME",

        title1: "Looking for a place",
        title2: "that feels right?",

        description:
          "Discover our available residences or speak directly with our team about your next property.",

        projects: "Explore Projects",
        contact: "Contact Us",
      },

      /* =====================================================
         PROJECTS PAGE
      ===================================================== */

      projectsPage: {
        available: "Available Projects",
        sold: "Sold Projects",

        errorTitle: "Something went wrong",

        errorMessage:
          "Unable to load projects. Please try again.",

        retry: "Try Again",
      },

      /* =====================================================
         PROJECT CARD
      ===================================================== */

      projectCard: {
        available: "Available",
        sold: "Sold",
        discover: "Discover Project",
      },

      /* =====================================================
         PROJECT DETAILS
      ===================================================== */

      projectDetails: {
        loading: "Loading project...",
        notFound: "Project not found",

        available: "Available",
        soldOut: "Sold Out",

        startingPrice: "Starting price",
        apartments: "Apartments",
        delivery: "Delivery",

        aboutEyebrow: "ABOUT THE PROJECT",

        aboutTitle:
          "Designed for modern living.",

        locationEyebrow: "LOCATION",

        locationTitle:
          "Explore the neighborhood.",

        locationDescription:
          "Discover the location of {{title}} and its surroundings.",

        residencesEyebrow: "RESIDENCES",

        apartmentTypesTitle:
          "Apartment types.",

        apartmentTypesDescription:
          "Explore the available layouts, surfaces, plans, and interior views for {{title}}.",

        apartmentType:
          "APARTMENT TYPE",

        floor: "Floor",
        surface: "Surface",

        photo: "photo",
        photos: "photos",

        interiorImages:
          "INTERIOR IMAGES",

        comingSoon:
          "Coming soon",

        viewFloorPlan:
          "View floor plan",

        planComingSoon:
          "Plan coming soon",

        noLongerAvailable:
          "No longer available",

        previousImage:
          "Previous image",

        nextImage:
          "Next image",

        closeGallery:
          "Close image gallery",
      },

      /* =====================================================
         PROJECT CTA
      ===================================================== */

      projectCta: {
        eyebrow:
          "INTERESTED IN THIS PROJECT?",

        title1:
          "Make {{title}}",

        title2:
          "your next home.",

        description:
          "Contact our team for more information about availability, apartment types, plans, and the reservation process.",

        contact:
          "Contact our team",

        otherProjects:
          "View other projects",
      },

      /* =====================================================
         ABOUT PAGE
      ===================================================== */

      aboutPage: {
        eyebrow:
          "ABOUT ARCHYTAS",

        title1:
          "Building spaces with",

        title2:
          "purpose and lasting value.",

        intro1:
          "Archytas Immobilière is a real estate developer focused on creating contemporary residential projects designed around quality, comfort, architecture, and everyday life.",

        intro2:
          "From the first idea through to final delivery, our approach is centered on thoughtful design, reliable execution, and long-term value.",

        years:
          "Years of experience",

        projects:
          "Projects completed",

        clients:
          "Satisfied clients",

        apartments:
          "Apartments delivered",

        missionEyebrow:
          "OUR MISSION",

        missionTitle1:
          "Creating better places",

        missionTitle2:
          "to live.",

        missionText1:
          "Our mission is to create modern, comfortable, and high-quality living spaces that respond to the needs of families, homeowners, and investors.",

        missionText2:
          "We believe good residential development starts with architecture that serves people, materials selected with care, and a clear commitment to quality from beginning to end.",

        valuesEyebrow:
          "WHAT DEFINES US",

        valuesTitle1:
          "The principles behind",

        valuesTitle2:
          "every project.",

        quality:
          "Quality",

        qualityText:
          "Carefully selected materials and attention to execution throughout every project.",

        architecture:
          "Architecture",

        architectureText:
          "Contemporary spaces designed around comfort, function, and everyday living.",

        location:
          "Location",

        locationText:
          "Projects positioned with accessibility, lifestyle, and long-term value in mind.",

        commitment:
          "Commitment",

        commitmentText:
          "A clear and reliable approach from development through to final delivery.",
      },

      /* =====================================================
         CONTACT PAGE
      ===================================================== */

      contactPage: {
        eyebrow: "CONTACT",

        title1:
          "Let's talk about",

        title2:
          "your next home.",

        intro:
          "Have a question about one of our projects, apartment availability, or the reservation process? Our team is here to help.",

        phone: "PHONE",
        email: "EMAIL",
        office: "OFFICE",

        officeEyebrow:
          "OUR OFFICE",

        officeTitle:
          "Find us in Tunis.",

        formEyebrow:
          "GET IN TOUCH",

        formTitle:
          "Send us a message.",

        formIntro:
          "Tell us what you're looking for and our team will get back to you.",

        name:
          "Your name",

        emailField:
          "Your email",

        subject:
          "Subject",

        message:
          "Message",

        send:
          "Send message",

        sending:
          "Sending...",

        success:
          "Your message has been sent successfully.",

        genericError:
          "Something went wrong. Please try again.",
      },

      /* =====================================================
         FOOTER
      ===================================================== */

      footer: {
        aboutTitle:
          "ABOUT US",

        description:
          "We are a real estate developer focused on building quality residential projects and delivering modern living spaces for families and investors.",

        usefulLinks:
          "USEFUL LINKS",

        home:
          "Home",

        about:
          "About Us",

        projects:
          "Projects",

        contactLink:
          "Contact",

        contactInfo:
          "CONTACT INFO",

        salesOffice:
          "SALES OFFICE",

        salesDescription:
          "Our commercial team is available to answer your questions.",

        weekdays:
          "Monday - Friday: 08:00 to 17:00",

        saturday:
          "Saturday: 08:00 to 13:00",

        sunday:
          "Sunday: Closed",

        copyright:
          "Copyright © 2026 Archytas Immobilière. All rights reserved.",
      },

      /* =====================================================
         SEO
      ===================================================== */

      seo: {
        home: {
          title:
            "Archytas Immobilière | Real Estate Projects in Tunisia",

          description:
            "Discover Archytas Immobilière's residential developments, residences and available apartments in Tunisia.",
        },

        projects: {
          title:
            "Our Projects | Archytas Immobilière",

          description:
            "Discover Archytas Immobilière's residential projects, available apartments and developments in Tunisia.",
        },

        about: {
          title:
            "About Us | Archytas Immobilière",

          description:
            "Discover Archytas Immobilière, our experience, mission and commitment to contemporary residential development in Tunisia.",
        },

        contact: {
          title:
            "Contact | Archytas Immobilière",

          description:
            "Contact Archytas Immobilière for information about our projects, residences and available apartments in Tunisia.",
        },
      },
    },
  },

  /* =========================================================
     FRENCH
  ========================================================= */

  fr: {
    translation: {
      /* =====================================================
         COMMON
      ===================================================== */

      common: {
        available:
          "Disponible",

        sold:
          "Vendu",

        soldOut:
          "Vendu",

        loading:
          "Chargement...",

        retry:
          "Réessayer",

        contact:
          "Contact",

        projects:
          "Projets",

        learnMore:
          "En savoir plus",
      },

      /* =====================================================
         NAVBAR
      ===================================================== */

      navbar: {
        home:
          "Accueil",

        projects:
          "Projets",

        about:
          "À propos",

        contact:
          "Contact",
      },

      /* =====================================================
         HOME HERO
      ===================================================== */

      hero: {
        eyebrow:
          "ARCHYTAS IMMOBILIÈRE",

        title1:
          "Nous créons des espaces",

        title2:
          "pensés pour durer.",

        description:
          "Découvrez des projets résidentiels conçus avec soin, alliant architecture contemporaine, qualité de construction et confort de vie.",

        projects:
          "Découvrir nos projets",

        contact:
          "Nous contacter",

        discover:
          "Découvrir Archytas",
      },

      /* =====================================================
         FEATURED PROJECTS
      ===================================================== */

      featured: {
        eyebrow:
          "NOS PROJETS",

        title:
          "Nos réalisations",

        description:
          "Découvrez des résidences pensées autour d'une architecture contemporaine, de détails soignés et d'un confort durable.",

        all:
          "Voir tous les projets",
      },

      /* =====================================================
         HOME ABOUT
      ===================================================== */

      aboutHome: {
        eyebrow:
          "À PROPOS D'ARCHYTAS",

        title1:
          "Construire avec exigence.",

        title2:
          "Concevoir pour le quotidien.",

        description:
          "Archytas Immobilière développe des projets résidentiels contemporains axés sur l'architecture, la qualité, le confort et la valeur à long terme.",

        story:
          "Découvrir notre histoire",

        years:
          "Années d'expérience",

        projects:
          "Projets réalisés",

        clients:
          "Clients satisfaits",

        apartments:
          "Appartements livrés",
      },

      /* =====================================================
         WHY ARCHYTAS
      ===================================================== */

      why: {
        eyebrow:
          "POURQUOI ARCHYTAS",

        title1:
          "Construire autour de",

        title2:
          "ce qui compte vraiment.",

        intro:
          "Nous accordons une attention particulière aux éléments qui améliorent réellement la qualité de vie : architecture, matériaux, emplacement et livraison.",

        quality:
          "Qualité",

        qualityText:
          "Des matériaux soigneusement sélectionnés et une attention portée à chaque étape de la réalisation.",

        architecture:
          "Architecture",

        architectureText:
          "Des espaces résidentiels contemporains pensés pour le confort, la fonctionnalité et la vie quotidienne.",

        location:
          "Emplacement",

        locationText:
          "Des projets choisis en tenant compte de l'accessibilité, du cadre de vie et de la valeur à long terme.",

        commitment:
          "Engagement",

        commitmentText:
          "Une approche claire et fiable, du développement du projet jusqu'à sa livraison.",
      },

      /* =====================================================
         HOME CTA
      ===================================================== */

      homeCta: {
        eyebrow:
          "VOTRE PROCHAIN CHEZ-VOUS",

        title1:
          "À la recherche d'un lieu",

        title2:
          "qui vous ressemble ?",

        description:
          "Découvrez nos résidences disponibles ou échangez directement avec notre équipe au sujet de votre prochain bien immobilier.",

        projects:
          "Découvrir les projets",

        contact:
          "Nous contacter",
      },

      /* =====================================================
         PROJECTS PAGE
      ===================================================== */

      projectsPage: {
        available:
          "Projets disponibles",

        sold:
          "Projets vendus",

        errorTitle:
          "Une erreur est survenue",

        errorMessage:
          "Impossible de charger les projets. Veuillez réessayer.",

        retry:
          "Réessayer",
      },

      /* =====================================================
         PROJECT CARD
      ===================================================== */

      projectCard: {
        available:
          "Disponible",

        sold:
          "Vendu",

        discover:
          "Découvrir le projet",
      },

      /* =====================================================
         PROJECT DETAILS
      ===================================================== */

      projectDetails: {
        loading:
          "Chargement du projet...",

        notFound:
          "Projet introuvable",

        available:
          "Disponible",

        soldOut:
          "Vendu",

        startingPrice:
          "Prix à partir de",

        apartments:
          "Appartements",

        delivery:
          "Livraison",

        aboutEyebrow:
          "À PROPOS DU PROJET",

        aboutTitle:
          "Pensé pour un mode de vie moderne.",

        locationEyebrow:
          "EMPLACEMENT",

        locationTitle:
          "Découvrez le quartier.",

        locationDescription:
          "Découvrez l'emplacement de {{title}} et son environnement.",

        residencesEyebrow:
          "RÉSIDENCES",

        apartmentTypesTitle:
          "Types d'appartements.",

        apartmentTypesDescription:
          "Découvrez les configurations, surfaces, plans et vues intérieures disponibles pour {{title}}.",

        apartmentType:
          "TYPE D'APPARTEMENT",

        floor:
          "Étage",

        surface:
          "Surface",

        photo:
          "photo",

        photos:
          "photos",

        interiorImages:
          "IMAGES INTÉRIEURES",

        comingSoon:
          "Bientôt disponibles",

        viewFloorPlan:
          "Voir le plan",

        planComingSoon:
          "Plan bientôt disponible",

        noLongerAvailable:
          "Plus disponible",

        previousImage:
          "Image précédente",

        nextImage:
          "Image suivante",

        closeGallery:
          "Fermer la galerie",
      },

      /* =====================================================
         PROJECT CTA
      ===================================================== */

      projectCta: {
        eyebrow:
          "INTÉRESSÉ PAR CE PROJET ?",

        title1:
          "Faites de {{title}}",

        title2:
          "votre prochain chez-vous.",

        description:
          "Contactez notre équipe pour obtenir plus d'informations sur les disponibilités, les types d'appartements, les plans et le processus de réservation.",

        contact:
          "Contacter notre équipe",

        otherProjects:
          "Voir les autres projets",
      },

      /* =====================================================
         ABOUT PAGE
      ===================================================== */

      aboutPage: {
        eyebrow:
          "À PROPOS D'ARCHYTAS",

        title1:
          "Construire des espaces avec",

        title2:
          "du sens et une valeur durable.",

        intro1:
          "Archytas Immobilière est un promoteur immobilier spécialisé dans la création de projets résidentiels contemporains, pensés autour de la qualité, du confort, de l'architecture et de la vie quotidienne.",

        intro2:
          "De la première idée jusqu'à la livraison finale, notre approche repose sur une conception réfléchie, une réalisation rigoureuse et une valeur durable.",

        years:
          "Années d'expérience",

        projects:
          "Projets réalisés",

        clients:
          "Clients satisfaits",

        apartments:
          "Appartements livrés",

        missionEyebrow:
          "NOTRE MISSION",

        missionTitle1:
          "Créer de meilleurs espaces",

        missionTitle2:
          "pour vivre.",

        missionText1:
          "Notre mission est de créer des espaces de vie modernes, confortables et de grande qualité, répondant aux besoins des familles, des propriétaires et des investisseurs.",

        missionText2:
          "Nous sommes convaincus qu'un bon projet résidentiel commence par une architecture pensée pour ses habitants, des matériaux sélectionnés avec soin et un engagement constant envers la qualité.",

        valuesEyebrow:
          "CE QUI NOUS DÉFINIT",

        valuesTitle1:
          "Les principes derrière",

        valuesTitle2:
          "chaque projet.",

        quality:
          "Qualité",

        qualityText:
          "Des matériaux soigneusement sélectionnés et une attention portée à la réalisation de chaque projet.",

        architecture:
          "Architecture",

        architectureText:
          "Des espaces contemporains conçus autour du confort, de la fonctionnalité et de la vie quotidienne.",

        location:
          "Emplacement",

        locationText:
          "Des projets situés en tenant compte de l'accessibilité, du cadre de vie et de la valeur à long terme.",

        commitment:
          "Engagement",

        commitmentText:
          "Une approche claire et fiable, du développement du projet jusqu'à sa livraison finale.",
      },

      /* =====================================================
         CONTACT PAGE
      ===================================================== */

      contactPage: {
        eyebrow:
          "CONTACT",

        title1:
          "Parlons de",

        title2:
          "votre prochain chez-vous.",

        intro:
          "Vous avez une question sur l'un de nos projets, la disponibilité d'un appartement ou le processus de réservation ? Notre équipe est à votre disposition.",

        phone:
          "TÉLÉPHONE",

        email:
          "E-MAIL",

        office:
          "BUREAU",

        officeEyebrow:
          "NOTRE BUREAU",

        officeTitle:
          "Retrouvez-nous à Tunis.",

        formEyebrow:
          "CONTACTEZ-NOUS",

        formTitle:
          "Envoyez-nous un message.",

        formIntro:
          "Expliquez-nous ce que vous recherchez et notre équipe vous répondra dans les plus brefs délais.",

        name:
          "Votre nom",

        emailField:
          "Votre e-mail",

        subject:
          "Objet",

        message:
          "Votre message",

        send:
          "Envoyer le message",

        sending:
          "Envoi en cours...",

        success:
          "Votre message a été envoyé avec succès.",

        genericError:
          "Une erreur est survenue. Veuillez réessayer.",
      },

      /* =====================================================
         FOOTER
      ===================================================== */

      footer: {
        aboutTitle:
          "À PROPOS",

        description:
          "Nous sommes un promoteur immobilier spécialisé dans la réalisation de projets résidentiels de qualité et la création d'espaces de vie modernes pour les familles et les investisseurs.",

        usefulLinks:
          "LIENS UTILES",

        home:
          "Accueil",

        about:
          "À propos",

        projects:
          "Projets",

        contactLink:
          "Contact",

        contactInfo:
          "COORDONNÉES",

        salesOffice:
          "BUREAU COMMERCIAL",

        salesDescription:
          "Notre équipe commerciale est à votre disposition pour répondre à vos questions.",

        weekdays:
          "Lundi - Vendredi : 08:00 à 17:00",

        saturday:
          "Samedi : 08:00 à 13:00",

        sunday:
          "Dimanche : Fermé",

        copyright:
          "Copyright © 2026 Archytas Immobilière. Tous droits réservés.",
      },

      /* =====================================================
         SEO
      ===================================================== */

      seo: {
        home: {
          title:
            "Archytas Immobilière | Projets immobiliers en Tunisie",

          description:
            "Découvrez les projets immobiliers d'Archytas Immobilière, nos résidences et appartements disponibles en Tunisie.",
        },

        projects: {
          title:
            "Nos projets immobiliers | Archytas Immobilière",

          description:
            "Découvrez les projets immobiliers d'Archytas Immobilière, les appartements disponibles et nos résidences en Tunisie.",
        },

        about: {
          title:
            "À propos | Archytas Immobilière",

          description:
            "Découvrez Archytas Immobilière, notre expérience, notre mission et notre engagement pour des projets résidentiels modernes et de qualité en Tunisie.",
        },

        contact: {
          title:
            "Contact | Archytas Immobilière",

          description:
            "Contactez Archytas Immobilière pour obtenir plus d'informations sur nos projets, nos appartements disponibles et nos résidences en Tunisie.",
        },
      },
    },
  },
}

/* =====================================================
   SAVED LANGUAGE
===================================================== */

const savedLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("language")
    : null

const initialLanguage =
  savedLanguage === "en" ||
  savedLanguage === "fr"
    ? savedLanguage
    : "fr"

/* =====================================================
   INITIALIZE I18NEXT
===================================================== */

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: initialLanguage,

    fallbackLng: "fr",

    supportedLngs: ["fr", "en"],

    interpolation: {
      escapeValue: false,
    },
  })

/* =====================================================
   UPDATE <html lang="">
===================================================== */

if (typeof document !== "undefined") {
  document.documentElement.lang =
    initialLanguage

  i18n.on(
    "languageChanged",
    (language) => {
      document.documentElement.lang =
        language

      localStorage.setItem(
        "language",
        language
      )
    }
  )
}

export default i18n