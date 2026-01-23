/** Function to handle the bottom CTA click */
export const bottomCtaClick = () => {
  // Listen for a click
  document.addEventListener("click", (event) => {
    const target = event.target;

    // Ensure the target is an HTMLElement
    if (!(target instanceof Element)) return;
    // Check if the click happened inside the CTA
    const ctaButton = target.closest("#open-contact-modal");

    // If the click is not on the CTA, do nothing
    if (!ctaButton) return;

    // Dispatch a custom event to open the contact modal
    window.dispatchEvent(new Event("open-contact-modal"));
  });
};
