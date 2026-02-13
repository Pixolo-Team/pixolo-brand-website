// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate Process Section */
export const animateProcessSection = () => {
  // Detect when the Section comes into the Screen
  inView("#process-section", (processSection) => {
    // Animate the Section Header Part
    animate(
      processSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the Section Header Text
    animate(
      processSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );
  });

  // Animate the Step Items
  inView(".step-item", (stepItem) => {
    const paragraphs = stepItem.querySelectorAll("p");
    if (!paragraphs.length) return;

    animate(
      paragraphs,
      {
        opacity: 1,
        transform: "translateX(0)",
      },
      {
        duration: 0.8,
        delay: stagger(0.12),
        easing: "linear",
      },
    );
  });
};
