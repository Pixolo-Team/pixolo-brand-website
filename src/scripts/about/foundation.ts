// OTHERS //
import { animate, inView } from "motion";

/** Initialize the Foundation Accordion */
export function initFoundationAccordion(rootSelector = "[data-accordion]", interval = 8000) {
  const accordions = document.querySelectorAll(rootSelector);

  /** Loop through all the Accordions */
  accordions.forEach((accordion) => {
    const accordianItems = Array.from(accordion.querySelectorAll(".foundation-item"));

    if (!accordianItems.length) return;

    /** Find the current index */
    let currentIndex = accordianItems.findIndex(
      (accordianItem) => accordianItem.dataset.state === "open",
    );
    if (currentIndex === -1) currentIndex = 0;

    let timer = null;

    /** Reset Progress */
    function resetProgress(item) {
      /** Find the fill */
      const fill = item.querySelector(".foundation-progress-fill");
      if (!fill) return;

      fill.style.transition = "none";
      fill.style.width = "0%";

      // Force reflow
      fill.offsetWidth;

      fill.style.transition = `width ${interval}ms linear`;
      fill.style.width = "100%";
    }

    /** Function to Open Item */
    function openItem(index) {
      accordianItems.forEach((accordianItem, i) => {
        accordianItem.dataset.state = i === index ? "open" : "closed";

        const description = accordianItem.querySelector(".foundation-description");

        if (description) {
          if (i === index) {
            description.style.maxHeight = description.scrollHeight + "px";
          } else {
            description.style.maxHeight = "0px";
          }
        }
      });

      resetProgress(accordianItems[index]);
      currentIndex = index;
      restartTimer();
    }

    function nextItem() {
      const nextIndex = (currentIndex + 1) % accordianItems.length;
      openItem(nextIndex);
    }

    function restartTimer() {
      clearTimeout(timer);
      timer = setTimeout(nextItem, interval);
    }

    // Click handlers
    accordianItems.forEach((accordianItem, index) => {
      const header = accordianItem.querySelector(".foundation-item > div:first-child");

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
