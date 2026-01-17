// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Numbers after Solution Section */
export const animateNumbersAfterSolution = () => {
  // Animate the Title (When in View)
  inView(
    "#solution-numbers-header",
    (element) => {
      animate(
        element,
        {
          opacity: [0, 1],
          y: [-20, 0],
        },
        {
          duration: 0.4,
          delay: 0.2,
        },
      );
    },
    {
      margin: "0px 0px 0px 0px",
      amount: "all",
    },
  );

  // Animate the Number Items (When in View)
  inView(
    "#sol-num-wrap",
    () => {
      animate(
        ".sol-num",
        {
          opacity: [0, 1],
          y: [20, 0],
        },
        {
          duration: 0.4,
          delay: stagger(0.2),
        },
      );
    },
    {
      margin: "500px 0px 0px 0px",
      amount: "some",
    },
  );
};

/** Animate the Gallery Section */
export const animateGallerySection = () => {
  // Animate when in view
  inView("#gallery-section", (gallerySection) => {
    animate(
      gallerySection?.querySelectorAll(".gallery-item"),
      {
        opacity: [0, 1],
        x: ["-60px", 0],
      },
      {
        duration: 0.8,
        delay: 0.6,
      },
    );
  });
};

/* Animate Case Study Consumption Hero Section */
export const animateCaseStudyConsumptionHero = () => {
  inView("#case-study-consumption-hero", (caseStudyConsumptionHero) => {
    animate(
      caseStudyConsumptionHero?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      caseStudyConsumptionHero?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Hero Thumbnail (When in View)
    animate(
      caseStudyConsumptionHero.querySelectorAll(".hero-thumbnail"),
      { opacity: [0, 1], y: ["50px", 0] },
      { duration: 0.8, delay: 0.6 },
    );
  });
};

/** Animate Key Takeaway Section */
export const animateKeyTakeawaySection = () => {
  inView("#key-takeaways-section", (keyTakeawaysSection) => {
    animate(
      keyTakeawaysSection?.querySelectorAll(".learning-item-card"),
      {
        opacity: [0, 1],
        x: ["60px", 0],
      },
      {
        duration: 0.8,
        delay: stagger(0.4),
      },
    );
  });
};

/** Animate hover for Hero Image Link - Shows Visit Website text below cursor */
export const animateHeroImageLink = () => {
  const mainImage = document.getElementById("main-image");
  const mainImageContainer = document.getElementById("main-image-container");
  const customCursor = document.getElementById("custom-cursor");

  if (mainImage && mainImageContainer && customCursor) {
    // Show the Visit Website div
    mainImage.addEventListener("mouseenter", () => {
      customCursor.classList.remove("hidden");
      customCursor.classList.add("flex");
    });

    // Hide the Visit Website div
    mainImage.addEventListener("mouseleave", () => {
      customCursor.classList.add("hidden");
      customCursor.classList.remove("flex");
    });

    // Update Visit Website position to follow cursor (with boundary detection)
    mainImage.addEventListener("mousemove", (e) => {
      const rect = mainImageContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Re-show the div if it was hidden by scroll
      if (customCursor.classList.contains("hidden")) {
        customCursor.classList.remove("hidden");
        customCursor.classList.add("flex");
      }

      // Get label dimensions
      const labelWidth = customCursor.offsetWidth;

      // Calculate position with 20px offset below cursor
      let finalX = x;
      let finalY = y + 30;

      // Boundary detection - prevent overflow
      // Check right boundary
      if (finalX + labelWidth / 2 > rect.width) {
        finalX = rect.width - labelWidth / 2;
      }
      // Check left boundary
      if (finalX - labelWidth / 2 < 0) {
        finalX = labelWidth / 2;
      }

      // Position the label at the cursor, offset handled by translate classes
      customCursor.style.left = finalX + "px";
      customCursor.style.top = finalY + "px";
    });

    // Hide Visit Website div when scrolling to prevent stuck position
    window.addEventListener("scroll", () => {
      if (customCursor.classList.contains("flex")) {
        customCursor.classList.add("hidden");
        customCursor.classList.remove("flex");
      }
    });
  }
};

/** Animate the Client Testimonial */
export const animateClientTestimonial = () => {
  inView("#client-testimonial", (clientTestimonials) => {
    // Client Image Slide from Left
    animate(
      clientTestimonials?.querySelectorAll(".client-image"),
      { x: 0, opacity: 1 },
      { duration: 0.6 },
    );

    // Client Info Slide from Left
    animate(
      clientTestimonials?.querySelectorAll(".client-info"),
      { x: 0, opacity: 1 },
      { duration: 0.8, delay: 0.6 },
    );

    // Client Message Slide from Right
    animate(
      clientTestimonials?.querySelectorAll(".client-message"),
      { x: 0, opacity: 1 },
      { duration: 0.8, delay: 0.8 },
    );
  });
};

/** Animate Tools Used in Case Study */
export const animateToolsUsedSection = () => {
  inView("#tools-used-section", (toolsUsedSection) => {
    animate(
      toolsUsedSection?.querySelectorAll(".header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    animate(
      toolsUsedSection?.querySelectorAll(".tool-item"),
      {
        y: ["60px", 0],
        opacity: [0.2, 1],
      },
      { duration: 0.8, delay: stagger(0.12, { from: "first", startDelay: 0.6 }) },
    );
  });
};

/** Button Logic in Case Study Gallery Section */
export const CaseStudyGallerySlider = () => {
  const viewport = document.querySelector("#embla-cs-gallery-slider");

  if (!viewport) {
    console.warn("Gallery slider viewport not found");
    return;
  }

  const caseStudyGallerySlider = EmblaCarousel(viewport, { loop: true });

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (prevBtn) {
    prevBtn.onclick = () => caseStudyGallerySlider.scrollPrev();
  }

  if (nextBtn) {
    nextBtn.onclick = () => caseStudyGallerySlider.scrollNext();
  }
};

// Call the function when DOM is ready
document.addEventListener("DOMContentLoaded", CaseStudyGallerySlider);


/** Function to initialize the scroll line animation and step activation */
export const animateProcessStepScroll = () => {
  // Get scroll line element
  const scrollLineContainer = document.getElementById("process-steps-container");
  if (!scrollLineContainer) return;

  // Get all step elements
  const processSteps = document.querySelectorAll(".process-step");
  if (processSteps.length === 0) return;

  // Multipliers for different breakpoints to control fill speed/offset
  const FILL_OFFSET_SCREEN_FACTOR = 0.5; // Line fills when it hits center of screen

  // State variables for geometry
  let containerTop = 0;
  let lineStartAbsY = 0;
  let lineHeight = 0;
  let animationEnabled = false;

  const calculateGeometry = () => {
    // First Circle Center
    const firstStep = processSteps[0] as HTMLElement;
    const firstStepCenterY = firstStep.offsetTop + firstStep.offsetHeight / 2;

    // Last Circle Center
    const lastStep = processSteps[processSteps.length - 1] as HTMLElement;
    const lastStepCenterY = lastStep.offsetTop + lastStep.offsetHeight / 2;

    // Calculate Top and Height relative to container
    const lineTop = firstStepCenterY;
    const calculatedHeight = lastStepCenterY - firstStepCenterY;

    // Update state
    lineHeight = calculatedHeight;
    // lineStartAbsY used for scroll progress needs to be Viewport Absolute.
    // We can derive it during scroll as: containerViewportTop + lineTop.

    // Set CSS variables
    scrollLineContainer.style.setProperty("--line-top", `${lineTop}px`);
    scrollLineContainer.style.setProperty("--line-height", `${calculatedHeight}px`);

    animationEnabled = true;
  };

  let frameRequested = false;

  const updateProgress = () => {
    if (!animationEnabled) return;

    // UPDATE LINE FILL
    const { top: currentContainerTop } = scrollLineContainer.getBoundingClientRect();

    const currentLineTop = parseFloat(
      scrollLineContainer.style.getPropertyValue("--line-top") || "0",
    );

    // Absolute Y position of the Line Start in Viewport
    const lineStartY_Viewport = currentContainerTop + currentLineTop;

    const viewportCenter = window.innerHeight * FILL_OFFSET_SCREEN_FACTOR;

    // Progress = (ViewportCenter - LineStart) / Height
    const progress = (viewportCenter - lineStartY_Viewport) / lineHeight;

    // Clamp between 0 and 1
    const clamped = Math.max(0, Math.min(progress, 1));
    const fillPixels = lineHeight * clamped;

    // Update CSS variable for the fill height in px (relative to line starts at same top)
    scrollLineContainer.style.setProperty("--fill-height", `${fillPixels}px`);

    // UPDATE STEP ACTIVATION
    // Current Tip Y in Viewport
    const currentFillEndY = lineStartY_Viewport + lineHeight * clamped;

    processSteps.forEach((step) => {
      const stepCircle = step.querySelector(".step-circle");
      if (!stepCircle) return;

      const rect = stepCircle.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const isActive = currentFillEndY >= center - 1;

      const stepNumbers = step.querySelectorAll(".step-number");
      const titles = step.querySelectorAll(".step-title");
      const descriptions = step.querySelectorAll(".step-description");

      if (isActive) {
        stepCircle.classList.remove("bg-n-500");
        stepCircle.classList.add("bg-n-950");
        stepNumbers.forEach((n) => {
          n.classList.remove("text-n-500");
          n.classList.add("text-n-950");
        });
        titles.forEach((t) => {
          t.classList.remove("text-n-500");
          t.classList.add("text-n-950");
        });
        descriptions.forEach((d) => {
          d.classList.remove("text-n-500");
          d.classList.add("text-n-700");
        });
      } else {
        stepCircle.classList.remove("bg-n-950");
        stepCircle.classList.add("bg-n-500");
        stepNumbers.forEach((n) => {
          n.classList.remove("text-n-950");
          n.classList.add("text-n-500");
        });
        titles.forEach((t) => {
          t.classList.remove("text-n-950");
          t.classList.add("text-n-500");
        });
        descriptions.forEach((d) => {
          d.classList.remove("text-n-700");
          d.classList.add("text-n-500");
        });
      }
    });

    frameRequested = false;
  };

  const onScroll = () => {
    if (!frameRequested) {
      frameRequested = true;
      requestAnimationFrame(updateProgress);
    }
  };

  const onResize = () => {
    calculateGeometry();
    updateProgress();
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  // Use ResizeObserver to handle all layout changes (window resize, font load, dynamic content)
  const resizeObserver = new ResizeObserver(() => {
    onResize();
  });
  resizeObserver.observe(scrollLineContainer);

  // Initial call
  calculateGeometry();
  updateProgress();
};
