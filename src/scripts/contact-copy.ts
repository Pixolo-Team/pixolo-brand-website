/** Initialize copy buttons */
export const initCopyButtons = () => {
  const buttons = document.querySelectorAll<HTMLElement>(".copy-btn");

  buttons.forEach((btn) => {
    const text = btn.dataset.copy;
    if (!text) return;

    // Get both the Icons
    const copyIcon = btn.querySelector<HTMLElement>(".icon-copy");
    const checkIcon = btn.querySelector<HTMLElement>(".icon-check");

    if (!copyIcon || !checkIcon) return;

    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Copy Text
      await navigator.clipboard.writeText(text);

      // Hide copy icon
      copyIcon.classList.add("hidden");
      // Show check icon
      checkIcon.classList.remove("hidden");

      // Auto-reset on setTimeout
      setTimeout(() => {
        // Hide copy icon
        checkIcon.classList.add("hidden");
        // Show copy icon
        copyIcon.classList.remove("hidden");
      }, 3000);
    });
  });
};
