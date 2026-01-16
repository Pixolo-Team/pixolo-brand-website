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
