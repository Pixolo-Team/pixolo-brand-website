// OTHERS //
import EmblaCarousel from "embla-carousel";

export function initShowcaseSlider() {
  // Grab wrapper nodes
  const rootNode = document.querySelector(".embla");
  const viewportNode = document.getElementById("showcase-slider");
  // Grab button nodes
  const prevButtonNode = rootNode?.querySelector("#slide-prev");
  const nextButtonNode = rootNode?.querySelector("#slide-next");
  // Grab progress node
  const progressNode = document.getElementById("embla__progress__bar");

  // Run only if all required elements exist
  if (!rootNode || !viewportNode || !prevButtonNode || !nextButtonNode || !progressNode) return;

  // Initialize Embla carousel
  const embla = EmblaCarousel(viewportNode, {
    loop: false,
    align: "start",
    skipSnaps: false,
  });

  const reInitialize = () => {
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    console.log(embla.scrollProgress());
    progressNode.style.width = `${progress * 100}%`;

    if (embla.canScrollNext()) nextButtonNode.children[0].classList.remove("text-n-500");
    else nextButtonNode.children[0].classList.add("text-n-500");
    if (embla.canScrollPrev()) prevButtonNode.children[0].classList.remove("text-n-500");
    else prevButtonNode.children[0].classList.add("text-n-500");
  };

  const removePrevNextBtnsClickHandlers = () => {
    nextButtonNode.removeEventListener(
      "click",
      () => {
        embla.scrollNext();
        reInitialize();
      },
      false,
    );
    prevButtonNode.removeEventListener(
      "click",
      () => {
        embla.scrollPrev();
        reInitialize();
      },
      false,
    );
  };

  // Scroll to next slide on next button click
  nextButtonNode.addEventListener("click", () => {
    embla.scrollNext();
    reInitialize();
  });

  // Scroll to previous slide on prev button click
  prevButtonNode.addEventListener("click", () => {
    embla.scrollPrev();
    reInitialize();
  });

  embla
    .on("init", reInitialize)
    .on("reInit", reInitialize)
    .on("scroll", reInitialize)
    .on("slideFocus", reInitialize)
    .on("destroy", () => {
      progressNode.removeAttribute("style");
    })
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
