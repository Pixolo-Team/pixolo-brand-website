import { animate, inView, stagger } from "motion";

/** Animates the Blogs Section */
export const animateBlogsSection = () => {
  // Detect when the Section comes into the Screen
  inView("#blogs-section", (blogsSection) => {
    // Animate the Tool Badge
    animate(
      blogsSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], x: ["-20px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the Section Header Text
    animate(
      blogsSection?.querySelectorAll("#header-text"),
      { opacity: [0, 1], x: ["-20px", 0] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Blog Cards
    animate(
      blogsSection?.querySelectorAll(".blog-card-item"),
      { opacity: [0, 1], y: ["40px", 0] },
      { duration: 0.8, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
