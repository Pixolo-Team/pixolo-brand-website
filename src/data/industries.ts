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
    { id: 2, name: "Education / EdTech" },
    { id: 3, name: "Finance / Trading" },
    { id: 4, name: "Travel & Hospitality" },
    { id: 5, name: "Health & Wellness" },
    { id: 6, name: "Corporate / Real Estate" },
    { id: 7, name: "Community / Consumer Apps" },
    { id: 8, name: "Media & Entertainment" },
  ],

  // 🔥 Projects grouped by tab ID
  industriesProjectsByTab: {
    1: [
      {
        name: "Barca Academy (Concient Football)",
        image: "/images/industries/barcelona.svg",
        websiteLink: "/",
      },
      {
        name: "Zizo",
        image: "/images/industries/zizo.svg",
        websiteLink: "https://www.zizoapp.in/",
      },
      {
        name: "Skorost United",
        image: "/images/industries/skorost.svg",
        websiteLink: "https://academy.skorostunited.com/",
      },
    ],

    2: [
      {
        name: "Sunali’s Classes (Keystone) – INQ App, QG System, Lwinq",
        image: "/images/industries/sunali-class.svg",
      },
      {
        name: "SAI Group – School App + Brand Websites",
        image: "/images/industries/sai.svg",
        websiteLink: "https://www.saiinternational.edu.in/",
      },
      {
        name: "Chinook Driving Academy – Driving School Platform",
        image: "/images/industries/chinook.svg",
        websiteLink: "https://www.chinookdrivingacademy.com/",
      },
    ],

    3: [
      {
        name: "RichMonks – F&O Algorithmic Trading Ecosystem",
        image: "/images/industries/rich-monk.svg",
        websiteLink: "https://www.richmonks.in/",
      },
    ],

    4: [
      {
        name: "Eightydays – Travel App + Admin + Backend",
        image: "/images/industries/eighty-days.svg",
        websiteLink: "https://eightydays.ai/",
      },
    ],

    5: [
      {
        name: "Pango – App + Altius Diet Maker + Backend",
        image: "/images/industries/pango.png",
        websiteLink: "https://pango.in/",
      },
    ],

    6: [
      {
        name: "Neelsidhi – Sheet-Based CMS Project",
        image: "/images/industries/neelsidhi.svg",
        websiteLink: "https://www.neelsidhi.com/",
      },
    ],

    7: [
      {
        name: "ConnectClub – Community App",
        image: "/images/industries/connect-club.svg",
      },
    ],

    8: [
      {
        name: "Too Yumm Masala Cheers – IPL Sponsorship Website",
        image: "/images/industries/too-tumm.svg",
      },
      {
        name: "Reliance Digital – AI Masterclass Campaign",
        image: "/images/industries/reliance-digial.svg",
        websiteLink: "https://reliancedigitalcommunity.com/",
      },
    ],
  },
};
