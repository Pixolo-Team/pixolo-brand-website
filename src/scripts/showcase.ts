// OTHERS //
import EmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType } from "embla-carousel";

const addTogglePrevNextBtnsActive = (
  emblaApi: EmblaCarouselType,
  prevBtn: HTMLElement,
  nextBtn: HTMLElement,
): (() => void) => {
  const togglePrevNextBtnsState = (): void => {
    if (emblaApi.canScrollPrev()) prevBtn.removeAttribute("disabled");
    else prevBtn.setAttribute("disabled", "disabled");

    if (emblaApi.canScrollNext()) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "disabled");
  };

  emblaApi
    .on("select", togglePrevNextBtnsState)
    .on("init", togglePrevNextBtnsState)
    .on("reInit", togglePrevNextBtnsState);

  return (): void => {
    prevBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
  };
};

export const addPrevNextBtnsClickHandlers = (
  emblaApi: EmblaCarouselType,
  prevBtn: HTMLElement,
  nextBtn: HTMLElement,
): (() => void) => {
  const scrollPrev = (): void => {
    emblaApi.scrollPrev();
  };
  const scrollNext = (): void => {
    emblaApi.scrollNext();
  };
  prevBtn.addEventListener("click", scrollPrev, false);
  nextBtn.addEventListener("click", scrollNext, false);

  const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(emblaApi, prevBtn, nextBtn);

  return (): void => {
    removeTogglePrevNextBtnsActive();
    prevBtn.removeEventListener("click", scrollPrev, false);
    nextBtn.removeEventListener("click", scrollNext, false);
  };
};

const setupProgressBar = (
  emblaApi: EmblaCarouselType,
  progressNode: HTMLElement,
): {
  applyProgress: () => void;
  removeProgress: () => void;
} => {
  const applyProgress = (): void => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    progressNode.style.transform = `translate3d(${progress * 100}%,0px,0px)`;
  };

  const removeProgress = (): void => {
    progressNode.removeAttribute("style");
  };

  return {
    applyProgress,
    removeProgress,
  };
};

const OPTIONS: EmblaOptionsType = { dragFree: true };

export function initShowcaseSlider() {
  const emblaNode = <HTMLElement>document.querySelector("#showcase-slider");
  const viewportNode = <HTMLElement>emblaNode.querySelector(".embla__viewport");
  const prevBtn = <HTMLElement>emblaNode.querySelector(".slide-prev");
  const nextBtn = <HTMLElement>emblaNode.querySelector(".slide-next");
  const progressNode = <HTMLElement>emblaNode.querySelector(".embla__progress__bar");

  const emblaApi = EmblaCarousel(viewportNode, OPTIONS);
  const { applyProgress, removeProgress } = setupProgressBar(emblaApi, progressNode);

  const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtn, nextBtn);

  emblaApi
    .on("init", applyProgress)
    .on("reInit", applyProgress)
    .on("scroll", applyProgress)
    .on("slideFocus", applyProgress)
    .on("destroy", removeProgress)
    .on("destroy", removePrevNextBtnsClickHandlers);
}

let view = "list";

export function initShowcase() {
  const gridIcon = document.getElementById("gridIcon");
  const listIcon = document.getElementById("listIcon");

  if (!gridIcon || !listIcon) return;

  gridIcon.addEventListener("click", () => {
    view = "grid";
    location.reload();
    console.log(view);
  });

  listIcon.addEventListener("click", () => {
    view = "list";
    location.reload();
    console.log(view);
  });
}

export function getView() {
  return view == "list" ? "list" : "grid";
}
