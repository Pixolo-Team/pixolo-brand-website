import { animate, inView, stagger } from "motion";

// Animate Belonging Section
export const animateBelongingSection = () => {
  inView("#belonging-section", (belongingSection) => {
    animate(
      belongingSection.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: [40, 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8 },
    );

    animate(
      belongingSection.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: [40, 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.3 },
    );

    animate(
      belongingSection.querySelectorAll(".belonging-card"),
      { opacity: [0, 1], x: [50, 0] },
      { duration: 0.7, delay: stagger(0.18, { startDelay: 0.6 }) },
    );
  });
};
