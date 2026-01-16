// TYPES //
import type { FaqSectionData } from "@/types/faq";

export const faqSectionDetails: FaqSectionData = {
  sectionHeader: {
    badgeIcon: "service-icon",
    badgeTitle: "Clarity Starts Here",
    title: "Everything You Need to Know, All in One Place",
  },

  faqTabItems: [
    { id: 1, name: "General" },
    { id: 2, name: "Specific" },
    { id: 3, name: "Technical" },
    { id: 4, name: "Follow-up" },
  ],

  faqItemsByTab: {
    1: [
      {
        question: "What does Pixolo actually do?",
        answer:
          "We build custom tech that removes friction from your business. Apps, dashboards, internal tools, billing systems, process automations, anything that makes your operations smarter and your customer experience tighter. If it relies on logic and software, we can design it.",
      },
      {
        question: "What does Pixolo actually do?",
        answer:
          "We build custom tech that removes friction from your business. Apps, dashboards, internal tools, billing systems, process automations, anything that makes your operations smarter and your customer experience tighter. If it relies on logic and software, we can design it.",
      },
      {
        question: "What does Pixolo actually do?",
        answer:
          "We build custom tech that removes friction from your business. Apps, dashboards, internal tools, billing systems, process automations, anything that makes your operations smarter and your customer experience tighter. If it relies on logic and software, we can design it.",
      },
    ],

    2: [
      {
        question: "Can you take over an existing project?",
        answer:
          "We can. We will audit the current build, identify risks, stabilize it, and then either improve or rebuild what is necessary. We have inherited everything from hacked together MVPs to bulky enterprise systems.",
      },
    ],
    3: [
      {
        question: "Can you take over an existing project?",
        answer:
          "We can. We will audit the current build, identify risks, stabilize it, and then either improve or rebuild what is necessary. We have inherited everything from hacked together MVPs to bulky enterprise systems.",
      },
    ],
    4: [
      {
        question: "Can you take over an existing project?",
        answer:
          "We can. We will audit the current build, identify risks, stabilize it, and then either improve or rebuild what is necessary. We have inherited everything from hacked together MVPs to bulky enterprise systems.",
      },
    ],
  },
};
