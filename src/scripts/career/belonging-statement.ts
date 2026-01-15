import { animate, inView, stagger } from "motion";

// Animate Belonging Statement Section
export const animateBelongingSection = () => {
  inView("#belonging-section", (infoSection) => {
    
    // Tool Badge
    animate(
      infoSection.querySelectorAll(".tool-badge-anim"),
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.6 }
    );

    // Heading Text
    animate(
      infoSection.querySelectorAll(".heading-anim"),
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.6, delay: 0.2 }
    );

    // Cards move in from right
    animate(
      infoSection.querySelectorAll(".belonging-card"),
      { 
        opacity: [0, 1], 
        x: [100, 0] 
      }, 
      {
        duration: 0.8,
        delay: stagger(0.2, { startDelay: 0.4 }),
      }
    );
  });
};