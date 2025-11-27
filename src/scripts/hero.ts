// OTHERS //
import { animate } from "motion";

/** Function to add animations in Hero section */
export const animateHeroTitle = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Select all words
    const wordContainers = document.querySelectorAll("[data-animate-word]");
    let delay = 0;
    const wordDelay = 120; // 120ms delay between each word

    wordContainers.forEach((wordContainer) => {
      // Apply the CSS transition-delay to each word
      wordContainer.style.transitionDelay = `${delay}ms`;

      // Increment delay for the next word
      delay += wordDelay;
    });

    // Start the animation after a brief moment to ensure all delays are set
    setTimeout(() => {
      wordContainers.forEach((container) => {
        container.classList.add("is-visible");
      });
    }, 50);
  });
};

/** Animate floating marble using Motion One */
export const animateMarble = (elementId: string) => {
  // Get the marble element
  const marble = document.getElementById(elementId) as HTMLElement | null;

  if (!marble) return;

  // Store the current X and Y position
  let currentPositionX = 0;
  let currentPositonY = 0;

  // Function to move the marble to a new random position
  const float = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Pick a random position within the screen
    const nextPositionX = Math.random() * (screenWidth - 100) - (screenWidth / 2 - 50);
    const nextPositionY = Math.random() * (screenHeight - 100) - (screenHeight / 2 - 50);

    // Animate from current position → next position
    animate(
      marble,
      {
        x: [currentPositionX, nextPositionX],
        y: [currentPositonY, nextPositionY],
      },
      {
        duration: 4,
        easing: "ease-in-out",
      },
    ).finished.then(() => {
      // Save the new position as the current one
      currentPositionX = nextPositionX;
      currentPositonY = nextPositionY;

      // Repeat the animation
      float();
    });
  };

  // Start the floating animation
  float();
};
