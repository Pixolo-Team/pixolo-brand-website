/** OTHERS */
import EmblaCarousel from "embla-carousel";
import { animate, inView, stagger } from "motion";

/** Handle the Mini Project Cards Carousel Functionality */
export function initShowcaseSlider() {
  /**  Grab wrapper nodes */
  const rootNode = document.querySelector(".embla");
  const viewportNode = document.getElementById("showcase-slider");
  /** Grab button nodes */
  const prevButtonNode = rootNode?.querySelector("#slide-prev");
  const nextButtonNode = rootNode?.querySelector("#slide-next");
  /** Grab progress node */
  const progressNode = document.getElementById("embla__progress__bar");

  /** Run only if all required elements exist */
  if (!rootNode || !viewportNode || !prevButtonNode || !nextButtonNode || !progressNode) return;

  /** Initialize Embla carousel */
  const embla = EmblaCarousel(viewportNode, {
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  /** Checking and initializing each time event occurs */
  const reInitialize = () => {
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    progressNode.style.width = `${progress * 100}%`;
  };

  /** Remove Event Listeners Function */
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

  /** Scroll to next slide on next button click */
  nextButtonNode.addEventListener("click", () => {
    if (!embla.canScrollNext()) embla.scrollTo(0);
    embla.scrollNext();
    reInitialize();
  });

  /** Scroll to previous slide on prev button click */
  prevButtonNode.addEventListener("click", () => {
    if (!embla.canScrollPrev()) embla.scrollTo(embla.slideNodes().length - 1);
    embla.scrollPrev();
    reInitialize();
  });

  /** Initializing the events of embla to handle progress bar and slides */
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

/** Animate the Showcase Section */
export const animateShowcaseSection = () => {
  /** Detect when the Section comes into the Screen */
  inView("#showcase-section", (showcaseSection) => {
    /** Animate the Section Header Part */
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
  /** Detect when the Project Card comes into the Screen */
  inView("#portfolio-showcase-project-card", (card) => {
    /** Extracting the Project Card Elements */
    const image = card?.querySelectorAll(".project-card-image");
    const title = card?.querySelectorAll(".project-card-title");
    const tags = card?.querySelectorAll(".project-card-tags");
    const content = card?.querySelectorAll(".project-card-content");
    const buttons = card?.querySelectorAll(".project-card-buttons");

    /** Run only if all required elements exist */
    if (!card || !image || !title || !tags || !content || !buttons) {
      console.log("error");
      return;
    }

    /** Animate the Project Card Elements */
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
      tags,
      { opacity: [0, 1], x: ["30px", 0] },
      {
        duration: 0.2,
        delay: 0.8,
      },
    );

    animate(
      content,
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

/** Handling the Toggle Functionality of Project Cards View */
export function initShowcase() {
  const gridIconBtn = document.getElementById("gridIconBtn");
  const listIconBtn = document.getElementById("listIconBtn");
  const projectCards = document.getElementById("portfolio-project-cards");
  const miniProjectCards = document.getElementById("portfolio-mini-project-cards");

  /** Run only if all required elements exist */
  if (!gridIconBtn || !listIconBtn || !projectCards || !miniProjectCards) return;

  /** Handling the event on grid icon */
  gridIconBtn.addEventListener("click", () => {
    projectCards.dataset.view = "grid";
    miniProjectCards.dataset.view = "grid";
    gridIconBtn.children[0].classList.add("text-n-500");
    listIconBtn.children[0].classList.remove("text-n-500");
    // console.log("clicked grid");
  });

  /** Handling the event on list icon */
  listIconBtn.addEventListener("click", () => {
    projectCards.dataset.view = "list";
    miniProjectCards.dataset.view = "list";
    listIconBtn.children[0].classList.add("text-n-500");
    gridIconBtn.children[0].classList.remove("text-n-500");
    // console.log("clicked list");
  });
}
