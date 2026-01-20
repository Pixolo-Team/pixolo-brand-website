// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate Case Studies Section */
export const animateCaseStudiesSection = () => {
  // Detect when the Section comes into the Screen
  inView("#case-studies-section", (caseStudiesSection) => {
    // Animate the Tool Badge
    animate(
      caseStudiesSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], x: ["-20px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the Section Header Text
    animate(
      caseStudiesSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], x: ["-20px", 0] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Case Study Cards
    animate(
      caseStudiesSection?.querySelectorAll(".case-study-card-item"),
      { opacity: [0, 1], y: ["40px", 0] },
      { duration: 0.8, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
