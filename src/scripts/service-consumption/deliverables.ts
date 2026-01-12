// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate Deliverables Section */
export const animateDeliverablesSection = () => {
  // Detect when the Section comes into the Screen
  inView("#deliverables-section", (deliverablesSection) => {
    // Animate the Section Header Part
    animate(
      deliverablesSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      deliverablesSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    animate(
      deliverablesSection?.querySelectorAll(".deliverables-image"),
      { opacity: [0, 1], y: [60, 0] },
      { duration: 0.8, delay: 0.4, easing: "ease-out" },
    );

    // Animate the Tabs
    inView(".deliverables-tabs", (deliverablesTabs) => {
      animate(
        deliverablesTabs.querySelectorAll(".deliverables-tab"),
        { opacity: [0, 1], x: [-50, 0] },
        { duration: 0.6, delay: stagger(0.12), easing: "ease-out" },
      );
    });
  });
};
