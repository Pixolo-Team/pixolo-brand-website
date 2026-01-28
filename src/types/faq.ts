// API Types
export type FaqApiItem = {
  question: string;
  answer: string;
};

// API Response Type
export type FaqApiCategory = {
  category: string;
  faq_items: FaqApiItem[];
};

// UI Types
export type FaqTabItemData = {
  id: string;
  name: string;
  isActive?: boolean;
};

// UI Types
export type FaqItemData = {
  question: string;
  answer: string;
  isOpen?: boolean;
};
