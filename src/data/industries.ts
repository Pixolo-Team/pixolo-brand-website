import type { IndustriesSectionDetails } from "@/types/industries";

export const industriesSectionDetails: IndustriesSectionDetails = {
  // Section Header
  sectionHeader: {
    badgeIcon: "comment",
    badgeTitle: "Domain Knowledge",
    title: "Our Experience Across Industries",
  },

  // Industries Tab Items
  industriesTabItems: [
    { id: 1, name: "Sports", isActive: true },
    { id: 2, name: "Finance" },
    { id: 3, name: "Digital" },
    { id: 4, name: "Hybrid" },
    { id: 5, name: "Augmented Reality" },
  ],

  // 🔥 Projects grouped by tab ID
  industriesProjectsByTab: {
    1: [
      {
        name: "Football Club Barcelona",
        image: "/images/industries/barcelona-brand-logo.png",
        websiteLink: "/",
      },
      {
        name: "Zizo",
        image: "/images/industries/barcelona-brand-logo.png",
        websiteLink: "/",
      },
      {
        name: "Zizo",
        image: "/images/industries/barcelona-brand-logo.png",
        websiteLink: "/",
      },
    ],

    2: [
      {
        name: "FinTech NeoBank",
        image: "/images/industries/barcelona-brand-logo.png",
        websiteLink: "/",
      },
    ],

    3: [
      {
        name: "Digital Dashboard",
        image: "/images/industries/barcelona-brand-logo.png",
        websiteLink: "/",
      },
    ],

    4: [
      {
        name: "Hybrid Commerce Hub",
        image: "/images/industries/barcelona-brand-logo.png",
        websiteLink: "/",
      },
    ],

    5: [
      {
        name: "AR Shopping Lens",
        image: "/images/industries/barcelona-brand-logo.png",
        websiteLink: "/",
      },
    ],
  },
};
