import { animate, inView, stagger } from "motion";

export const animateSolutionCards = () => {
  inView(
    ".container",
    (container) => {
      // 1. Cards rise from bottom
      animate(
        container.querySelectorAll(".solution-card"),
        {
          opacity: [0, 1],
          transform: ["translateY(60px)", "translateY(0px)"],
        },
        {
          duration: 0.8,
          delay: stagger(0.3),
          easing: [0.17, 0.67, 0.37, 0.99],
        },
      );

      // 2. Text slides from left inside cards
      animate(
        container.querySelectorAll(".solution-text"),
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
    },
    { amount: 0.4 },
  );
};

export const animateHeader = () => {
  inView(
    ".header-text",
    (element) => {
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
    },
    { amount: 0.5 },
  );
};
