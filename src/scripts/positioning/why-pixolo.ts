// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Why Pixolo Section */
export const animateWhyPixolo = () => {
  // Detect when the Section comes into the Screen
  inView("#why-pixolo-section", (whyPixoloSection) => {
    // Animate the Section Header Part
    animate(
      whyPixoloSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      whyPixoloSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Why Pixolo Image Card
    animate(
      whyPixoloSection?.querySelectorAll(".image-card"),
      { x: ["-50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );

    // Animate the Why Pixolo Cards
    animate(
      whyPixoloSection?.querySelectorAll(".why-us-card"),
      { x: ["-50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1.4 }) },
    );
  });
};
