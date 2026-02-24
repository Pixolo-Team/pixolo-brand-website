// Positioning Types //
export interface PositioningData {
  slug: string;

  hero: {
    badge_title: string;
    title: string;
    cta_btn_text: string;
  }[];

  problems: {
    badge_title: string;
    title: string;
  }[];

  purpose: {
    badge_title: string;
    title: string;
  }[];

  services: {
    badge_title: string;
    title: string;
  }[];

  process: {
    badge_title: string;
    title: string;
  }[];

  results: {
    badge_title: string;
    title: string;
  }[];

  why_pixolo: {
    badge_title: string;
    title: string;
    image: string;
    alt: string;
    whyus_cards_title: string[];
  }[];

  ideal_customers: {
    badge_title: string;
    title: string;
    ideal_card_title: string[];
  }[];

  cta: {
    badge_title: string;
    subtitle: string;
    title: string;
    cta_btn_text: string;
  }[];
}
