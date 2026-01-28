export type FaqTabItemData = {
  id: number;
  name: string;
  isActive?: boolean;
};

export type FaqItemData = {
  question: string;
  answer: string;
  isOpen?: boolean;
};

export type FaqSectionData = {
  sectionHeader: {
    badgeIcon: string;
    badgeTitle: string;
    title: string;
  };
  faqTabItems: FaqTabItemData[];
  faqItemsByTab: Record<number, FaqItemData[]>;
};

export type FaqApiItem = {
  question: string;
  answer: string;
};
export type FaqApiCategory = {
  category: string;
  faq_items: FaqApiItem[];
};
export type FaqApiResponse = FaqApiCategory[];
