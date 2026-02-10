// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Snapshot Section */
export const animateSnapshotSection = () => {
  // Detect when the Section comes into the Screen
  inView("#project-snapshot-section", (projectSnapshotSection) => {
    // Animate the title text Part
    animate(
      projectSnapshotSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    /* Snapshot cards slide in from the right (staggered) */
    animate(
      projectSnapshotSection.querySelectorAll(".snapshot-card"),
      { opacity: [0, 1], x: ["60px", 0] },
      {
        duration: 0.6,
        delay: stagger(0.12),
        easing: "linear",
      },
    );

    animate(
      projectSnapshotSection.querySelectorAll(".snapshot-card-text"),
      { opacity: [0, 1], x: ["60px", 0] },
      {
        duration: 0.6,
        delay: stagger(0.12),
        easing: "linear",
      },
    );

    /* Tech stack logos slide in one by one from the right */
    animate(
      projectSnapshotSection.querySelectorAll(".tech-stack-icon"),
      { opacity: [0, 1], x: ["30px", 0] },
      {
        duration: 0.4,
        delay: stagger(0.12, { startDelay: 0.9 }),
        easing: "ease-out",
      },
    );
  });
};
