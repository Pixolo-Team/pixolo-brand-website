// PLUGINS //
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

/** Animate the Numbers after Solution Section */
export const caseStudyGallerySlider = () => {};
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
