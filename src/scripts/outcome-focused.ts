// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate Outcome Section */
export const animateOutcomeSection = () => {
  // Detect when the Section comes into the Screen
  inView("#outcome-section", (outcomeSection) => {
    // Animate the Section Header Part
    animate(
      outcomeSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      outcomeSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Outcome section Image
    animate(
      outcomeSection?.querySelectorAll(".outcome-image"),
      { opacity: [0, 1], x: [-60, 0] },
      { duration: 0.6, easing: "ease-out" },
    );

    // Animate the Outcome section Why Us Cards
    animate(
      outcomeSection?.querySelectorAll(".why-us-card"),
      { opacity: [0, 1], x: [-30, 0] },
      { duration: 0.6, delay: stagger(0.25), easing: "ease-out" },
    );
  });
};
