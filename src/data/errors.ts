// FORM VALIDATION ERROR MESSAGES //
// Centralized error messages for form validation
export const formErrors = {
  name: {
    containsNumbers: "The name field must contain letters only",
    required: "This field is required",
  },
  phone: {
    invalidFormat: "Please enter a valid phone number",
    lessThanTenDigits: "The number should be 10 digits",
    required: "This field is required",
  },
  email: {
    invalidFormat: "Please enter a valid email address",
    required: "This field is required",
  },
  message: {
    tooShort: "Message must be at least 10 characters",
    required: "This field is required",
  },
};

// VALIDATION RULES //
// Patterns and rules for form field validation
export const validationRules = {
  name: {
    pattern: /^[a-zA-Z\s'-]*$/,
    errorKey: "containsNumbers",
  },
  phone: {
    pattern: /^[0-9\s\-\+\(\)]*$/,
    errorKey: "invalidFormat",
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorKey: "invalidFormat",
  },
};
