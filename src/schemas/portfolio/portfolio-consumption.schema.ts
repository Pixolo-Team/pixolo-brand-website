type PixoloPortfolioSchemaInputData = {
  slug: string;
  projectName: string;
  summary: string;
};

export const getPixoloPortfolioSchema = ({
  slug,
  projectName,
  summary,
}: PixoloPortfolioSchemaInputData) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `https://www.pixolotechnologies.com/portfolios/${slug}/#project`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.pixolotechnologies.com/portfolios/${slug}`,
  },
  name: projectName,
  description: summary,
  creator: {
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
  publisher: {
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
});
