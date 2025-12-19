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

/**Animate the Client Testimonial Image  */
inView("#client-testimonial", () => {
  // Client Image Slide from Left
  animate("#client-testimonial-image", { x: 0, opacity: 1 }, { duration: 0.4 }).finished.then(
    () => {
      // Animate Client Name & Title
      animate("#client-info", { x: 0, opacity: 1 }, { duration: 0.4 }).finished.then(() => {
        // Animate Client Message
        animate("#client-message", { x: 0, opacity: 1 }, { duration: 0.4 });
      });
    },
  );
});
