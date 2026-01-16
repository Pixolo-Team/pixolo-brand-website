// PLUGINS //
import { animate, inView, stagger } from "motion";

// Animate Blog Body Header to fade in up
export const animateHeaderFadeInUp = () => {
  inView(".header-anim", (element) => {
    animate(
      element,
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        duration: 0.8,
        easing: "ease-in-out",
      },
    );
  });
};

// Animate Image & Video Block to fade in up quickly
export const animateMediaFadeInUp = () => {
  inView(".media-anim", (element) => {
    animate(
      element,
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        duration: 0.6,
        easing: "ease-out",
      },
    );
  });
};
