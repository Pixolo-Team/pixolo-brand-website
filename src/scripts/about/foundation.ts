// OTHERS //
import { animate, inView } from "motion";

/** Initialize the Foundation Accordion */
export function initFoundationAccordion(rootSelector = "[data-accordion]", interval = 4000) {
  const accordions = document.querySelectorAll(rootSelector);

  accordions.forEach((accordion) => {
    const items = Array.from(accordion.querySelectorAll(".foundation-item"));

    if (!items.length) return;

    let currentIndex = items.findIndex((item) => item.dataset.state === "open");
    if (currentIndex === -1) currentIndex = 0;

    let timer = null;

    function resetProgress(item) {
      const fill = item.querySelector(".foundation-progress-fill");
      if (!fill) return;

      fill.style.transition = "none";
      fill.style.width = "0%";

      // Force reflow
      fill.offsetWidth;

      fill.style.transition = `width ${interval}ms linear`;
      fill.style.width = "100%";
    }

    function openItem(index) {
      items.forEach((item, i) => {
        item.dataset.state = i === index ? "open" : "closed";

        const fill = item.querySelector(".foundation-progress-fill");
        if (fill) {
          fill.style.transition = "none";
          fill.style.width = "0%";
        }
      });

      const activeItem = items[index];
      resetProgress(activeItem);

      currentIndex = index;
      restartTimer();
    }

    function nextItem() {
      const nextIndex = (currentIndex + 1) % items.length;
      openItem(nextIndex);
    }

    function restartTimer() {
      clearTimeout(timer);
      timer = setTimeout(nextItem, interval);
    }

    // Click handlers
    items.forEach((item, index) => {
      const header = item.querySelector(".foundation-item > div:first-child");

      if (!header) return;

      header.addEventListener("click", () => {
        openItem(index);
      });
    });

    // Start
    openItem(currentIndex);
  });
}

/** Animate the Foundation Section */
export const animateFoundationSection = () => {
  // Detect when the Section comes into the Screen
  inView("#foundation-section", (foundationSection) => {
    // Animate the Section Header Part
    animate(
      foundationSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      foundationSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );
  });
};
