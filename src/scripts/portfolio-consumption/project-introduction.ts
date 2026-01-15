import { animate, inView, stagger } from "motion";

/** Animate the Project Introduction Section */
export const animateProjectIntroduction = () => {
  // Detect when the Section comes into the Screen
  inView("#project-introduction", (projectIntroductionSection) => {
    // Animate the Section Header Part
    animate(
      projectIntroductionSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the Section Header Text Part
    animate(
      projectIntroductionSection?.querySelectorAll("#header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Section Image Part
    animate(
      projectIntroductionSection?.querySelectorAll(".introduction-image"),
      { opacity: [0, 1], x: ["-40px", 0] },
      { duration: 0.6, delay: 0.3 },
    );

    // Animate the Project Info Part
    animate(
      projectIntroductionSection?.querySelectorAll(".project-info-item"),
      { opacity: [0, 1], x: [40, 0] },
      { duration: 0.6, delay: stagger(0.3, { startDelay: 0.6 }) },
    );
  });
};
