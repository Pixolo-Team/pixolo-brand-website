// OTHERS //
import { animate } from "motion";

/** Function open and close contact form modal */
export const initContactFormModal = () => {
  /** Get required elements */
  const backdrop = document.getElementById("backdrop-modal");
  const closeBtn = document.getElementById("close-btn");

  /** Check if required elements are present */
  if (!backdrop || !closeBtn) {
    console.warn("ContactForm: Required elements not found. Modal functionality may not work.");
    return;
  }

  /** Function to disable scroll when modal is open */
  const disableScroll = () => {
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScrollKeys);
  };

  /** Function to enable scroll when modal is closed */
  const enableScroll = () => {
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
    window.removeEventListener("keydown", preventScrollKeys);
  };

  /** Function to prevent scroll when modal is open */
  const preventScroll = (e: Event) => {
    e.preventDefault();
  };

  /** Function to prevent scroll when modal is open */
  const preventScrollKeys = (e: KeyboardEvent) => {
    const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
    if (keys.includes(e.key)) e.preventDefault();
  };

  /** Function to animte the modal on open */
  const fadeIn = (formElement: HTMLElement) => {
    animate(
      formElement,
      { opacity: [0, 1], scale: [0.96, 1] },
      {
        duration: 0.3,
        easing: "ease-out",
      },
    );
  };

  /** Function to animte the modal on close */
  const fadeOut = (formElement: HTMLElement, onFinish: () => void) => {
    animate(
      formElement,
      { opacity: [1, 0], scale: [1, 0.96] },
      {
        duration: 0.2,
        easing: "ease-in",
      },
    ).finished.then(onFinish);
  };

  /** Function to open the modal */
  const openModal = () => {
    if (backdrop.classList.contains("visible")) return;

    backdrop.classList.remove("opacity-0", "invisible");
    backdrop.classList.add("opacity-100", "visible");

    fadeIn(backdrop);
    disableScroll();
  };

  /** Function to close the modal */
  const closeModal = () => {
    fadeOut(backdrop, () => {
      backdrop.classList.remove("visible");
      backdrop.classList.add("invisible");
      enableScroll();
    });
  };

  /** Event Listeners */
  window.addEventListener("open-contact-modal", openModal);
  closeBtn.addEventListener("click", closeModal);

  /** Close modal when backdrop is clicked */
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  /** Close modal when escape key is pressed */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("visible")) {
      closeModal();
    }
  });
};
