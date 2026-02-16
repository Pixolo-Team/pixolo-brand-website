// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate Retainership Section */
export const animateRetainershipSection = () => {
  // Detect when the Section comes into the Screen
  inView("#retainership-section", (retainershipSection) => {
    // Animate the Section Header Part
    animate(
      retainershipSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      retainershipSection?.querySelectorAll("#header-text"),
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

  inView(".retainership-cards", (retainershipCards) => {
    animate(
      retainershipCards?.querySelectorAll(".retainership-card"),
      {
        opacity: 1,
        transform: "translateX(0)",
      },
      {
        duration: 0.8,
        delay: stagger(0.12),
      },
    );
  });

  inView(".employee-cards", (employeeCards) => {
    animate(
      employeeCards?.querySelectorAll(".employee-card"),
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        duration: 0.8,
        delay: stagger(0.12),
      },
    );
  });
};
