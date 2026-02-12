// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Principles Section */
export const animatePrinciplesSection = () => {
  // Detect when the Section comes into the Screen
  inView("#principles-section", (principlesSection) => {
    // Animate the Tool Badge
    animate(
      principlesSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the Section Title Part
    animate(
      principlesSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Section Subtitle Part
    animate(
      principlesSection?.querySelectorAll(".subtitle-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Principle Cards
    animate(
      principlesSection?.querySelectorAll(".principle-card"),
      { x: ["50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
