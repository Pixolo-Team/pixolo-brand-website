// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Problems Section */
export const animateProblemsSection = () => {
  // Detect when the Section comes into the Screen
  inView("#problems-section", (problemsSection) => {
    // Animate the Section Header Part
    animate(
      problemsSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      problemsSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Problem Cards
    animate(
      problemsSection?.querySelectorAll(".problem-card"),
      { y: ["50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
