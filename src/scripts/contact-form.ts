// OTHERS //
import { animate } from "motion";

// DATA //
// Importing only for Email logic and generic required messages
import { formErrors, validationRules } from "@/data/errors";

// HELPER FUNCTIONS //

/** * Helper: Create error element with icon and message
 * Matches the visual style (Red text + SVG)
 */
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

/** * Helper: Get or create error messages container for input
 * Navigates the specific DOM structure of InputField.astro
 */
const getOrCreateErrorContainer = (input: HTMLInputElement): HTMLElement | null => {
  const wrapper = input.closest(".flex.w-full.flex-col");
  if (!wrapper) return null;

  let errorContainer = wrapper.querySelector(".error-messages-container") as HTMLElement | null;

  if (!errorContainer) {
    errorContainer = document.createElement("div");
    errorContainer.className = "error-messages-container flex flex-col gap-2.5 md:gap-3 mt-2";
    wrapper.appendChild(errorContainer);
  }
  return errorContainer;
};

/** * Helper: Validate input value against rules
 */
const validateInput = (input: HTMLInputElement): boolean => {
  const value = input.value.trim();
  const errorContainer = getOrCreateErrorContainer(input);

  if (!errorContainer) return true;

  // Clear previous state
  errorContainer.innerHTML = "";

  const errors: string[] = [];

  // 1. Check Required
  if (!value) {
    // We can use the imported "This field is required" message for consistency
    if (input.id === "phoneNo") errors.push(formErrors.phone.required);
    if (input.id === "emailFrom") errors.push(formErrors.email.required);
  }

  // 2. Check Format (only if value exists)
  if (value) {
    // --- EMAIL: Use Imported Rules (error.ts) ---
    if (input.id === "emailFrom") {
      if (!validationRules.email.pattern.test(value)) {
        errors.push(formErrors.email[validationRules.email.errorKey]);
      }
    }

    // --- PHONE: Use Local Strict Logic (Your custom code) ---
    if (input.id === "phoneNo") {
      // Strictly 10 digits only
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
};

/** * Helper: Create and show Success/Error modal
 */
const createAndShowModal = (title: string, message: string, isSuccess: boolean): void => {
  // Create backdrop
  const backdrop = document.createElement("div");
  backdrop.className =
    "fixed inset-0 z-[60] flex h-screen w-full items-center justify-center bg-black/50 px-6 py-24 opacity-0 transition-opacity duration-300";
  backdrop.style.visibility = "hidden";

  // Create modal container
  const modalContainer = document.createElement("div");
  modalContainer.className =
    "relative z-20 w-full max-w-[596px] flex flex-col items-center rounded-[32px] bg-[rgb(14,23,43)] px-[34px] py-8 gap-[10px]";

  // Success State (Animation)
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
    // Error State (Icon)
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

  // Content Wrapper
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

  // Close Button
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
};

/** * Function to open and close contact form modal
 * Also handles validation and submission logic
 */
export const initContactFormModal = () => {
  const backdrop = document.getElementById("backdrop-modal");
  const closeBtn = document.getElementById("close-btn");

  const contactForm = document.getElementById("contact-form") as HTMLFormElement;
  const submitBtn = contactForm?.querySelector("button");
  const emailInput = document.getElementById("emailFrom") as HTMLInputElement;
  const phoneInput = document.getElementById("phoneNo") as HTMLInputElement;

  // Optional elements
  const subjectInput = document.getElementById("Subject") as
    | HTMLInputElement
    | HTMLSelectElement
    | null;
  const messageInput = document.getElementById("additionalNote") as HTMLTextAreaElement | null;

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
  const preventScroll = (e: Event) => e.preventDefault();

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
      { duration: 0.3, easing: "ease-out" },
    );
  };

  /** Function to animte the modal on close */
  const fadeOut = (formElement: HTMLElement, onFinish: () => void) => {
    animate(
      formElement,
      { opacity: [1, 0], scale: [1, 0.96] },
      { duration: 0.2, easing: "ease-in" },
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

  // --- Validation & Submission Logic ---

  if (!document.querySelector('script[src*="dotlottie-wc"]')) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js";
    script.type = "module";
    document.head.appendChild(script);
  }

  if (submitBtn && contactForm) {
    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault();

      const isEmailValid = emailInput ? validateInput(emailInput) : true;
      const isPhoneValid = phoneInput ? validateInput(phoneInput) : true;

      if (!isEmailValid || !isPhoneValid) {
        return;
      }

      try {
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        // Prepare JSON payload using optional chaining for safety
        const payload = {
          from_email: emailInput.value.trim(),
          phone_number: phoneInput.value.trim(),
          subject: subjectInput ? subjectInput.value : "Website enquiry",
          message: messageInput ? messageInput.value.trim() : "",
        };

        // Real API Call
        const response = await fetch(
          "https://pixoloproductions.com/api/pixolo-website/contact-form.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          },
        );

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        closeModal();
        createAndShowModal("Cheers!", "You're good to go—your form has been submitted", true);
        contactForm.reset();
      } catch (error) {
        console.error("Submission error", error);
        createAndShowModal(
          "Oops!",
          "An unexpected issue has occurred—please try again shortly",
          false,
        );
        contactForm.reset();
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
      }
    });
  }
};
