type PixoloPortfolioSchemaInputData = {
  title: string;
  projectName: string;
  summary: string;
};

export const getPixoloPortfolioSchema = ({
  title,
  projectName,
  summary,
}: PixoloPortfolioSchemaInputData) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `https://www.pixolotechnologies.com/portfolios/${title.toLowerCase().replaceAll(" ", "-")}/#project`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.pixolotechnologies.com/portfolios/${title.toLowerCase().replaceAll(" ", "-")}`,
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
