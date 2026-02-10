// OTHERS //
import { animate, inView } from "motion";

/** Animate the Client Section */
export const animateBlogsConsumptionHero = () => {
  // Detect when the Section comes into the Screen
  inView("#blog-hero", (blogConsumptionHero) => {
    // Animate the Section Header Part
    animate(
      blogConsumptionHero?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the Section Header Content Part
    animate(
      blogConsumptionHero?.querySelectorAll(".header-content"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Section Image Part
    animate(
      blogConsumptionHero?.querySelectorAll(".blog-hero-image"),
      { y: ["50px", 0], opacity: [0, 1] },
      { duration: 0.8, delay: 0.8 },
    );
  });
};

/** Animate Blog Body Header to fade in up */
export const animateHeaderFadeInUp = () => {
  inView(".header-anim", (element) => {
    animate(
      element,
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        duration: 0.8,
        easing: "ease-in-out",
      },
    );
  });
};

/** Animate Image & Video Block to fade in up quickly */
export const animateMediaFadeInUp = () => {
  inView(".media-anim", (element) => {
    animate(
      element,
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        duration: 0.6,
        easing: "ease-out",
      },
    );
  });
};
