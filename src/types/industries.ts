export type IndustryProject = {
  name: string;
  image: string;
  websiteLink: string;
};

export type IndustryTabItem = {
  id: number;
  name: string;
  isActive?: boolean;
};

export type IndustriesSectionDetails = {
  sectionHeader: {
    badgeIcon: string;
    badgeTitle: string;
    title: string;
  };
  industriesTabItems: IndustryTabItem[];
  industriesProjectsByTab: Record<number, IndustryProject[]>;
};
