import { animate, inView } from "motion";

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
    const image = projectIntroductionSection?.querySelector(".image");
    if (image) {
      animate(
        image,
        { opacity: [0, 1], scale: [0.9, 1], y: [20, 0] },
        { duration: 0.6, delay: 0.3 }, // Starts slightly after header
      );
    }
    animate(
      projectIntroductionSection?.querySelectorAll("#header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );
  });
};

/**
 *  // animate(
    //   clientLogoSection?.querySelectorAll("#header-text"),
    //   { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
    //   { duration: 0.8, delay: 0.4 },
    // );

    // animate(
    //   clientLogoSection?.querySelectorAll(".client-logo"),
    //   { y: ["50px", 0], opacity: [0, 1] },
    //   { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    // );
 */
