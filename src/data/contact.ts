import { siteInfo } from "@/data/site-info";

// Contacts data that can be reused across the application
export const contactSectionDetails = {
  badgeTitle: "Collaborate with Pixolo",
  heading: "Come say Hi! 👋",
  subheading: "Your vision deserves the right team — let's start there.",

  contactCards: [
    {
      id: "phone",
      title: "Call / Text Us",
      value: siteInfo.contact.phone[0].value,
      link: siteInfo.contact.phone[0].link,
      icon: "phone",
    },
    {
      id: "mail",
      title: "Drop a Email",
      value: siteInfo.contact.email[0].value,
      link: siteInfo.contact.email[0].link,
      icon: "mail",
    },
  ],

  location: {
    title: "Our Space",
    subtitle: "Where ideas meet code",
    address: siteInfo.contact.address.value,
    icon: "location",
    mapUrl: siteInfo.contact.address.mapUrl,
    mapSearchUrl: siteInfo.contact.address.mapSearchUrl,
  },
};

export const contactFormDetails = {
  badgeTitle: "Want to know more?",
  heading: "We'd love to hear from you",
  subheading: "Your vision deserves the right team — let's start there.",

  formHeroHeading: "Lets get in Touch!",

  fields: [
    {
      id: "name",
      label: "NAME",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      id: "email",
      label: "E-MAIL",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      id: "phone",
      label: "PHONE NUMBER",
      type: "tel",
      placeholder: "Enter your phone number",
      required: true,
    },

    {
      id: "subject",
      label: "SUBJECT",
      type: "select",
      placeholder: "Select a subject",
      required: true,
      options: ["Mobile App Development", "Web Development", "Project Planning", "UX Design"],
    },

    {
      id: "message",
      label: "MESSAGE",
      type: "textarea",
      placeholder: "Write your message...",
      required: true,
    },
  ],

  buttonText: "Submit",
};

export const contactSubjectOptions = [
  "Mobile App Development",
  "Web Development",
  "Project Planning",
  "UX Design",
];
