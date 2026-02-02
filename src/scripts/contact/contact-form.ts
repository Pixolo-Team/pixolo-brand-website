// FORM VALIDATION & INITIALIZATION SCRIPT //

// DATA //
import { formErrors, validationRules } from "@/data/errors";

// --- HELPER FUNCTIONS --- //
/* RESULT MODAL HELPERS */
/** Function to show result modal */
const showResultModal = (state: "success" | "error") => {
  const modal = document.getElementById("contact-result-modal");
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
};

/** Function to hide result modal */
const hideResultModal = () => {
  const modal = document.getElementById("contact-result-modal");
  modal?.classList.add("hidden");
  modal?.classList.remove("flex");
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

/**
 * Initialize form validation listeners
 * Loads the Lottie script so animations are ready on submit.
 */
/** Helper: Validate input value against rules */
const validateInput = (input: HTMLInputElement): boolean => {
  const value = input.value.trim();
  const container = getOrCreateErrorContainer(input);
  if (!container) return true;

  container.innerHTML = "";
  const errors: string[] = [];

  if (!value) {
    if (input.id === "email") errors.push(formErrors.email.required);
    if (input.id === "phone") errors.push(formErrors.phone.required);
    if (input.id === "name") errors.push(formErrors.name.required);
  }

  if (value && input.id === "email" && !validationRules.email.pattern.test(value)) {
    errors.push(formErrors.email.invalidFormat);
  }

  if (value && input.id === "phone" && !/^\d{10}$/.test(value)) {
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

/**
 * Initialize copy-to-clipboard functionality
 */
export const initializeCopyButtons = () => {
  const buttons = document.querySelectorAll<HTMLElement>(".copy-btn");

  buttons.forEach((btn) => {
    const text = btn.dataset.copy;
    if (!text) return;

    const copyIcon = btn.querySelector<HTMLElement>(".icon-copy");
    const checkIcon = btn.querySelector<HTMLElement>(".icon-check");
    if (!copyIcon || !checkIcon) return;

    let resetTimeout: number | undefined;

    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      await navigator.clipboard.writeText(text);

      copyIcon.classList.add("hidden");
      checkIcon.classList.remove("hidden");

      if (resetTimeout) clearTimeout(resetTimeout);

      resetTimeout = window.setTimeout(() => {
        checkIcon.classList.add("hidden");
        copyIcon.classList.remove("hidden");
        resetTimeout = undefined;
      }, 3000);
    });
  });
};

/**
 * Initialize form submission
 */
export const initializeFormSubmission = () => {
  const form = document.getElementById("contact-form-section") as HTMLFormElement | null;
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
  if (!submitBtn) return;

  const emailInput = document.getElementById("email") as HTMLInputElement | null;
  const phoneInput = document.getElementById("phone") as HTMLInputElement | null;
  const nameInput = document.getElementById("name") as HTMLInputElement | null;
  const messageInput = document.getElementById("message") as HTMLInputElement | null;

  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const isValid =
      (!emailInput || validateInput(emailInput)) &&
      (!phoneInput || validateInput(phoneInput)) &&
      (!nameInput || validateInput(nameInput));

    if (!isValid) return;

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    try {
      // await submitContactFormRequest(payload);
      showResultModal("success");
      form.reset();
    } catch {
      showResultModal("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = "Contact Us";
    }
  });
};
