// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate Project Consumption Process Section */
export const animateProjectConsumptionProcessSection = () => {
  // Detect when the Section comes into the Screen
  inView("#project-consumption-process-section", (projectConsumptionProcessSection) => {
    // Animate the Section Header Part
    animate(
      projectConsumptionProcessSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      projectConsumptionProcessSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );
  });

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
