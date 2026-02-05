// Services JSON-LD
export const pixoloServicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.pixolotechnologies.com/services#itemlist",
  name: "Pixolo Technologies Services",
  publisher: {
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: "https://www.pixolotechnologies.com/services/product-strategy-and-planning",
    },
    {
      "@type": "ListItem",
      position: 2,
      url: "https://www.pixolotechnologies.com/services/ui-ux-and-brand-experience",
    },
    {
      "@type": "ListItem",
      position: 3,
      url: "https://www.pixolotechnologies.com/services/full-stack-development",
    },
    {
      "@type": "ListItem",
      position: 4,
      url: "https://www.pixolotechnologies.com/services/ai-and-automation",
    },
    {
      "@type": "ListItem",
      position: 5,
      url: "https://www.pixolotechnologies.com/services/cloud-devops-and-infrastructure",
    },
    {
      "@type": "ListItem",
      position: 6,
      url: "https://www.pixolotechnologies.com/services/business-tools-and-internal-systems",
    },
  ],
} as const;
