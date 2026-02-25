// OTHERS //
import { animate, inView } from "motion";

/** Initialize the Foundation Accordion */
export const initFoundationAccordion = (
  rootSelector: string = "[data-accordion]",
  interval: number = 8000,
) => {
  const accordions = document.querySelectorAll<HTMLElement>(rootSelector);
  const cleanupCallbacks: Array<() => void> = [];

  /** Loop through all Accordions */
  accordions.forEach((accordion) => {
    const accordionItems = Array.from(accordion.querySelectorAll<HTMLElement>(".foundation-item"));

    if (!accordionItems.length) return;
    let currentIndex = accordionItems.findIndex((item) => item.dataset.state === "open") ?? 0;

    if (currentIndex === -1) currentIndex = 0;
    let accordionTimer: ReturnType<typeof setTimeout> | null = null;

    /** Reset Progress */
    const resetProgress = (item: HTMLElement) => {
      const fill = item.querySelector<HTMLElement>(".foundation-progress-fill");
      if (!fill) return;

      fill.style.transition = "none";
      fill.style.width = "0%";

      // Force reflow intentionally
      void fill.offsetWidth;
      fill.style.transition = `width ${interval}ms linear`;
      fill.style.width = "100%";
    };

    /** Function to smoothly open an item */
    const openItem = (index: number) => {
      /** Loop through all items */
      accordionItems.forEach((accordionItem, accordionIndex) => {
        const isOpen = accordionIndex === index;

        accordionItem.dataset.state = isOpen ? "open" : "closed";

        /** Set ARIA attributes */
        const trigger = accordionItem.querySelector<HTMLButtonElement>("button");
        if (trigger) {
          trigger.setAttribute("aria-expanded", String(isOpen));
        }

        /** Set Description Max Height */
        const description = accordionItem.querySelector<HTMLElement>(".foundation-description");

        if (description) {
          description.style.maxHeight = isOpen ? `${description.scrollHeight}px` : "0px";
        }
      });

      /** Reset Progress */
      resetProgress(accordionItems[index]);
      currentIndex = index;
      restartTimer();
    };

    /** Go To Next Item */
    const nextItem = () => {
      const nextIndex = (currentIndex + 1) % accordionItems.length;
      openItem(nextIndex);
    };

    /** Restart Timer */
    const restartTimer = () => {
      if (accordionTimer) clearTimeout(accordionTimer);
      accordionTimer = setTimeout(nextItem, interval);
    };

    /** Click Handlers */
    accordionItems.forEach((accordionItem, index) => {
      /** Get Header Button */
      const headerButton = accordionItem.querySelector<HTMLButtonElement>("button");

      if (!headerButton) return;

      /** Set Click Handler */
      const handleClick = () => openItem(index);

      headerButton.addEventListener("click", handleClick);

      /** Store cleanup */
      cleanupCallbacks.push(() => {
        headerButton.removeEventListener("click", handleClick);
      });
    });

    /** Start */
    openItem(currentIndex);

    /** Cleanup per accordion */
    cleanupCallbacks.push(() => {
      if (accordionTimer) clearTimeout(accordionTimer);
    });
  });

  /** Return cleanup function (VERY IMPORTANT) */
  return () => {
    cleanupCallbacks.forEach((cleanup) => cleanup());
  };
};

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
