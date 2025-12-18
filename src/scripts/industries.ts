import EmblaCarousel from "embla-carousel";

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("industry-slider");
  const prevBtn = document.getElementById("slide-prev");
  const nextBtn = document.getElementById("slide-next");

  if (slider && prevBtn && nextBtn) {
    const embla = EmblaCarousel(slider, {
      loop: false,
    });

    nextBtn.addEventListener("click", () => {
      embla.scrollNext();
    });

    prevBtn.addEventListener("click", () => {
      embla.scrollPrev();
    });
  }
});
