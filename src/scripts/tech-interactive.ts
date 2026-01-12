import { animate, inView } from "motion";

/** Tech Interactive Section Animation */
export const animateTechInteractiveSection = () => {
  // Detect when the Section comes into the Screen
  inView("#tech-interactive-section", (techInteractiveSection) => {
    // Animate the Section Header Part
    animate(
      techInteractiveSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      techInteractiveSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Stats animation — one by one, only on scroll down
    const stats = techInteractiveSection.querySelectorAll<HTMLElement>(".tech-stat");

    stats.forEach((stat, index) => {
      inView(
        stat,
        () => {
          animate(
            stat,
            {
              opacity: [0, 1],
              y: [200, 0],
            },
            {
              duration: 0.6,
              delay: index * 0.12,
              easing: "ease-out",
            },
          );
        },
        {
          margin: "-10% 0px -10% 0px", // triggers slightly before center
        },
      );
    });
  });
};
