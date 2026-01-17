// OTHERS //
import { animate, inView, stagger } from "motion";

/** Function to toggle FAQ accordion */
export const toogleAccordion = () => {
  // Select all accordions
  const accordions = document.querySelectorAll("[data-faq-accordion]");

  // Add click event listener to each accordion
  accordions.forEach((accordion) => {
    const trigger = accordion.querySelector("[data-accordion-trigger]") as HTMLElement;
    const content = accordion.querySelector("[data-accordion-answer]") as HTMLElement;
    const plus = accordion.querySelector("[data-accordion-plus]") as HTMLElement;

    // Add click event listener to trigger
    trigger.addEventListener("click", () => {
      const isOpen = accordion.getAttribute("data-open") === "true";

      // Close all accordions first
      accordions.forEach((acc) => {
        acc.setAttribute("data-open", "false");
        acc.querySelector("[data-accordion-answer]").style.height = "0";
        acc.querySelector("[data-accordion-plus]")?.classList.remove("rotate-45");
      });

      // Toggle clicked accordion
      if (!isOpen) {
        accordion.setAttribute("data-open", "true");
        content.style.height = content.scrollHeight + "px";
        plus.classList.add("rotate-45");
      }
    });

    // Initialize height if already open (Astro handles the initial rotation)
    if (accordion.getAttribute("data-open") === "true") {
      content.style.height = content.scrollHeight + "px";
    } else {
      content.style.height = "0";
    }
  });
};

/** Animate the Client Section */
export const animateFaqSection = () => {
  // Detect when the Section comes into the Screen
  inView("#faq-section", (faqSection) => {
    /* Animate the Section Header Part */
    animate(
      faqSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    /* Animate the Section Header Text */
    animate(
      faqSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    /* Animate the Tabs Buttons */
    animate(
      faqSection?.querySelectorAll(".tabs-wrapper .button-tab"),
      { x: ["-50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 0.8 }) },
    );

    /* Animate the FAQ Items */
    animate(
      faqSection?.querySelectorAll(".faq-item"),
      { y: ["50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
