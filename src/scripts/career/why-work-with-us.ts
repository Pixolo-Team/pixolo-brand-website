import { animate, inView, stagger } from "motion";

/** Animate the Why Work With Us Section */
export const animateWhyWorkWithUs = () => {
  // Detect when the Section comes into the Screen
  inView("#why-work-section", (workSection) => {
    // Animate the Section Header Part
    animate(
      workSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      workSection?.querySelectorAll("#header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the image - slide in from left quick
    animate(
      workSection?.querySelectorAll("#team-image"),
      { x: ["-50px", 0], opacity: [0, 1] },
      { duration: 0.6, delay: 1 },
    );

    // Animate the content items one by one from left to right
    animate(
      workSection?.querySelectorAll(".work-reason-item"),
      { x: ["-50px", 0], opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.2, { from: "first", startDelay: 1.6 }) },
    );
  });
};
