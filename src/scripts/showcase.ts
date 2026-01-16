// OTHERS //
import EmblaCarousel from "embla-carousel";
import { animate, inView, stagger } from "motion";

/** Handle the Mini Project Cards Carousel Functionality **/
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

  // Checking and initializing each time event occurs
  const reInitialize = () => {
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    console.log(embla.scrollProgress());
    progressNode.style.width = `${progress * 100}%`;

    if (embla.canScrollNext()) nextButtonNode.children[0].classList.remove("text-n-500");
    else nextButtonNode.children[0].classList.add("text-n-500");
    if (embla.canScrollPrev()) prevButtonNode.children[0].classList.remove("text-n-500");
    else prevButtonNode.children[0].classList.add("text-n-500");
  };

  // Remove Event Listeners Function
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

  // Initializing the events of embla to handle progress bar and slides
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

/** Animate the Showcase Section **/
export const animateShowcaseSection = () => {
  // Detect when the Section comes into the Screen
  inView("#showcase-section", (showcaseSection) => {
    // Animate the Section Header Part
    animate(
      showcaseSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0.2 },
    );

    animate(
      showcaseSection?.querySelectorAll("#header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.6 },
    );
  });
};

export const animateProjectCards = () => {
  // Detect when the Project Card comes into the Screen //
  inView("#portfolio-showcase-project-card", (card) => {
    // Extracting the Project Card Elements //
    const image = card?.querySelectorAll(".project-card-image");
    const title = card?.querySelectorAll(".project-card-title");
    const badges = card?.querySelectorAll(".project-card-badges");
    const texts = card?.querySelectorAll(
      ".project-card-subtitle, .project-card-description, .project-card-date",
    );
    const buttons = card?.querySelectorAll(".project-card-buttons");

    if (!card || !image || !title || !badges || !texts || !buttons) {
      console.log("error");
      return;
    }

    // Animate the Project Card Elements //
    animate(
      image,
      { opacity: [0, 1], x: ["50px", 0] },
      {
        duration: 0.5,
        delay: 0.2,
      },
    );

    animate(
      title,
      { opacity: [0, 1], x: ["30px", 0] },
      {
        duration: 0.2,
        delay: 0.6,
      },
    );

    animate(
      badges,
      { opacity: [0, 1], x: ["30px", 0] },
      {
        duration: 0.2,
        delay: 0.8,
      },
    );

    animate(
      Array.from(texts),
      { opacity: [0, 1], x: ["30px", 0] },
      {
        duration: 0.6,
        delay: stagger(0.2, { startDelay: 1 }),
      },
    );

    animate(
      buttons,
      { opacity: [0, 1], x: [20, 0] },
      {
        duration: 0.2,
        delay: 1.8,
      },
    );
  });
};

/** Handling the Toggle Functionality of Project Cards View **/
let view = "list";
export function initShowcase() {
  const gridIconBtn = document.getElementById("gridIconBtn");
  const listIconBtn = document.getElementById("listIconBtn");
  const rootNode = document.getElementById("portfolio-project-card");

  if (!gridIconBtn || !listIconBtn || !rootNode) return;

  view = rootNode.getAttribute("data-view") === "list" ? "list" : "grid";
  gridIconBtn.addEventListener("click", () => {
    rootNode.setAttribute("data-view", "grid");
    location.reload();
  });

  listIconBtn.addEventListener("click", () => {
    rootNode.setAttribute("data-view", "list");
    location.reload();
  });
}

export function getView() {
  return view === "list" ? "list" : "grid";
}
