import { animate, inView, stagger } from "motion";

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
      section.querySelectorAll("#header-text"),
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
