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
      const labelWidth = customCursor.offsetWidth;git 

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

    // Make the image clickable
    mainImage.addEventListener("click", () => {
      // TODO: Add your website URL here
      // window.open("https://", "_blank");
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
