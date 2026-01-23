// FORM VALIDATION & INITIALIZATION SCRIPT //

// DATA //
import { formErrors, validationRules } from "@/data/errors";

// --- HELPER FUNCTIONS --- //

/**
 * Helper: Create error element with icon and message
 * Matches the visual style (Red text + SVG)
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
 * Navigates the specific DOM structure of InputField.astro
 */
function getOrCreateErrorContainer(input: HTMLInputElement): HTMLElement | null {
  // Relaxed selector to ensure it finds the wrapper
  const wrapper = input.closest(".flex.w-full.flex-col");
  if (!wrapper) return null;

  let errorContainer = wrapper.querySelector(".error-messages-container") as HTMLElement | null;
  
  if (!errorContainer) {
    errorContainer = document.createElement("div");
    // Matches the gap used in InputField.astro
    errorContainer.className = "error-messages-container flex flex-col gap-2.5 md:gap-3 mt-2";
    wrapper.appendChild(errorContainer);
  }
  return errorContainer;
}

/**
 * Validate input value against rules
 * Returns true if valid, false if invalid.
 */
function validateInput(input: HTMLInputElement): boolean {
  const value = input.value.trim();
  const errorContainer = getOrCreateErrorContainer(input);

  if (!errorContainer) return true;

  // Clear previous state
  errorContainer.innerHTML = "";

  const errors: string[] = [];

  // 1. Check Required
  if (!value) {
    // Note: 'message' is removed from here to make it OPTIONAL.
    if (input.id === "name") errors.push(formErrors.name.required);
    else if (input.id === "phone") errors.push(formErrors.phone.required);
    else if (input.id === "email") errors.push(formErrors.email.required);
  }

  // 2. Check Format (only if value exists)
  if (value) {
    // --- NAME: STRICT TEXT ONLY (No numbers, No symbols) ---
    if (input.id === "name") {
      // Regex: Start to End must contain ONLY letters (a-z, A-Z) and spaces (\s)
      const strictNameRegex = /^[a-zA-Z\s]+$/;
      if (!strictNameRegex.test(value)) {
        errors.push("Name must contain letters only.");
      }
    }

    // --- EMAIL: Use Imported Rules ---
    if (input.id === "email") {
      if (!validationRules.email.pattern.test(value)) {
        // @ts-ignore
        errors.push(formErrors.email[validationRules.email.errorKey]);
      }
    }

    // --- PHONE: Use Local Strict Logic (10 Digits) ---
    if (input.id === "phone") {
      const strictPhoneRegex = /^\d{10}$/;
      if (!strictPhoneRegex.test(value)) {
        errors.push("Please enter a valid 10-digit phone number.");
      }
    }
  }

  // 3. Render errors if any
  if (errors.length > 0) {
    errors.forEach((error) => {
      errorContainer.appendChild(createErrorElement(error));
    });

    // Attach listener to clear error on typing
    input.addEventListener(
      "input",
      () => {
        errorContainer.innerHTML = "";
      },
      { once: true },
    );

    return false;
  }

  return true;
}

/**
 * Helper: Create and show modal with message
 */
function createAndShowModal(title: string, message: string, isSuccess: boolean): void {
  // Create backdrop
  const backdrop = document.createElement("div");
  backdrop.className =
    "fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/50 px-6 py-24 opacity-0 transition-opacity duration-300";
  backdrop.style.visibility = "hidden";

  // Create modal container
  const modalContainer = document.createElement("div");
  modalContainer.className =
    "relative z-20 w-full max-w-[596px] flex flex-col items-center rounded-[32px] bg-[rgb(14,23,43)] px-[34px] py-8 gap-[10px]";

  if (isSuccess) {
    const animationContainer = document.createElement("div");
    animationContainer.className = "mb-6 flex justify-center";

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
  } else {
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
  }

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "flex w-full flex-col gap-[17px]";

  const titleEl = document.createElement("h2");
  titleEl.className = "font-neometric text-2xl font-normal text-white text-center";
  titleEl.textContent = title;
  contentWrapper.appendChild(titleEl);

  const messageEl = document.createElement("p");
  messageEl.className = "font-neometric text-xl font-normal text-slate-400 text-center";
  messageEl.textContent = message;
  contentWrapper.appendChild(messageEl);

  modalContainer.appendChild(contentWrapper);

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

  setTimeout(() => {
    backdrop.style.visibility = "visible";
    backdrop.classList.remove("opacity-0");
    backdrop.classList.add("opacity-100");
  }, 10);
}

// --- EXPORTED INITIALIZATION FUNCTIONS --- //

/**
 * Initialize form validation listeners
 * Loads the Lottie script so animations are ready on submit.
 */
export const initializeFormValidation = () => {
  if (!document.querySelector('script[src*="dotlottie-wc"]')) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js";
    script.type = "module";
    document.head.appendChild(script);
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
  const forms = document.querySelectorAll("form[aria-label='Contact form']");
  if (!forms || forms.length === 0) return;

  forms.forEach((form) => {
    const formElement = form as HTMLFormElement;
    
    // Disable browser default validation bubble
    formElement.noValidate = true;

    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;

    formElement.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!submitBtn) return;

      const nameInput = formElement.querySelector("#name") as HTMLInputElement | null;
      const phoneInput = formElement.querySelector("#phone") as HTMLInputElement | null;
      const emailInput = formElement.querySelector("#email") as HTMLInputElement | null;
      const messageInput = formElement.querySelector("#message") as HTMLInputElement | null;

      let isValid = true;

      // Validate on click
      if (nameInput && !validateInput(nameInput)) isValid = false;
      if (phoneInput && !validateInput(phoneInput)) isValid = false;
      if (emailInput && !validateInput(emailInput)) isValid = false;
      if (messageInput && !validateInput(messageInput)) isValid = false;

      if (!isValid) return;

      try {
        submitBtn.setAttribute("aria-disabled", "true");
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        // Simulate form submission (Dummy API Call)
        await new Promise((resolve) => setTimeout(resolve, 500));

        createAndShowModal("Cheers!", "You're good to go—your form has been submitted", true);
        formElement.reset();
        
      } catch (error) {
        console.error("Form submission error:", error);
        createAndShowModal(
          "Oops!",
          "An unexpected issue has occurred—please try again shortly",
          false,
        );
      } finally {
        submitBtn.removeAttribute("aria-disabled");
        submitBtn.disabled = false;
        submitBtn.innerText = "Contact Us";
      }
    });
  });
};