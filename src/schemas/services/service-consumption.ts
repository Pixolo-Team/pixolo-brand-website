type PixoloServiceSchemaInput = {
  slug: string;
  name: string;
  serviceType: string;
  description: string;
};

// Service JSON-LD
export const getPixoloServiceSchema = ({
  slug,
  name,
  serviceType,
  description,
}: PixoloServiceSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://www.pixolotechnologies.com/services/${slug}#service`,
  name,
  serviceType,
  description,
  provider: {
    "@type": "Organization",
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
});
