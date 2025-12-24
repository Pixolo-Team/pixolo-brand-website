import { animate, inView, stagger } from "motion";

export const animateOutcomeSection = () => {
  const section = document.querySelector("#outcome-section");
  if (!section) return;

  let hasAnimated = false;

  inView(
    section,
    () => {
      if (hasAnimated) return;
      hasAnimated = true;

      const headers = section.querySelectorAll(".outcome-header");
      const image = section.querySelector(".outcome-image");
      const cards = section.querySelectorAll(".why-us-card");

      if (!headers.length) return;

      animate(
        headers,
        { opacity: [0, 1], x: [-40, 0] },
        {
          duration: 0.8,
          easing: "ease-out",
        },
      ).finished.then(() => {
        animate(
          image,
          { opacity: [0, 1], x: [-60, 0] },
          {
            duration: 0.6,
            easing: "ease-out",
          },
        ).finished.then(() => {
          if (!cards.length) return;

          animate(
            cards,
            { opacity: [0, 1], x: [-30, 0] },
            {
              duration: 0.6,
              delay: stagger(0.3),
              easing: "ease-out",
            },
          );
        });
      });
    },
    { amount: 0.2 },
  );
};
