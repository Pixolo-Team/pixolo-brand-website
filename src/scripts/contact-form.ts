// FORM VALIDATION & INITIALIZATION SCRIPT //

// DATA //
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
    // Check if phone number has at least 10 digits
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      errors.push(formErrors.phone.lessThanTenDigits);
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

/**
 * Helper: Create and show modal with message
 */
function createAndShowModal(title: string, message: string, isSuccess: boolean): void {
  // Create backdrop
  const backdrop = document.createElement("div");
  backdrop.className =
    "fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/50 px-6 py-24 opacity-0 transition-opacity duration-300";
  backdrop.style.visibility = "hidden";

  // Create modal container (Frame 150)
  const modalContainer = document.createElement("div");
  modalContainer.className =
    "relative z-20 w-full max-w-[596px] flex flex-col items-center rounded-[32px] bg-[rgb(14,23,43)] px-[34px] py-8 gap-[10px]";

  if (isSuccess) {
    // Create animation container for dotlottie web component
    const animationContainer = document.createElement("div");
    animationContainer.className = "mb-6 flex justify-center";

    // Create dotlottie-wc element
    const dotLottie = document.createElement("dotlottie-wc");
    dotLottie.setAttribute(
      "src",
      "https://lottie.host/96cc3437-7213-4529-b27e-2aa9f4dee926/JouyZx5mvC.lottie",
    );
    dotLottie.setAttribute("style", "width: 96px; height: 96px;");
    dotLottie.setAttribute("autoplay", "");
    dotLottie.setAttribute("loop", "");

    animationContainer.appendChild(dotLottie);
    modalContainer.appendChild(animationContainer);

    // Create content wrapper (Frame 149)
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "flex w-full flex-col gap-[17px]";

    // Create title "Cheers!"
    const titleEl = document.createElement("h2");
    titleEl.className = "font-neometric text-2xl font-normal text-white text-center";
    titleEl.textContent = title;
    contentWrapper.appendChild(titleEl);

    // Create message
    const messageEl = document.createElement("p");
    messageEl.className = "font-neometric text-xl font-normal text-slate-400 text-center";
    messageEl.textContent = message;
    contentWrapper.appendChild(messageEl);

    modalContainer.appendChild(contentWrapper);
  } else {
    // Error modal with icon
    const iconDiv = document.createElement("div");
    iconDiv.className =
      "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20";

    const icon = document.createElement("svg");
    icon.className = "h-8 w-8 text-red-500";
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("stroke-width", "2");
    icon.innerHTML = `<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>`;
    iconDiv.appendChild(icon);
    modalContainer.appendChild(iconDiv);

    // Create error content wrapper
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "flex w-full flex-col gap-[17px]";

    // Create title
    const titleEl = document.createElement("h2");
    titleEl.className = "font-neometric text-2xl font-normal text-white text-center";
    titleEl.textContent = title;
    contentWrapper.appendChild(titleEl);

    // Create message
    const messageEl = document.createElement("p");
    messageEl.className = "font-neometric text-xl font-normal text-slate-400 text-center";
    messageEl.textContent = message;
    contentWrapper.appendChild(messageEl);

    modalContainer.appendChild(contentWrapper);
  }

  // Create close button (X)
  const closeBtn = document.createElement("button");
  closeBtn.className =
    "absolute top-3 right-3 flex h-6 w-6 items-center justify-center bg-transparent p-0 cursor-pointer text-slate-300 transition-opacity hover:opacity-70";
  closeBtn.innerHTML =
    '<svg class="h-full w-full" fill="currentColor" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2"></line><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2"></line></svg>';

  const closeModal = () => {
    backdrop.classList.remove("opacity-100");
    backdrop.classList.add("opacity-0");
    backdrop.style.visibility = "hidden";
    setTimeout(() => {
      backdrop.remove();
    }, 300);
  };

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  modalContainer.appendChild(closeBtn);
  backdrop.appendChild(modalContainer);
  document.body.appendChild(backdrop);

  // Trigger animation
  setTimeout(() => {
    backdrop.style.visibility = "visible";
    backdrop.classList.remove("opacity-0");
    backdrop.classList.add("opacity-100");
  }, 10);
}

/**
 * Initialize form submission
 */
export const initializeFormSubmission = () => {
  // Load dotlottie web component script
  if (!document.querySelector('script[src*="dotlottie-wc"]')) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js";
    script.type = "module";
    document.head.appendChild(script);
  }

  const forms = document.querySelectorAll("form[aria-label='Contact form']");
  if (!forms || forms.length === 0) return;

  forms.forEach((form) => {
    const formElement = form as HTMLFormElement;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;

    formElement.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!submitBtn) return;

      // Validate required fields present inside this form
      const nameInput = formElement.querySelector("#name") as HTMLInputElement | null;
      const phoneInput = formElement.querySelector("#phone") as HTMLInputElement | null;
      const emailInput = formElement.querySelector("#email") as HTMLInputElement | null;

      let isNameValid = true;
      let isPhoneValid = true;
      let isEmailValid = true;

      if (nameInput) isNameValid = validateInput(nameInput);
      if (phoneInput) isPhoneValid = validateInput(phoneInput);
      if (emailInput) isEmailValid = validateInput(emailInput);

      if (!isNameValid || !isPhoneValid || !isEmailValid) {
        return;
      }

      try {
        // Disable button during submission for accessibility
        submitBtn.setAttribute("aria-disabled", "true");
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API endpoint)
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Show success modal
        createAndShowModal("Cheers!", "You're good to go—your form has been submitted", true);

        // Reset form
        formElement.reset();
      } catch (error) {
        console.error("Form submission error:", error);
        // Show error modal
        createAndShowModal(
          "Oops!",
          "An unexpected issue has occurred—please try again shortly",
          false,
        );
      } finally {
        submitBtn.removeAttribute("aria-disabled");
        submitBtn.disabled = false;
      }
    });
  });
};
