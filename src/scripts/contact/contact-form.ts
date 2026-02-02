// API SERVICES //
import { submitContactFormRequest } from "@/services/api/contact.api";

// UTILS //
import { validateInput } from "@/utils/validations";
import { showResultModal, hideResultModal } from "@/utils/modal";

// OTHERS //
import { trackContactFormError, trackContactFormSubmit } from "../analytics";

/** Initialize form submission */
export const initializeFormSubmission = () => {
  // Get form
  const form = document.getElementById("contact-form-section") as HTMLFormElement | null;
  if (!form) return;

  // Get submit button
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!submitBtn) return;

  // Inputs
  const emailInput = document.getElementById("email") as HTMLInputElement | null;
  const phoneInput = document.getElementById("phone") as HTMLInputElement | null;
  const nameInput = document.getElementById("name") as HTMLInputElement | null;
  const messageInput = document.getElementById("message") as HTMLInputElement | null;

  // Result modal close button
  const closeResultBtn = document.getElementById("close-contact-result-modal");
  closeResultBtn?.addEventListener("click", () => hideResultModal("contact-result-modal"));

  /** Handle form submission  */
  submitBtn.addEventListener("click", async (e) => {
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
      from_email: emailInput?.value.trim() || "",
      phone_number: phoneInput?.value.trim() || "",
      name: nameInput?.value.trim() || "",
      message: messageInput?.value.trim() || "",
    };

    // Submit form
    try {
      /** API Call to submit form */
      const response = await submitContactFormRequest(payload);

      // Track form submission
      if (response?.status) {
        trackContactFormSubmit(filledFieldsCount);
      } else {
        trackContactFormError(response?.message || "api_error");
      }

      // Show result modal
      showResultModal("contact-result-modal", response?.status ? "success" : "error");

      // Reset form
      form.reset();
    } catch {
      // Track form submission error
      trackContactFormError("api_failure");
      showResultModal("contact-result-modal", "error");

      // Reset form
      form.reset();
    } finally {
      // Enable submit button
      submitBtn.disabled = false;
      submitBtn.innerText = "Contact Us";
    }
  });
};
