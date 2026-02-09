// OTHERS //
import { animate, inView } from "motion";

/** Animate the Case Study Hero Section */
export const animateCaseStudyHeroSection = () => {
  // Detect when the Section comes into the Screen
  inView("#case-study-hero-section", (caseStudyHeroSection) => {
    // Animate the Section Header Part
    animate(
      caseStudyHeroSection?.querySelector(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate hero title
    animate(
      caseStudyHeroSection?.querySelector("#header-text"),
      { opacity: [0, 1], x: ["-50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    animate(
      caseStudyHeroSection?.querySelector(".graph-logo"),
      { scaleY: [0.4, 1], opacity: [0, 1] },
      { duration: 0.4, delay: 0.4 },
    );
  });
};
