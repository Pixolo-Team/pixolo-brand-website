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

  problems_cards: {
    icon: string;
    title: string;
  }[];

  purpose: {
    badge_title: string;
    title: string;
  }[];

  purpose_cards: {
    title: string;
    description: string;
  }[];

  services: {
    badge_title: string;
    title: string;
  }[];

  service_cards: {
    title: string;
    description: string;
  }[];

  process: {
    badge_title: string;
    title: string;
  }[];

  process_steps: {
    title: string;
    description: string;
  }[];

  results: {
    badge_title: string;
    title: string;
    sub_title: string;
  }[];

  result_cards: {
    icon: string;
    title: string;
    description: string;
  }[];

  result_image_cards: {
    image: string;
    alt: string;
    title: string;
    description: string;
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
