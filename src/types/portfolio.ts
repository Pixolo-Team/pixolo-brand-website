// Types for Portfolio
export type PortfolioData = {
  id: string;
  brand_color: string;
  brand_name: string;
  hero_image: string;
  thumbnail_image: string;
  logo: string;
  title: string;
  subtitle: string;
  badges: string[];
  show_in_home: "TRUE" | "FALSE";
  is_highlight: "TRUE" | "FALSE";
  slug: string;
};
