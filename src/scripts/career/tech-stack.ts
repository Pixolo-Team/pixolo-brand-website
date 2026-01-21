import { animate, inView, stagger } from "motion";

/** Animate the Tech Stack Section */
export const animateTechStackIcons = () => {
  // Detect when the Section comes into the Screen
  inView("#tech-stack-section", (clientLogoSection) => {
    // Animate the Section Header Part

    animate(
      clientLogoSection?.querySelectorAll("#header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    animate(
      clientLogoSection?.querySelectorAll(".tech-stack-icon"),
      { y: ["50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.1, { from: "first", startDelay: 1 }) },
    );
  });
};
