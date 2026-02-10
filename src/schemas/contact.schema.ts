/** Contact Organization Schema */
export const contactOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.pixolotechnologies.com/#organization",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@pixolotechnologies.com",
      telephone: "+91-9768941186",
      areaServed: ["IN", "US", "UK", "Global"],
      availableLanguage: ["English"],
    },
  ],
} as const;
