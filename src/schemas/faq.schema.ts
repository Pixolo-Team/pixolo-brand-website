// TYPES //
import type { FaqItemData } from "@/types/faq";

/** Generate FAQ JSON-LD */
export const getFaqSchema = (faqs: FaqItemData[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
