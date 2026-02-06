// SERVICES //
import { insertLead } from "@/services/supabase";

// UTILS //
import { validateInput } from "@/utils/validations";
import {
  showResultModal,
  runResultProgress,
  closeResultModalOnBackdropClick,
  closeResultModal,
} from "@/utils/modal";

// OTHERS //
import { trackContactFormError, trackContactFormSubmit } from "@/scripts/analytics";

/** Initialize form submission */
export const initializeFormSubmission = () => {
  // Get form
  const form = document.getElementById("contact-form-section") as HTMLFormElement | null;
  if (!form) return;

  // Get submit button
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!submitBtn) return;

  // Inputs
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const messageInput = document.getElementById("message") as HTMLInputElement | null;

  // Close result modal
  closeResultModal("contact-result-modal", "close-contact-result-modal");
  closeResultModalOnBackdropClick("contact-result-modal");

  /** Handle form submission  */
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get all inputs
    const inputs = [nameInput, phoneInput, emailInput];

    // Run validation on ALL inputs
    let isValid = true;

    // Validate all inputs
    inputs.forEach((input) => {
      if (input && !validateInput(input)) {
        isValid = false;
      }
    });

    // If any input is invalid, return
    if (!isValid) {
      trackContactFormError("validation_error");
      return;
    }

    // Count filled fields (for analytics)
    const filledFieldsCount = [emailInput, phoneInput, nameInput, messageInput]
      .filter(Boolean)
      .filter((el) => (el as HTMLInputElement).value.trim().length > 0).length;

    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    // Prepare payload
    const payload = {
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      name: nameInput.value.trim(),
      message: messageInput?.value.trim(),
    };

    // Submit form
    try {
      /** API Call to submit form */
      const response = await insertLead(payload);

      // Track form submission
      if (response?.data) {
        trackContactFormSubmit(filledFieldsCount);
      } else {
        trackContactFormError(response?.error?.message || "api_error");
      }

      // Show result modal
      showResultModal("contact-result-modal", response?.data ? "success" : "error");
      runResultProgress("contact-result-modal", "contact-result-progress-bar");

      // Reset form
      form.reset();
    } catch {
      // Track form submission error
      trackContactFormError("api_failure");

      // Show result modal
      showResultModal("contact-result-modal", "error");
      runResultProgress("contact-result-modal", "contact-result-progress-bar");

      // Reset form
      form.reset();
    } finally {
      // Enable submit button
      submitBtn.disabled = false;
      submitBtn.innerText = "Contact Us";
    }
  });
};
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    console.log("Contact form JS mounted");
    initializeFormSubmission();
  });
}
