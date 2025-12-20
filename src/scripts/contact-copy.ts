export const initCopyButtons = () => {
  const buttons = document.querySelectorAll<HTMLElement>(".copy-btn");

  buttons.forEach((btn) => {
    const text = btn.dataset.copy;
    if (!text) return;

    const copyIcon = btn.querySelector<HTMLElement>(".icon-copy");
    const checkIcon = btn.querySelector<HTMLElement>(".icon-check");
    if (!copyIcon || !checkIcon) return;

    // Store timeout ID on the button element
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
