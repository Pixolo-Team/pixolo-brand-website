// UTILS //
import { validateInput } from "@/utils/validations";
import {
  showResultModal,
  hideResultModal,
  disableScroll,
  enableScroll,
  closeResultModalOnBackdropClick,
  closeResultModal,
  runResultProgress,
} from "@/utils/modal";

// OTHERS //
import { trackContactFormError, trackContactFormSubmit } from "@/scripts/analytics";
import { animate } from "motion";

/** Initialize contact form modal */
export const initContactFormModal = () => {
  // DOM ELEMENTS - MODAL
  const backdrop = document.getElementById("backdrop-modal");
  const closeBtn = document.getElementById("close-btn");

  // Bail early if the modal backdrop elements are missing
  if (!backdrop || !closeBtn) {
    console.warn("ContactFormModal: Required elements not found.");
    return;
  }

  // Close result modal
  closeResultModal("submission-result-modal", "close-result-modal");
  closeResultModalOnBackdropClick("submission-result-modal");

  /** Fade in animation */
  const fadeIn = (el: HTMLElement) => {
    animate(el, { opacity: [0, 1], scale: [0.96, 1] }, { duration: 0.3 });
  };

  /** Fade out animation */
  const fadeOut = (el: HTMLElement, onFinish: () => void) => {
    animate(el, { opacity: [1, 0], scale: [1, 0.96] }, { duration: 0.2 }).finished.then(onFinish);
  };

  /** Open modal */
  const openModal = () => {
    backdrop.classList.remove("opacity-0", "invisible");
    backdrop.classList.add("opacity-100", "visible");
    fadeIn(backdrop);
    disableScroll();
  };

  /** Close modal */
  const closeModal = () => {
    fadeOut(backdrop, () => {
      backdrop.classList.remove("visible");
      backdrop.classList.add("invisible");
      enableScroll();
    });
  };

  // Register modal open/close listeners
  window.addEventListener("open-contact-modal", openModal);
  closeBtn.addEventListener("click", closeModal);

  /** Close modal on backdrop click */
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  /** Close modal on escape key press */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideResultModal("submission-result-modal");
      if (backdrop.classList.contains("visible")) closeModal();
    }
  });

  // DOM ELEMENTS - FORM
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const submitBtn = document.getElementById("submit-contact-btn") as HTMLAnchorElement | null;

  const emailInput = document.getElementById("emailFrom") as HTMLInputElement | null;
  const phoneInput = document.getElementById("phoneNo") as HTMLInputElement | null;
  const subjectInput = document.getElementById("subject") as HTMLSelectElement | null;
  const messageInput = document.getElementById("additionalNote") as HTMLTextAreaElement | null;

  // Bail if form elements are missing (modal still works for opening/closing)
  if (!form || !submitBtn || !emailInput || !phoneInput) {
    return;
  }

  /** Handle form submission */
  let isSubmitting = false;

  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    /** Get all inputs */
    const inputs = [phoneInput, emailInput];

    // Run validation on ALL inputs
    let isValid = true;

    /** Validate inputs */
    inputs.forEach((input) => {
      if (input && !validateInput(input)) {
        isValid = false;
      }
    });

    /** Validate form */
    if (!isValid) {
      trackContactFormError("validation_error");
      return;
    }

    /** Count filled fields (for analytics) */
    const filledFieldsCount = [emailInput, phoneInput, subjectInput, messageInput]
      .filter(Boolean)
      .filter((el) => (el as HTMLInputElement).value.trim().length > 0).length;

    /** Disable submit button */
    isSubmitting = true;
    submitBtn.innerText = "Sending...";

    /** Prepare payload */
    const payload = {
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      subject: subjectInput?.value.trim(),
      message: messageInput?.value.trim(),
    };

    /** Submit form */
    try {
      // Dynamic import to avoid blocking modal initialization when Supabase env vars are missing
      const { insertLead } = await import("@/services/supabase");

      /** API Call to submit form */
      const response = await insertLead({ ...payload, name: "" });

      /** Track form submission */
      if (response?.data) {
        trackContactFormSubmit(filledFieldsCount);
      } else {
        trackContactFormError(response?.error?.message || "api_error");
      }

      /** Close modal */
      closeModal();

      /** Show result modal */
      showResultModal("submission-result-modal", response?.data ? "success" : "error");
      runResultProgress("submission-result-modal", "result-progress-bar");

      // Reset form
      form.reset();
    } catch {
      /** Track form submission error */
      trackContactFormError("api_failure");

      /** Show result modal */
      showResultModal("submission-result-modal", "error");
      runResultProgress("submission-result-modal", "result-progress-bar");

      /** Reset form */
      form.reset();
    } finally {
      /** Enable submit button */
      isSubmitting = false;
      submitBtn.innerText = "Send Message";
    }
  });
};
