import type { WithContext, Organization, Service, FAQPage } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://immunit.vercel.app/#organization",
  "name": "IMMUNIT",
  "description": "Servicios profesionales de limpieza post mortem en Barcelona",
  "url": "https://immunit.vercel.app",
  "logo": "https://immunit.vercel.app/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Camí dels Àngels, 7",
    "addressLocality": "Barcelona",
    "postalCode": "08035",
    "addressRegion": "Cataluña",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.3851",
    "longitude": "2.1734"
  },
  "telephone": "+34629501941",
  "email": "info@immunit.vercel.app",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "41.3851",
      "longitude": "2.1734"
    },
    "geoRadius": "50000"
  }
};

export const serviceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Limpieza Post Mortem Profesional",
  "provider": {
    "@id": "https://immunit.vercel.app/#organization"
  },
  "areaServed": {
    "@type": "City",
    "name": "Barcelona"
  },
  "description": "Servicio profesional de limpieza y desinfección post mortem disponible 24/7 en Barcelona y área metropolitana",
  "serviceType": "Limpieza especializada",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://immunit.vercel.app",
    "servicePhone": "+34629501941",
    "availableLanguage": ["es", "ca"]
  },
  "termsOfService": "https://immunit.vercel.app/terminos",
  "serviceOutput": "Desinfección y restauración completa del espacio",
  "provider": {
    "@id": "https://immunit.vercel.app/#organization"
  }
};

export const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuál es el proceso de actuación en una emergencia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tras su llamada, nuestro equipo especializado se desplaza al lugar en menos de 2 horas. Realizamos una evaluación inicial, establecemos un perímetro de seguridad y comenzamos el proceso de limpieza y desinfección siguiendo protocolos específicos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué áreas geográficas cubren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Damos servicio en Barcelona ciudad y toda el área metropolitana, incluyendo las comarcas del Vallès Occidental, Vallès Oriental, Baix Llobregat, Maresme y Garraf."
      }
    }
  ]
};