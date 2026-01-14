import { animate, inView } from "motion";

// Animate Open Posotions
export const animateOpenPositionsSection = () => {
  // Detect when the Section comes into the Screen
  inView("#open-positions-section", (section) => {
    // Animate Tool Badge
    animate(
      section.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.6 },
    );

    // Animate Header Text
    animate(
      section.querySelectorAll("#open-positions-heading"),
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.6, delay: 0.2 },
    );
  });

  // Detect when the Cards come into the Screen
  const cards = document.querySelectorAll(".open-position-card");

  cards.forEach((card, index) => {
    const calculatedDelay = index < 3 ? index * 0.2 : 0;

    // Card animation
    inView(card, (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [30, 0] },
        {
          duration: 0.8,
          delay: calculatedDelay,
          easing: [0.22, 1, 0.36, 1],
        },
      );
    });
  });
};
