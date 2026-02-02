// UTILS //
import { createErrorElement, getOrCreateErrorContainer } from "@/utils/error";

// DATA //
import { formErrors, validationRules } from "@/data/errors";

/** Helper: Validate input value against rules */
export const validateInput = (input: HTMLInputElement): boolean => {
  // Get input value
  const value = input.value.trim();

  // Get error container
  const container = getOrCreateErrorContainer(input);
  if (!container) return true;

  // Clear previous errors
  container.innerHTML = "";
  const errors: string[] = [];

  // Validate required fields
  if (!value) {
    if (input.id === "email") errors.push(formErrors.email.required);
    if (input.id === "phone") errors.push(formErrors.phone.required);
    if (input.id === "name") errors.push(formErrors.name.required);
    if (input.id === "emailFrom") errors.push(formErrors.email.required);
    if (input.id === "phoneNo") errors.push(formErrors.phone.required);
  }

  // Validate email format
  if (
    value &&
    ["email", "emailFrom"].includes(input.id) &&
    !validationRules.email.pattern.test(value)
  ) {
    errors.push(formErrors.email.invalidFormat);
  }

  // Validate phone format
  if (value && ["phone", "phoneNo"].includes(input.id) && !/^\d{10}$/.test(value)) {
    errors.push(formErrors.phone.invalidFormat);
  }

  // If no errors, return true
  if (!errors.length) return true;

  // Add error messages
  errors.forEach((err) => container.appendChild(createErrorElement(err)));

  /** Add event listener to clear errors on input */
  if (!input.dataset.errorBound) {
    input.addEventListener("input", () => (container.innerHTML = ""));
    input.dataset.errorBound = "true";
  }

  return false;
};
