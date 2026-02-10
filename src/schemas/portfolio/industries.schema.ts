// TYPES //
import type { PortfolioIndustriesData } from "@/types/portfolio/industries";

/** Industries Schema */
export const getPortfolioIndustriesSchema = (data: PortfolioIndustriesData) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industries with Completed Projects by Pixolo Technologies",
  itemListElement: data.industryItems.map((industry, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "DefinedTerm",
      name: industry.title,
      description: `Projects delivered by Pixolo Technologies in the ${industry.title} industry.`,
      subjectOf: industry.tags.map((projectName) => ({
        "@type": "CreativeWork",
        name: projectName,
        // URL intentionally omitted since not available for all projects
      })),
    },
  })),
});
