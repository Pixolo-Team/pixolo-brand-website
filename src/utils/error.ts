/** Function to create error element */
export const createErrorElement = (message: string): HTMLElement => {
  const el = document.createElement("div");

  /** Set error element class */
  el.className = "flex items-center gap-1.5 md:gap-2";

  /** Set error element inner HTML */
  el.innerHTML = `
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
     <p class="text-xs leading-[17px] font-normal text-red-600 md:text-sm lg:text-base">${message}</p>
  `;
  return el;
};

/** Helper: Get or create error messages container for input
 * Navigates the specific DOM structure of InputField.astro
 */
export const getOrCreateErrorContainer = (input: HTMLInputElement): HTMLElement | null => {
  const wrapper = input.closest(".flex.w-full.flex-col");
  if (!wrapper) return null;

  /** Get or create error messages container for input */
  let errorContainer = wrapper.querySelector(".error-messages-container") as HTMLElement | null;

  /** If no error container, create one */
  if (!errorContainer) {
    errorContainer = document.createElement("div");
    errorContainer.className = "error-messages-container mt-2 flex flex-col gap-2 text-red-600";
    wrapper.appendChild(errorContainer);
  }

  /** Return error container */
  return errorContainer;
};
