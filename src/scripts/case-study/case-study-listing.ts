// OTHERS //
import { animate, inView, stagger } from "motion";
import { initLoadMore } from "@/scripts/load-more";
import { initTabs } from "@/scripts/tabs";

/** Restore tab from sessionStorage */
const restoreTabFromSession = () => {
  const savedTab = sessionStorage.getItem("caseStudiesActiveTab");
  if (!savedTab) return;

  const tabBtn = document.querySelector(`[data-tab-id="${savedTab}"]`);
  if (tabBtn instanceof HTMLElement) {
    tabBtn.click();
  }
};

/** Save active tab on click */
const bindTabPersistence = () => {
  document.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest("[data-tab-id]");
    if (!btn) return;

    const tabId = btn.getAttribute("data-tab-id");
    if (!tabId) return;

    sessionStorage.setItem("caseStudiesActiveTab", tabId);
  });
};

/** Init Load More for all tabs */
const setupCaseStudiesLoadMore = () => {
  const tabContents = document.querySelectorAll("[data-tab-content-id]");

  tabContents.forEach((tabContent) => {
    if (!(tabContent instanceof HTMLElement)) return;

    const tabId = tabContent.dataset.tabContentId;
    if (!tabId) return;

    const cardsContainer = tabContent.querySelector(".case-studies-cards") as HTMLElement | null;

    const loadMoreBtn = tabContent.querySelector(`#load-more-btn-${tabId}`) as HTMLElement | null;

    if (!cardsContainer || !loadMoreBtn) return;

    initLoadMore({
      containerId: cardsContainer.id,
      loadMoreBtnId: loadMoreBtn.id,
      cardClass: "case-study-card-item",
      initialVisible: {
        desktop: 6,
        tablet: 4,
        mobile: 3,
      },
      incrementConfig: {
        desktop: 6,
        tablet: 2,
        mobile: 3,
      },
    });
  });
};

/** Animates the Case Studies Listing Section */
export const animateCaseStudiesListingSection = () => {
  inView("#case-studies-listing-section", (section) => {
    if (!section) return;

    // Tool Badge
    animate(
      section.querySelectorAll(".tool-badge"),
      {
        opacity: [0, 1],
        x: ["-20px", 0],
        scaleX: [0.6, 1],
        rotateX: [120, 0],
      },
      { duration: 0.8 },
    );

    // Header
    animate(
      section.querySelectorAll(".header-text"),
      { opacity: [0, 1], x: ["-20px", 0] },
      { duration: 0.8, delay: 0.4 },
    );

    // Tabs
    animate(
      section.querySelectorAll(".tabs-wrapper .button-tab"),
      { opacity: [0, 1], x: ["-50px", 0] },
      {
        duration: 0.4,
        delay: stagger(0.2, { startDelay: 0.8 }),
      },
    );

    // Cards
    animate(
      section.querySelectorAll(".case-study-card-item"),
      { opacity: [0, 1], y: ["40px", 0] },
      {
        duration: 0.8,
        delay: stagger(0.15, { startDelay: 1 }),
      },
    );
  });
};

/** Single public init (what Astro calls) */
export const initCaseStudiesListingSection = () => {
  const boot = () => {
    initTabs();
    bindTabPersistence();
    restoreTabFromSession();

    // Wait one frame so tab switch completes
    requestAnimationFrame(() => {
      setupCaseStudiesLoadMore();
    });

    animateCaseStudiesListingSection();
  };

  document.addEventListener("DOMContentLoaded", boot);
  document.addEventListener("astro:page-load", boot);
};
