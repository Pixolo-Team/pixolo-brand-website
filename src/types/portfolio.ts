export type PortfolioHeroItem = {
  title: string;
  title_logo: string;
};

export type PortfolioVideoItem = {
  video_url: string;
  alt: string;
};

export type PortfolioIntroductionItem = {
  title: string;
  image: string;
  about_project: string;
  target: string;
  purpose: string;
};

export type PortfolioProcessItem = {
  title: string;
  description: string;
};

export type PortfolioImpactItem = {
  number: string;
  title: string;
};

export type PortfolioTeamItem = {
  video_url: string;
  alt: string;
  name: string;
  role: string;
  is_highlight: "TRUE" | "FALSE";
};

export type PortfolioTestimonialItem = {
  name: string;
  role: string;
  message: string;
  image: string;
};

export type PortfolioSnapshotItem = {
  client: string;
  services: string;
  timeline: string;
  industry: string;
};

export type PortfolioSEOItem = {
  meta_title: string;
  meta_description: string;
  og_image: string;
};

export type PortfolioData = {
  id: string;
  slug: string;

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

  website_link: string;

  hero: PortfolioHeroItem[];

  video_section: PortfolioVideoItem[];

  introduction: PortfolioIntroductionItem[];

  process: PortfolioProcessItem[];

  impact: PortfolioImpactItem[];

  teams: PortfolioTeamItem[];

  client_testimonial: PortfolioTestimonialItem[];

  snapshot: PortfolioSnapshotItem[];

  snapshot_services: string[];
  snapshot_platforms: string[];

  snapshot_tech_stack: string[];

  seo: PortfolioSEOItem[];

  seo_keywords: string[];
};
