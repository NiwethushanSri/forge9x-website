export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Forge9x",
    "alternateName": "Forge9X",
    "url": "https://www.forge9x.co.uk",
    "logo": "https://www.forge9x.co.uk/ico-logo.png",
    "description": "UK and Sri Lanka based digital agency specialising in web development, AI solutions, mobile apps, SEO and graphic design for businesses worldwide.",
    "foundingDate": "2019",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+94-777-233-179",
        "contactType": "customer service",
        "areaServed": "LK",
        "availableLanguage": ["English", "Tamil"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+44-7466-008727",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "2/2 Nallaiya Road",
        "addressLocality": "Batticaloa",
        "addressRegion": "Eastern Province",
        "postalCode": "30000",
        "addressCountry": "LK"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "140 Avon Road",
        "addressLocality": "Chelmsford",
        "addressRegion": "Essex",
        "postalCode": "CM1 2LB",
        "addressCountry": "GB"
      }
    ],
    "location": [
      {
        "@type": "Place",
        "name": "Forge9x — Head Office, Batticaloa",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2/2 Nallaiya Road",
          "addressLocality": "Batticaloa",
          "addressRegion": "Eastern Province",
          "postalCode": "30000",
          "addressCountry": "LK"
        }
      },
      {
        "@type": "Place",
        "name": "Forge9x — UK Office, Chelmsford",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "140 Avon Road",
          "addressLocality": "Chelmsford",
          "addressRegion": "Essex",
          "postalCode": "CM1 2LB",
          "addressCountry": "GB"
        }
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/forge9x",
      "https://g.page/r/CeoXP2uTs5uHEAE"
    ],
    "areaServed": [
      { "@type": "Country", "name": "Sri Lanka" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "City", "name": "Batticaloa" },
      { "@type": "City", "name": "Colombo" },
      { "@type": "City", "name": "London" },
      { "@type": "City", "name": "Chelmsford" }
    ],
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "Artificial Intelligence",
      "SEO",
      "Graphic Design",
      "Software Engineering",
      "Digital Transformation"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
