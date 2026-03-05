// OTHERS //
import EmblaCarousel from "embla-carousel";

/**
 * Initializes the industry slider carousel controls on the page.
 */
export function initIndustrySlider() {
  // Get slider container
  const slider = document.getElementById("industry-slider");

  // Get navigation buttons
  const prevBtn = document.getElementById("industry-prev");
  const nextBtn = document.getElementById("industry-next");

  // Run only if all required elements exist
  if (!slider || !prevBtn || !nextBtn) return;

  // Initialize Embla carousel
  const embla = EmblaCarousel(slider, {
    loop: false,
    align: "start",
    skipSnaps: false,
  });

  // Scroll to next slide on next button click
  nextBtn.addEventListener("click", () => {
    embla.scrollNext();
  });

  // Scroll to previous slide on prev button click
  prevBtn.addEventListener("click", () => {
    embla.scrollPrev();
  });
}
