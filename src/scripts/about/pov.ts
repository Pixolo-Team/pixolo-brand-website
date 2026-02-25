// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Pov Section */
export const animatePovSection = () => {
  // Detect when the Section comes into the Screen
  inView("#pov-section", (povSection) => {
    // Animate the tool badge
    animate(
      povSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the title text
    animate(
      povSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the pov cards
    animate(
      povSection?.querySelectorAll(".pov-card"),
      { y: ["50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
