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

/** Animate floating marble inside its container with a constant speed (Motion One version) */
export const animateMarble = (elementId: string, containerId: string) => {
  const marble = document.getElementById(elementId) as HTMLElement | null;
  const container = document.getElementById(containerId) as HTMLElement | null;

  if (!marble || !container) return;

  const SPEED_PX_PER_SECOND = 15;
  let posX = 0;
  let posY = 0;
  let direction = Math.random() * Math.PI * 2;

  // Walls
  let bounds = { minX: 0, maxX: 0, minY: 0, maxY: 0 };

  // Calcuate Bounds
  const calcBounds = () => {
    const containerRect = container.getBoundingClientRect();
    const marbleRect = marble.getBoundingClientRect();

    // Marble's initial top-left inside the container
    const originLeft = marble.offsetLeft;
    const originTop = marble.offsetTop;

    bounds = {
      minX: -originLeft,
      maxX: containerRect.width - originLeft - marbleRect.width,
      minY: -originTop,
      maxY: containerRect.height - originTop - marbleRect.height,
    };
  };

  // Calculate Bounds
  calcBounds();

  // Calculate Bounds on resizing window
  window.addEventListener("resize", calcBounds);

  let lastTime = performance.now();

  const step = (now: number) => {
    const deltaSeconds = (now - lastTime) / 1000;
    lastTime = now;

    const vx = Math.cos(direction) * SPEED_PX_PER_SECOND;
    const vy = Math.sin(direction) * SPEED_PX_PER_SECOND;

    // Update Position Horizontal
    posX += vx * deltaSeconds;

    // Update Position Vertically
    posY += vy * deltaSeconds;

    // Wall bounce (perfect physics) - Horizontal walls
    if (posX <= bounds.minX) {
      posX = bounds.minX;
      direction = Math.PI - direction;
    } else if (posX >= bounds.maxX) {
      posX = bounds.maxX;
      direction = Math.PI - direction;
    }

    // Wall bounce (perfect physics) - Vertical walls
    if (posY <= bounds.minY) {
      posY = bounds.minY;
      direction = -direction;
    } else if (posY >= bounds.maxY) {
      posY = bounds.maxY;
      direction = -direction;
    }

    // --- ⚡ Motion One animation update ---
    animate(marble, { x: posX, y: posY }, { duration: 0, easing: "linear" });

    requestAnimationFrame(step);
  };

  requestAnimationFrame((now) => {
    lastTime = now;
    step(now);
  });
};
