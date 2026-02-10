// Place Schema
export const pixoloPlaceSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Pixolo Technologies",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    postalCode: "400051",
    addressCountry: "IN",
  },
} as const;
