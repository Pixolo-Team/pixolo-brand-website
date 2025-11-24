/**
 * Initialize copy buttons
 */
export function initCopyButtons() {
  const buttons = document.querySelectorAll(".copy-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const value = btn.getAttribute("data-copy");
      if (value) navigator.clipboard.writeText(value);
    });
  });
}
