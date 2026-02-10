// Portfolio CollectionPage JSON-LD
export const portfolioCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.pixolotechnologies.com/portfolios/#collection",
  name: "Pixolo Technologies Portfolio",
  url: "https://www.pixolotechnologies.com/portfolios",
  publisher: {
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
} as const;
