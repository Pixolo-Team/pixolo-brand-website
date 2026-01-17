// OTHERS //
import { animate, inView } from "motion";

// Portfolio Section Animation
export const animatePortfolioSection = () => {
  // Detect when the Section comes into the Screen
  inView("#portfolio-section", (portfolioSection) => {
    // Animate the Section Header Part
    animate(
      portfolioSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      portfolioSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );
  });
};
