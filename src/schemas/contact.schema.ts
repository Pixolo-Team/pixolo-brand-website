/** Contact Organization Schema */
export const contactOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.pixolotechnologies.com/#organization",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "connect@pixolotechnologies.com",
      telephone: "+91-9892309721",
      areaServed: ["IN", "US", "UK", "Global"],
      availableLanguage: ["English"],
    },
  ],
} as const;
