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
export interface TabItemData {
  id: string;
  name: string;
  isActive: boolean;
}

export interface BlogItemData {
  imageSrc: string;
  category: string;
  date: string;
  title: string;
  author: string;
  href: string;
}

export interface BlogListingData {
  icon: string;
  tabsItems: TabItemData[];
  badgeTitle: string;
  heading: string;
  loadMoreButton: string;
  defaultImage: string;
  blogItems: BlogItemData[];
}
