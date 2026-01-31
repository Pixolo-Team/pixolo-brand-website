import { animate, inView, stagger } from "motion";

// Animate Open Posotions
export const animateOpenPositionsSection = () => {
  // Detect when the Section comes into the Screen
  inView("#open-positions-section", (openPositionsSection) => {
    // Animate Tool Badge
    animate(
      openPositionsSection.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.6 },
    );

    // Animate Header Text
    animate(
      openPositionsSection.querySelectorAll("#open-positions-heading"),
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.6, delay: 0.2 },
    );

    animate(
      openPositionsSection.querySelectorAll(".open-position-card"),
      { opacity: [0, 1], y: [30, 0] },
      {
        duration: 0.8,
        delay: stagger(0.2, { startDelay: 0.2 }),
      },
    );
  });
};
