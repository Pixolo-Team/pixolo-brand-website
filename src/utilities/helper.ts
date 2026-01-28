/**
 * Build all faqs from faqItemsByTab
 * @param faqItemsByTab - faq items by tab
 * @returns all faqs
 */
export const buildAllFaqs = (faqItemsByTab: Record<number, any[]>) => {
  const allFaqsMap = new Map();

  Object.keys(faqItemsByTab).forEach((tabId) => {
    if (Number(tabId) === 1) return; // skip All tab

    faqItemsByTab[Number(tabId)].forEach((faq) => {
      allFaqsMap.set(faq.question, faq); // prevent duplicates by question
    });
  });

  return Array.from(allFaqsMap.values());
};

export function toDirectDriveLink(url: string): string {
  // Already a direct Google image CDN link
  if (url.includes("googleusercontent.com")) return url;

  const match = url.match(/[-\w]{25,}/);
  return match ? `https://drive.google.com/thumbnail?id=${match[0]}&sz=w1920` : url;
}
