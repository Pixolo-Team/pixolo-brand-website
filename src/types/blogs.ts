// TYPE FOR BLOG CONSUMPTION
export type BlogPost = {
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  alt: string;
  content: string;
};

// Tabs Item Data
export type TabItemData = {
  id: string;
  name: string;
  isActive: boolean;
};
