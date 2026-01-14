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

export const hoverHeroImageLink = () => {
  const mainImage = document.getElementById("main-image");
  const customCursor = document.getElementById("custom-cursor");

  if (mainImage && customCursor) {
    mainImage.addEventListener("mouseenter", () => {
      customCursor.classList.remove("hidden");
      customCursor.classList.add("flex");
    });

    // Hide cursor
    mainImage.addEventListener("mouseleave", () => {
      customCursor.classList.add("hidden");
      customCursor.classList.remove("flex");
    });

    // Update custom cursor position
    mainImage.addEventListener("mousemove", (mousePosition) => {
      customCursor.style.left = mousePosition.clientX + "px";
      customCursor.style.top = mousePosition.clientY + "px";
    });

    // Make the image clickable
    mainImage.addEventListener("click", () => {
      // TODO: Add your website URL here
      // window.open("https://", "_blank");
    });
  }
};
