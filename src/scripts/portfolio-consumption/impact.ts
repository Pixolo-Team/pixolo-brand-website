// OTHERS //
import { animate, inView, stagger } from "motion";

// Animate Impact Section
export const animateImpactSection = () => {
  // Detect when the Section comes into the Screen
  inView("#impact-section", (section) => {
    // Animate Tool Badge
    animate(
      section.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.6 },
    );

    // Animate Header Text
    animate(
      section.querySelectorAll("#header-text"),
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.6, delay: 0.2 },
    );
  });

  // Detect when the Stats come into the Screen
  inView(".stat-boxes", (stats) => {
    const statBoxes = stats.querySelectorAll(".stat-box");

    // Stat box animation (slightly softer)
    animate(
      statBoxes,
      { opacity: [0, 1], y: [30, 0] },
      {
        duration: 0.8,
        delay: stagger(0.12),
        easing: [0.22, 1, 0.36, 1], // easeOutCubic (smooth)
      },
    );

    // Quick fade for numbers & titles (gentle overlap)
    animate(
      stats.querySelectorAll(".impact-statValue, .impact-title"),
      { opacity: [0, 1] },
      {
        duration: 0.8,
        delay: stagger(0.12),
        easing: "linear",
      },
    );

    // RIGHT dashed line — smoother slide
    animate(
      stats.querySelectorAll(".impact-line-right"),
      { opacity: [0, 1], x: [20, 0] },
      {
        duration: 0.8,
        delay: stagger(0.12),
        easing: [0.22, 1, 0.36, 1],
      },
    );

    // BOTTOM dashed line — slightly after right line
    animate(
      stats.querySelectorAll(".impact-line-bottom"),
      { opacity: [0, 1], x: [20, 0] },
      {
        duration: 0.8,
        delay: stagger(0.12),
        easing: [0.22, 1, 0.36, 1],
      },
    );
  });
};
