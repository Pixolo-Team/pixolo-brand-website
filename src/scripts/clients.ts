import { animate, inView, stagger } from "motion";

/** Animate the Client Section */
export const animateClientLogos = () => {
  // Detect when the Section comes into the Screen
  inView("#client-logos-section", (clientLogoSection) => {
    // Animate the Section Header Part
    animate(
      clientLogoSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      clientLogoSection?.querySelectorAll("#header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    animate(
      clientLogoSection?.querySelectorAll(".client-logo"),
      { y: ["50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
