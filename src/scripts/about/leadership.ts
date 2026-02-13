// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Leadership Section */
export const animateLeadershipSection = () => {
  // Detect when the Section comes into the Screen
  inView("#leadership-section", (leadershipSection) => {
    // Animate the tool badge
    animate(
      leadershipSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the title text
    animate(
      leadershipSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the leadership cards
    animate(
      leadershipSection?.querySelectorAll(".leadership-card"),
      { x: ["-50px", 0], opacity: [0, 1] },
      { duration: 0.8, delay: stagger(0.6, { from: "first", startDelay: 1 }), ease: "easeOut" },
    );
  });
};
