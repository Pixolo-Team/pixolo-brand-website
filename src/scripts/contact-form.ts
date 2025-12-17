/** Function open and close contact form modal */
export const initContactFormModal = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const backdrop = document.getElementById("backdrop-modal");
    const closeBtn = document.getElementById("close-btn");

    if (!backdrop || !closeBtn) {
      console.warn("ContactForm: Required elements not found. Modal functionality may not work.");
      return;
    }

    // Open modal (custom event)
    window.addEventListener("open-contact-modal", () => {
      backdrop.classList.remove("opacity-0", "invisible");
      backdrop.classList.add("opacity-100", "visible");
      document.body.style.overflow = "hidden";
    });

    // Close button
    closeBtn.addEventListener("click", closeModal);

    // Click on backdrop only
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });

    // ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && backdrop.classList.contains("visible")) {
        closeModal();
      }
    });

    function closeModal() {
      backdrop.classList.remove("opacity-100", "visible");
      backdrop.classList.add("opacity-0", "invisible");
      document.body.style.overflow = "";
    }
  });
};
