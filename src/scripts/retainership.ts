import { animate, inView, stagger } from "motion";

/** Animate Retainership Section */
export const animateRetainershipSection = () => {
  // Detect when the Section comes into the Screen
  inView("#retainership-section", (retainershipSection) => {
    // Animate the Section Header Part
    animate(
      retainershipSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      retainershipSection?.querySelectorAll("#header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );
  });
  inView("#footer-text", (footerText) => {
    animate(
      footerText,
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0 },
    );
  });
  
  inView(".step-item", (stepItem) => {
    const paragraphs = stepItem.querySelectorAll("p");
    if (!paragraphs.length) return;

    animate(
      paragraphs,
      {
        opacity: 1,
        transform: "translateX(0)",
      },
      {
        duration: 0.8,
        delay: stagger(0.12),
        easing: "linear",
      },
    );
  });

  inView(".retainership-cards", (retainershipCards) => {
    animate(
      retainershipCards?.querySelectorAll(".retainership-card"),
      {
        opacity: 1,
        transform: "translateX(0)",
      },
      {
        duration: 0.8,
        delay: stagger(0.12),
      },
    );
  });

  inView(".employee-cards", (employeeCards) => {
    animate(
      employeeCards?.querySelectorAll(".employee-card"),
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        duration: 0.8,
        delay: stagger(0.12),
      },
    );
  });
};

/** Function to initialize the scroll line animation */
export const initScrollLine = () => {
  // Get scroll line element
  const scrollLine = document.querySelector(".scroll-line") as HTMLElement | null;
  if (!scrollLine) return;

  // Initially Filled percentage
  const initailFill = 0;
  let frameRequested = false; // for requestAnimationFrame optimization

  const updateFill = () => {
    // Get the position and height of the scroll line element relative to the viewport
    const { top, height } = scrollLine.getBoundingClientRect();

    // Vertical center of the viewport
    const viewportCenter = window.innerHeight / 2;

    // Calculate how far the viewport center has passed the top of the scroll line
    const progress = (viewportCenter - top) / height;

    // Clamp the progress between 0 and 1 to avoid overflows
    const clamped = Math.max(0, Math.min(progress, 1));

    // Convert to a percentage and ensure it's at least the initial fill
    const fill = Math.max(clamped * 100, initailFill);

    // Update the CSS variable --fill-height
    scrollLine.style.setProperty("--fill-height", `${fill}%`);
    frameRequested = false;
  };

  const onScrollOrResize = () => {
    // Check if an update frame has already been requested
    if (!frameRequested) {
      // Mark that a frame has been queued
      frameRequested = true;

      // Schedule the `updateFill` function to run on the next animation frame
      requestAnimationFrame(updateFill);
    }
  };

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);

  updateFill();
};
