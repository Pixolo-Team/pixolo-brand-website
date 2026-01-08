import { animate, inView, stagger } from "motion";

/** Animate Pain Solution Section */
export const animatepainSolutionSection = () => {
  // 1. Animate Header Elements
  inView("#pain-solution-section", (painSolutionSection) => {
    // Tool Badge animation
    animate(
      painSolutionSection.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Header Text animation
    animate(
      painSolutionSection.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );
  });

  // 2. Animate PainSolution cards (Fade in from Left)
  // We target the correct class: .pain-solution-cards
  inView(".pain-solution-cards", (cardsWrapper) => {
    animate(
      cardsWrapper.querySelectorAll(".pain-solution-card"),
      {
        opacity: [0, 1],
        x: [-50, 0], // Moves from -50px (left) to 0
      },
      {
        duration: 0.8,
        // Delay starts at 1.2s to ensure the header (0.4s + 0.8s) is done
        delay: stagger(0.15, { start: 1.2 }),
        easing: [0.17, 0.67, 0.83, 0.67], // Smooth cubic-bezier
      },
    );
  });
};
