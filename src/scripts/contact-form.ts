// OTHERS //
import { animate } from "motion";

// DATA //
// Importing only for Email logic and generic required messages
import { formErrors, validationRules } from "@/data/errors";
import { submitContactFormRequest } from "@/services/api/contact.api";

/* SCROLL UTILITIES */
const preventScroll = (e: Event) => e.preventDefault();

/** Prevent Scroll on key press when modal is open */
const preventScrollKeys = (e: KeyboardEvent) => {
  const target = e.target as HTMLElement;

  // Allow typing in inputs & textareas
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
    return;
  }

  const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];

  if (keys.includes(e.key)) {
    e.preventDefault();
  }
};

/** Function to disable scroll */
const disableScroll = () => {
  window.addEventListener("wheel", preventScroll, { passive: false });
  window.addEventListener("touchmove", preventScroll, { passive: false });
  window.addEventListener("keydown", preventScrollKeys);
};

/** Function to enable scroll */
const enableScroll = () => {
  window.removeEventListener("wheel", preventScroll);
  window.removeEventListener("touchmove", preventScroll);
  window.removeEventListener("keydown", preventScrollKeys);
};

/* RESULT MODAL HELPERS */
/** Function to show result modal */
const showResultModal = (state: "success" | "error") => {
  const modal = document.getElementById("submission-result-modal");
  if (!modal) return;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  modal.querySelectorAll("[data-state]").forEach((el) => {
    el.classList.add("hidden");
    el.classList.remove("flex");
  });

  const active = modal.querySelector(`[data-state="${state}"]`);
  active?.classList.remove("hidden");
  active?.classList.add("flex");

  disableScroll();
};

/** Function to hide result modal */
const hideResultModal = () => {
  const modal = document.getElementById("submission-result-modal");
  modal?.classList.add("hidden");
  modal?.classList.remove("flex");
  enableScroll();
};

/** Function to create error element */
const createErrorElement = (message: string): HTMLElement => {
  const errorDiv = document.createElement("div");
  errorDiv.className = "flex items-center gap-1.5 md:gap-2";
  errorDiv.innerHTML = `
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
    <p class="text-xs leading-[17px] font-normal text-red-600 md:text-sm lg:text-base">${message}</p>
  `;
  return errorDiv;
};

/** Helper: Get or create error messages container for input
 * Navigates the specific DOM structure of InputField.astro
 */
const getOrCreateErrorContainer = (input: HTMLInputElement): HTMLElement | null => {
  const wrapper = input.closest(".flex.w-full.flex-col");
  if (!wrapper) return null;

  // Get or create error messages container for input
  let errorContainer = wrapper.querySelector(".error-messages-container") as HTMLElement | null;

  if (!errorContainer) {
    errorContainer = document.createElement("div");
    errorContainer.className = "error-messages-container flex flex-col gap-2.5 md:gap-3 mt-2";
    wrapper.appendChild(errorContainer);
  }
  return errorContainer;
};

/** Helper: Validate input value against rules */
const validateInput = (input: HTMLInputElement): boolean => {
  const value = input.value.trim();
  const container = getOrCreateErrorContainer(input);
  if (!container) return true;

  container.innerHTML = "";
  const errors: string[] = [];

  if (!value) {
    if (input.id === "emailFrom") errors.push(formErrors.email.required);
    if (input.id === "phoneNo") errors.push(formErrors.phone.required);
  }

  if (value && input.id === "emailFrom" && !validationRules.email.pattern.test(value)) {
    errors.push(formErrors.email.invalidFormat);
  }

  if (value && input.id === "phoneNo" && !/^\d{10}$/.test(value)) {
    errors.push(formErrors.phone.invalidFormat);
  }

  if (!errors.length) return true;

  errors.forEach((err) => container.appendChild(createErrorElement(err)));

  if (!input.dataset.errorBound) {
    input.addEventListener("input", () => {
      container.innerHTML = "";
    });
    input.dataset.errorBound = "true";
  }

  return false;
};

/** Function to open and close contact form modal. Also handles validation and submission logic */
export const initContactFormModal = () => {
  const backdrop = document.getElementById("backdrop-modal");
  const closeBtn = document.getElementById("close-btn");
  const closeResultBtn = document.getElementById("close-result-modal");

  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const submitBtn = form?.querySelector("button") as HTMLButtonElement | null;

  const emailInput = document.getElementById("emailFrom") as HTMLInputElement | null;
  const phoneInput = document.getElementById("phoneNo") as HTMLInputElement | null;
  const subjectInput = document.getElementById("subject") as HTMLSelectElement | null;
  const messageInput = document.getElementById("additionalNote") as HTMLTextAreaElement | null;

  if (!backdrop || !closeBtn || !form || !submitBtn || !emailInput || !phoneInput) {
    console.warn("ContactForm: Required elements not found.");
    return;
  }

  const fadeIn = (el: HTMLElement) => {
    animate(el, { opacity: [0, 1], scale: [0.96, 1] }, { duration: 0.3 });
  };

  /** Function to animte the modal on close */
  const fadeOut = (formElement: HTMLElement, onFinish: () => void) => {
    animate(formElement, { opacity: [1, 0], scale: [1, 0.96] }, { duration: 0.2 }).finished.then(
      onFinish,
    );
  };

  /** Function to open the modal */
  const openModal = () => {
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
  closeResultBtn?.addEventListener("click", hideResultModal);

  /** Close modal when backdrop is clicked */
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  /** Close modal when escape key is pressed */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideResultModal();
      if (backdrop.classList.contains("visible")) closeModal();
    }
  });

  /** Function to handle form submission */
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const isEmailValid = emailInput ? validateInput(emailInput) : true;
    const isPhoneValid = phoneInput ? validateInput(phoneInput) : true;
    if (!isEmailValid || !isPhoneValid) return;

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    // Prepare JSON payload using optional chaining for safety
    const payload = {
      from_email: emailInput.value.trim(),
      phone_number: phoneInput.value.trim(),
      subject: subjectInput ? subjectInput.value : "Website enquiry",
      message: messageInput ? messageInput.value.trim() : "",
    };

    try {
      // API call for form submission
      const response = await submitContactFormRequest(payload);
      closeModal();

      showResultModal(response?.status ? "success" : "error");
      form.reset();
    } catch {
      showResultModal("error");
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";
    }
  });
};
