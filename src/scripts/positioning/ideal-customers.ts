// OTHERS //
import { animate, inView, stagger } from "motion";

/** Animate the Ideal Customers Section */
export const animateIdealCustomers = () => {
  // Detect when the Section comes into the Screen
  inView("#ideal-customers-section", (idealCustomersSection) => {
    // Animate the Section Header Part
    animate(
      idealCustomersSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    animate(
      idealCustomersSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Ideal Cards
    animate(
      idealCustomersSection?.querySelectorAll(".ideal-card"),
      { y: ["50px", 0], opacity: [0, 1] },
      { duration: 0.4, delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
