type PixoloCaseStudySchemaInputData = {
  title: string;
  summary: string;
  clientName: string;
  datePublished: string;
  dateModified?: string;
};

export const getPixoloCaseStudySchema = ({
  title,
  summary,
  clientName,
  datePublished,
  dateModified,
}: PixoloCaseStudySchemaInputData) => ({
  "@context": "https://schema.org",
  "@type": "Article", // (valid, though CreativeWork is better long-term)
  "@id": `https://www.pixolotechnologies.com/case-studies/${title.toLowerCase().replaceAll(" ", "-")}/#case-study`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.pixolotechnologies.com/case-studies/${title.toLowerCase().replaceAll(" ", "-")}`,
  },
  headline: title,
  description: summary,
  about: {
    "@type": "Organization",
    name: clientName,
  },
  publisher: {
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
  author: {
    "@type": "Organization",
    name: "Pixolo Technologies",
  },
  datePublished,
  dateModified: dateModified ?? datePublished,
});
