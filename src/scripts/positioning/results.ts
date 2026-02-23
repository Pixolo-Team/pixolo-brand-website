// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Results Section */
export const animateResultsSection = () => {
  // Detect when the Section comes into the Screen
  inView("#results-section", (resultsSection) => {
    // Animate the Section Header Part
    animate(
      resultsSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      resultsSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    animate(
      resultsSection?.querySelectorAll(".subtitle-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Result Cards
    animate(
      resultsSection?.querySelectorAll(".result-card"),
      { y: ["50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
