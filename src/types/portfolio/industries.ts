// Industry Project Data
export type PortfolioIndustriesData = {
  badgeTitle: string;
  title: string;

  industryItems: {
    title: string;
    tags: string[];
    image?: string;
  }[];
};
