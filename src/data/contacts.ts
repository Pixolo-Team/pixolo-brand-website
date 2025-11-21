import { siteInfo } from "./siteInfo";

// Contacts data that can be reused across the application
export const contactSectionData = {
  badgeTitle: "Collaborate with Pixolo",
  heading: "Come say Hi! 👋",
  subheading: "Your vision deserves the right team — let’s start there.",

  contactCards: [
    {
      id: "phone",
      title: "Call / Text Us",
      value: siteInfo.phone.value,
      link: siteInfo.phone.link,
      icon: "phone",
    },
    {
      id: "mail",
      title: "Drop a Email",
      value: siteInfo.email.value,
      link: siteInfo.email.link,
      icon: "mail",
    },
  ],

  location: {
    title: "Our Space",
    subtitle: "Where ideas meet code",
    address: siteInfo.address.value,
    icon: "location",
    mapUrl: siteInfo.address.mapUrl,
    mapSearchUrl: siteInfo.address.mapSearchUrl,
  },
};
