// OTHERS //
import EmblaCarousel from "embla-carousel";

interface InitSliderOptions {
  sliderId: string;
  prevId: string;
  nextId: string;
  loop?: boolean;
}

export function initSlider({ sliderId, prevId, nextId, loop = false }: InitSliderOptions) {
  const slider = document.getElementById(sliderId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);

  if (!slider || !prevBtn || !nextBtn) return;

  const embla = EmblaCarousel(slider, {
    loop,
    align: "start",
    skipSnaps: false,
  });

  nextBtn.addEventListener("click", () => embla.scrollNext());
  prevBtn.addEventListener("click", () => embla.scrollPrev());
}
