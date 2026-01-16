/**
 * Generalized hover-follow cursor animation helper
 * Replicates the behavior of animateHeroImageLink for any target element(s)
 */
export const animateHoverFollowCursor = (options: {
  targetSelector: string;
  cursorId: string;
  containerSelector?: string;
}) => {
  const { targetSelector, cursorId, containerSelector } = options;

  const targets = document.querySelectorAll(targetSelector);
  const cursor = document.getElementById(cursorId);

  if (targets.length === 0 || !cursor) {
    console.warn("animateHoverFollowCursor: Target elements or cursor element not found");
    return;
  }

  // Function to attach events to a single target
  const attachEventsToTarget = (target: Element) => {
    const container = containerSelector ? document.querySelector(containerSelector) : target;

    if (!container) {
      console.warn("animateHoverFollowCursor: Container element not found for target");
      return;
    }

    // Show the cursor on mouseenter
    target.addEventListener("mouseenter", () => {
      cursor.classList.remove("hidden");
      cursor.classList.add("flex");
    });

    // Hide the cursor on mouseleave
    target.addEventListener("mouseleave", () => {
      cursor.classList.add("hidden");
      cursor.classList.remove("flex");
    });

    // Update cursor position to follow mouse with boundary detection
    target.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = (container as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Re-show the cursor if it was hidden by scroll
      if (cursor.classList.contains("hidden")) {
        cursor.classList.remove("hidden");
        cursor.classList.add("flex");
      }

      // Get cursor dimensions
      const cursorWidth = cursor.offsetWidth;
      const cursorHeight = cursor.offsetHeight;

      // Calculate position with offset below cursor
      let finalX = x;
      let finalY = y + 30;

      // Boundary detection - prevent overflow
      // Check right boundary
      if (finalX + cursorWidth / 2 > rect.width) {
        finalX = rect.width - cursorWidth / 2;
      }
      // Check left boundary
      if (finalX - cursorWidth / 2 < 0) {
        finalX = cursorWidth / 2;
      }

      // Position the cursor (convert container-relative to viewport-absolute)
      cursor.style.left = rect.left + finalX + "px";
      cursor.style.top = rect.top + finalY + "px";
    });
  };

  // Attach events to each target element
  targets.forEach(attachEventsToTarget);

  // Hide cursor when scrolling to prevent stuck position
  window.addEventListener("scroll", () => {
    if (cursor.classList.contains("flex")) {
      cursor.classList.add("hidden");
      cursor.classList.remove("flex");
    }
  });
};
