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
    containScroll: false,
  });

  nextBtn.addEventListener("click", () => {
    if (!embla.canScrollNext() && loop) {
      embla.scrollTo(0);
    } else {
      embla.scrollNext();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (!embla.canScrollPrev() && loop) {
      embla.scrollTo(embla.slideNodes().length - 1); // first → last
    } else {
      embla.scrollPrev();
    }
  });
}
