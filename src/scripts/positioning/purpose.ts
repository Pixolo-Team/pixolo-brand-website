// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Purpose Section */
export const animatePurposeSection = () => {
  // Detect when the Section comes into the Screen
  inView("#purpose-section", (purposeSection) => {
    // Animate the Section Header Part
    animate(
      purposeSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      purposeSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Purpose Cards
    animate(
      purposeSection?.querySelectorAll(".purpose-card"),
      { x: ["-50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
