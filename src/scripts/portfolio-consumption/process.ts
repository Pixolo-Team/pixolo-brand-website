/** Function to initialize the scroll line animation and step activation */
export const animateProcessStepScroll = () => {
  // Get the container element
  const container = document.getElementById("process-steps-container") as HTMLElement;
  if (!container) return;

  // Get all the step elements
  const steps = Array.from(container.querySelectorAll<HTMLElement>(".process-step"));
  if (!steps.length) return;

  // Get the fill offset factor
  const FILL_OFFSET_FACTOR = 0.5;

  let lineTop = 0;
  let lineHeight = 0;
  let animationEnabled = false;
  let frameRequested = false;

  // Cache step internals once
  const stepMeta = steps.map((step) => ({
    step,
    circle: step.querySelector<HTMLElement>(".step-circle"),
    titles: step.querySelectorAll<HTMLElement>(".step-title"),
    descriptions: step.querySelectorAll<HTMLElement>(".step-description"),
    numbers: step.querySelectorAll<HTMLElement>(".step-number"),
  }));

  /** Calculate the geometry of the scroll line */
  const calculateGeometry = () => {
    const first = steps[0];
    const last = steps[steps.length - 1];

    // Get the center of the first step
    const firstCenter = first.offsetTop + first.offsetHeight / 2;
    const lastCenter = last.offsetTop + last.offsetHeight / 2;

    // Set the line top and height
    lineTop = firstCenter;
    lineHeight = lastCenter - firstCenter;

    // Set the line top and height
    container.style.setProperty("--line-top", `${lineTop}px`);
    container.style.setProperty("--line-height", `${lineHeight}px`);

    animationEnabled = true;
    container.classList.add("active");
  };

  /** Update the progress of the scroll line */
  const updateProgress = () => {
    if (!animationEnabled) return;

    const rect = container.getBoundingClientRect();
    const lineStartViewportY = rect.top + lineTop;

    const viewportCenter = window.innerHeight * FILL_OFFSET_FACTOR;

    const progress = (viewportCenter - lineStartViewportY) / lineHeight;
    const clamped = Math.max(0, Math.min(progress, 1));

    const fillPixels = lineHeight * clamped;

    // Set the fill height and dot top
    container.style.setProperty("--fill-height", `${fillPixels}px`);
    container.style.setProperty("--dot-top", `${fillPixels}px`);

    const fillEndY = lineStartViewportY + fillPixels;

    /** Step activation for each step */
    stepMeta.forEach(({ circle, titles, descriptions, numbers }) => {
      if (!circle) return;

      const circleRect = circle.getBoundingClientRect();
      const circleCenter = circleRect.top + circleRect.height / 2;

      const isActive = fillEndY >= circleCenter - 1;

      circle.classList.toggle("bg-n-950", isActive);
      circle.classList.toggle("scale-115", isActive);
      circle.classList.toggle("bg-n-500", !isActive);

      titles.forEach((el) => {
        el.classList.toggle("text-n-950", isActive);
        el.classList.toggle("text-n-500", !isActive);
      });

      descriptions.forEach((el) => {
        el.classList.toggle("text-n-700", isActive);
        el.classList.toggle("text-n-500", !isActive);
      });

      numbers.forEach((el) => {
        el.classList.toggle("text-n-950", isActive);
        el.classList.toggle("text-n-500", !isActive);
      });
    });

    frameRequested = false;
  };

  /** Scroll event handler */
  const onScroll = () => {
    if (!frameRequested) {
      frameRequested = true;
      requestAnimationFrame(updateProgress);
    }
  };

  /** Resize event handler */
  const onResize = () => {
    calculateGeometry();
    updateProgress();
  };

  /** Add event listeners */
  window.addEventListener("scroll", onScroll, { passive: true });

  /** Observe container for resize */
  const resizeObserver = new ResizeObserver(onResize);
  resizeObserver.observe(container);

  calculateGeometry();
  updateProgress();

  /** Cleanup (important if reused in SPA) */
  return () => {
    window.removeEventListener("scroll", onScroll);
    resizeObserver.disconnect();
  };
};

// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate Project Consumption Process Section */
export const animateProjectConsumptionProcessSection = () => {
  // Detect when the Section comes into the Screen
  inView("#project-consumption-process-section", (projectConsumptionProcessSection) => {
    // Animate the Section Header Part
    animate(
      projectConsumptionProcessSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      projectConsumptionProcessSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );
  });

  inView(".process-step", (stepItem) => {
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
};
