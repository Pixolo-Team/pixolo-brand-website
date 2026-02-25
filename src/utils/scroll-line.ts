/** Function to initialize the scroll line animation */
export const initScrollLine = () => {
  // Get scroll line element
  const scrollLine = document.querySelector(".scroll-line") as HTMLElement | null;
  if (!scrollLine) return;

  // Initially Filled percentage
  const initialFill = 0;
  let frameRequested = false; // for requestAnimationFrame optimization

  /** Update Fill Percentage */
  const updateFill = () => {
    // Get the position and height of the scroll line element relative to the viewport
    const { top, height } = scrollLine.getBoundingClientRect();

    // Vertical center of the viewport
    const viewportCenter = window.innerHeight / 2;

    // Calculate how far the viewport center has passed the top of the scroll line
    const progress = (viewportCenter - top) / height;

    // Clamp the progress between 0 and 1 to avoid overflows
    const clamped = Math.max(0, Math.min(progress, 1));

    // Convert to a percentage and ensure it's at least the initial fill
    const fill = Math.max(clamped * 100, initialFill);

    // Update the CSS variable --fill-height
    scrollLine.style.setProperty("--fill-height", `${fill}%`);
    frameRequested = false;
  };

  /** Handle Scroll and Resize Events */
  const onScrollOrResize = () => {
    // Check if an update frame has already been requested
    if (!frameRequested) {
      // Mark that a frame has been queued
      frameRequested = true;

      // Schedule the `updateFill` function to run on the next animation frame
      requestAnimationFrame(updateFill);
    }
  };

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);

  updateFill();
};
