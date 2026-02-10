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

/** Get the current device type based on screen width */
export const getDeviceType = (): "mobile" | "desktop" => {
  return window.innerWidth < 768 ? "mobile" : "desktop";
};
