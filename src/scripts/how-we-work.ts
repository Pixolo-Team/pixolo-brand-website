// OTHERS //
import { animate, inView, stagger } from "motion";

// Function to add animations for solution cards and their text in How We Work section
export const animateSolutionCards = () => {
  inView(
    "#how-we-work-section",
    () => {
      const cards = document.querySelectorAll(".solution-card");
      const texts = document.querySelectorAll(".solution-text");

      if (cards.length > 0) {
        animate(
          cards,
          {
            opacity: [0, 1],
            transform: ["translateY(30px)", "translateY(0px)"],
          },
          {
            duration: 0.8,
            delay: stagger(0.3),
            easing: [0.17, 0.67, 0.37, 0.99],
          },
        );
      }

      if (texts.length > 0) {
        animate(
          texts,
          {
            opacity: [0, 1],
            transform: ["translateX(-30px)", "translateX(0px)"],
          },
          {
            duration: 0.5,
            delay: stagger(0.1, { start: 0.8 }),
            easing: "ease-out",
          },
        );
      }
    },
    { amount: 0.1 },
  );
};

//Function to add animation for section header text
export const animateHeader = () => {
  inView(
    ".header-text",
    (element) => {
      if (element) {
        animate(
          element,
          {
            opacity: [0, 1],
            transform: ["translateX(-40px)", "translateX(0px)"],
          },
          {
            duration: 0.8,
            easing: "ease-out",
          },
        );
      }
    },
    { amount: 0.5 },
  );
};
