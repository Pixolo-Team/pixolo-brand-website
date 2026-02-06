// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate How we work Section */
export const animateHowWeWorkSection = () => {
  // Detect when the Section comes into the Screen
  inView("#how-we-work-section", (howWeWorkSection) => {
    // Tool Badge animation
    animate(
      howWeWorkSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Header Text animation
    animate(
      howWeWorkSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );
  });

  // Animate Solution cards with text
  inView(".solution-cards", (solutionCards) => {
    animate(
      solutionCards?.querySelectorAll(".solution-card"),
      { opacity: [0, 1], y: [30, 0] },
      {
        duration: 0.6,
        delay: stagger(0.12),
        easing: "linear",
      },
    );

    // Text animation of each solution card
    animate(
      solutionCards?.querySelectorAll(".solution-text"),
      { opacity: [0, 1], x: [-20, 0] },
      {
        duration: 0.6,
        delay: stagger(0.12),
        easing: "linear",
      },
    );
  });
};
