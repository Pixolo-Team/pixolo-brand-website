/** Function to initialize testimonial */
export function initTestimonials() {
  const items = document.querySelectorAll<HTMLElement>(".testimonial-item");
  const textWrapper = document.getElementById("testimonial-text");
  const textEl = document.getElementById("testimonial-content");

  if (!items.length || !textWrapper || !textEl) return;

  // Set first active
  setActive(items[0]);

  const container = items[0].parentElement;
  if (!container) return;

  container.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest(".testimonial-item") as HTMLElement | null;
    if (!target) return;

    setActive(target);
  });

  function setActive(activeItem: HTMLElement) {
    items.forEach((item) => item.classList.remove("active"));
    activeItem.classList.add("active");

    // Fade text update
    textWrapper.style.opacity = "0";
    setTimeout(() => {
      textEl.textContent = activeItem.dataset.quote ?? "";
      textWrapper.style.opacity = "1";
    }, 200);
  }
}
