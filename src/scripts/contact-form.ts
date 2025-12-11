// FORM VALIDATION & INITIALIZATION SCRIPT //

import { formErrors } from "@/data/errors";

/**
 * Helper: Create error element with icon and message
 */
function createErrorElement(message: string): HTMLElement {
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
}

/**
 * Helper: Get or create error messages container for input
 */
function getOrCreateErrorContainer(input: HTMLInputElement): HTMLElement | null {
  const wrapper = input.closest(".flex.w-full.flex-col.gap-3");
  if (!wrapper) return null;

  let errorContainer = wrapper.querySelector(".error-messages-container") as HTMLElement | null;
  if (!errorContainer) {
    errorContainer = document.createElement("div");
    errorContainer.className = "error-messages-container flex flex-col gap-2.5 md:gap-3";
    wrapper.appendChild(errorContainer);
  }
  return errorContainer;
}

/**
 * Validate input value against rules
 */
function validateInput(input: HTMLInputElement): boolean {
  const value = input.value.trim();
  const errorContainer = getOrCreateErrorContainer(input);
  if (!errorContainer) return true;

  errorContainer.innerHTML = "";

  // Only check format validations if field has a value
  const errors: string[] = [];

  // Check if field is empty (required validation) - ONLY show for name, phone, email (not message)
  if (!value && input.id !== "message") {
    const requiredError =
      input.id === "name"
        ? formErrors.name.required
        : input.id === "phone"
          ? formErrors.phone.required
          : formErrors.email.required;
    errorContainer.appendChild(createErrorElement(requiredError));
    return false;
  }

  // Validation for Name field - reject numbers
  if (input.id === "name" && value) {
    if (/\d/.test(value)) {
      errors.push(formErrors.name.containsNumbers);
    }
  }

  // Validation for Phone field - reject non-numeric characters (except common phone formatting)
  if (input.id === "phone" && value) {
    if (!/^[0-9\s\-\+\(\)]+$/.test(value)) {
      errors.push(formErrors.phone.invalidFormat);
    }
  }

  // Validation for Email field
  if (input.id === "email" && value) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors.push(formErrors.email.invalidFormat);
    }
  }

  // Display format errors
  errors.forEach((error) => {
    errorContainer.appendChild(createErrorElement(error));
  });

  return errors.length === 0;
}

/**
 * Initialize form validation with event listeners
 */
export const initializeFormValidation = () => {
  const nameInput = document.getElementById("name") as HTMLInputElement | null;
  const phoneInput = document.getElementById("phone") as HTMLInputElement | null;
  const emailInput = document.getElementById("email") as HTMLInputElement | null;
  const messageInput = document.getElementById("message") as HTMLInputElement | null;

  // Add validation event listeners to all inputs
  if (nameInput) {
    nameInput.addEventListener("blur", () => validateInput(nameInput));
    nameInput.addEventListener("input", () => validateInput(nameInput));
  }

  if (phoneInput) {
    phoneInput.addEventListener("blur", () => validateInput(phoneInput));
    phoneInput.addEventListener("input", () => validateInput(phoneInput));
  }

  if (emailInput) {
    emailInput.addEventListener("blur", () => validateInput(emailInput));
    emailInput.addEventListener("input", () => validateInput(emailInput));
  }

  if (messageInput) {
    messageInput.addEventListener("blur", () => validateInput(messageInput));
    messageInput.addEventListener("input", () => validateInput(messageInput));
  }
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

      // Clear previous timeout if it exists
      if (resetTimeout) clearTimeout(resetTimeout);

      // Create new timeout
      resetTimeout = window.setTimeout(() => {
        checkIcon.classList.add("hidden");
        copyIcon.classList.remove("hidden");
        resetTimeout = undefined;
      }, 3000);
    });
  });
};
