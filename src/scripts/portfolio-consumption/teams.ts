// OTHERS //
import EmblaCarousel from "embla-carousel";
import { animate, inView, stagger } from "motion";

/**
 * Initializes the teams slider carousel controls on the page.
 */
export function initTeamsSlider() {
  // Get slider container
  const slider = document.getElementById("teams-slider");

  // Get navigation buttons
  const prevBtn = document.getElementById("slide-prev");
  const nextBtn = document.getElementById("slide-next");

  // Run only if all required elements exist
  if (!slider || !prevBtn || !nextBtn) return;

  // Initialize Embla carousel
  const embla = EmblaCarousel(slider, {
    loop: false,
    align: "start",
    skipSnaps: false,
  });

  // Scroll to next slide on next button click
  nextBtn.addEventListener("click", () => {
    embla.scrollNext();
  });

  // Scroll to previous slide on prev button click
  prevBtn.addEventListener("click", () => {
    embla.scrollPrev();
  });
}

/** Animate the Teams Section */
export const animateTeamsSection = () => {
  // Detect when the Section comes into the Screen
  inView("#portfolio-teams-section", (teamsSection) => {
    // Animate the Section Header Part
    animate(
      teamsSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the Section Title Part
    animate(
      teamsSection?.querySelectorAll(".title-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Section Team Members Part
    animate(
      teamsSection.querySelectorAll(".team-member-card"),
      {
        opacity: [0, 1],
        x: ["-50px", "0px"],
      },
      {
        duration: 0.45,
        delay: stagger(0.12, {
          startDelay: 0.5,
          from: "first",
        }),
        easing: "ease-out",
      },
    );
  });
};
