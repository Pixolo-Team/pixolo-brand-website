// OTHERS //
import { animate, inView } from "motion";

/** Animate the Blogs Hero Section */
export const animateBlogHeroSection = () => {
  // Detect when the Section comes into the Screen
  inView("#blog-hero-section", (blogHeroSection) => {
    // Animate the Section Header Part
    animate(
      blogHeroSection?.querySelector(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate hero title
    animate(
      blogHeroSection?.querySelector("#header-text"),
      { opacity: [0, 1], x: ["-50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    animate(
      blogHeroSection?.querySelector(".template-logo"),
      { scaleY: [0.4, 1], opacity: [0, 1] },
      { duration: 0.4, delay: 0.4 },
    );

    // Animate Down Arrow
    animate(
      blogHeroSection.querySelectorAll(".scroll-down-icon"),
      {
        y: [0, 10],
        opacity: [0.6, 1],
      },
      {
        duration: 1,
        easing: "ease-in-out",
        repeat: Infinity,
        repeatType: "mirror",
      },
    );
  });
};
