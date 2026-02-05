// Organization JSON-LD
export const pixoloOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.pixolotechnologies.com/#organization",
  name: "Pixolo Technologies",
  url: "https://www.pixolotechnologies.com",
  logo: "https://www.pixolotechnologies.com/images/brand-logo/light.png",
  description:
    "Pixolo Technologies builds custom web platforms, mobile apps, and internal systems for startups and growing businesses.",
  email: "connect@pixolotechnologies.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9892309721",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English"],
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [
    "https://www.linkedin.com/company/pixolo-technologies",
    "https://www.instagram.com/pixolotechnologies",
  ],
} as const;
