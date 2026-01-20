// TYPES //
import type { FaqSectionData } from "@/types/faq";

// OTHERS //
import { buildAllFaqs } from "@/utilities/helper";

// 1) Define this OUTSIDE the export (so you can reuse it)
const faqItemsByTabBase: Record<number, { question: string; answer: string }[]> = {
  2: [
    {
      question: "What does Pixolo actually do?",
      answer:
        "We build custom tech that removes friction from your business. Apps, dashboards, internal tools, billing systems, process automations, anything that makes your operations smarter and your customer experience tighter. If it relies on logic and software, we can design it.",
    },
    {
      question: "How are you different from regular developers or agencies?",
      answer:
        "We think like partners, not vendors. We care about your goals, not just your task list. We question assumptions, fix root causes, and build systems that age well. You will feel guided, not micromanaged.",
    },
    {
      question: "How do we get started?",
      answer:
        "Book a strategy call. We will understand your goals, map the right solution, and define the smartest path. If we are the right fit, we begin.",
    },
  ],
  3: [
    {
      question: "Do you work with early-stage founders?",
      answer:
        "Yes. If you are serious about your idea, we will meet you there. We have helped early founders shape their MVPs, build version one, and avoid expensive technical mistakes.",
    },
    {
      question: "Can you help if I do not have a clear product spec?",
      answer:
        "Absolutely. Clarity is part of our process. We will sit with you, map out the goal, identify constraints, and turn ideas into structured requirements.",
    },
    {
      question: "Do you help with idea validation?",
      answer:
        "Definitely. If the concept is raw, we will help shape it, pressure test it, and plan the leanest viable version. We ask tough questions early to avoid waste later.",
    },
  ],
  4: [
    {
      question: "Are you focused only on design and development?",
      answer:
        "Tech is the core, but we help beyond that when needed. From onboarding flows to operational logic, from pricing models to communication systems, we support anything tied to product growth and business efficiency.",
    },
    {
      question: "Can you build complex internal systems?",
      answer:
        "Yes. In fact, that is our favorite work. CRMs, billing engines, internal portals, logistics flows, dashboards, analytics, anything that powers the backend of your business.",
    },
    {
      question: "Do you only work with certain industries?",
      answer:
        "We work with founders who take their business seriously. Fitness, finance, real estate, education, logistics, sports, food, the domain does not matter. The ambition does.",
    },
  ],
  5: [
    {
      question: "Can you take over an existing project?",
      answer:
        "We can. We will audit the current build, identify risks, stabilize it, and then either improve or rebuild what is necessary. We have inherited everything from hacked together MVPs to bulky enterprise systems.",
    },
    {
      question: "Can you help scale an existing platform? ",
      answer:
        "We have helped apps move from hundreds to millions of transactions, teams expand from small ops to complex multi user systems, and legacy builds upgrade into clean modern stacks. Scaling is about architecture, not hype.",
    },
  ],
  6: [
    {
      question: "How do you price projects?",
      answer:
        "We price based on clarity of requirements, complexity, timelines, and expected outcomes. Some builds are fixed cost. Others are monthly retainers. We do not do vague estimates, only transparent structures.",
    },
  ],
  7: [
    {
      question: "Do you provide maintenance after launch? ",
      answer:
        "Yes. Systems evolve, and we stay with you. Updates, new features, optimizations, performance boosts, we believe tech should grow with your business, not get abandoned after deployment. ",
    },
  ],
};

export const faqSectionDetails: FaqSectionData = {
  sectionHeader: {
    badgeIcon: "service-icon",
    badgeTitle: "Clarity Starts Here",
    title: "Everything You Need to Know, All in One Place",
  },

  faqTabItems: [
    { id: 1, name: "All" },
    { id: 2, name: "Approach" },
    { id: 3, name: "Founders" },
    { id: 4, name: "Build" },
    { id: 5, name: "TakeOver" },
    { id: 6, name: "Pricing" },
    { id: 7, name: "Support" },
  ],

  // 2) Build final object here
  faqItemsByTab: {
    1: buildAllFaqs(faqItemsByTabBase),
    ...faqItemsByTabBase,
  },
};
