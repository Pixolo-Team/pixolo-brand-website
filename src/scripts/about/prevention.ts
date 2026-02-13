// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Prevention Section */
export const animatePreventionSection = () => {
  // Detect when the Section comes into the Screen
  inView("#prevention-section", (preventionSection) => {
    // Animate the tool badge
    animate(
      preventionSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the title
    animate(
      preventionSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate Failure cards
    animate(
      preventionSection?.querySelectorAll(".failure-card"),
      { x: ["50px", 0], opacity: [0, 1] },
      {
        duration: 0.6,
        delay: stagger(0.2, { from: "first", startDelay: 1 }),
        easing: "ease-in-out",
      },
    ).finished.then(() => {
      // Animate the bottom description after the cards animation is over
      animate(
        preventionSection?.querySelectorAll(".description-text"),
        { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
        { duration: 0.8 },
      );
    });
  });
};
