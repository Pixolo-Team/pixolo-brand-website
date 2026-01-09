/**
 * Open Positions Scroll Animation Observer
 *
 * Purpose:
 * - Triggers CSS animations only when elements enter the viewport.
 * - Prevents animations from playing before scrolling.
 * - Supports stagger animations via CSS `--delay` variable.
 *
 * Elements Handled:
 * - .open-positions-heading
 * - .open-positions-card
 */

document.addEventListener("DOMContentLoaded", () => {
  // Select all animatable elements
  const elements = document.querySelectorAll(
    ".open-positions-heading, .open-positions-card"
  );

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Only activate when element is actually visible
        if (!entry.isIntersecting) return;

        // Enable CSS animation (delay handled in CSS)
        entry.target.style.animationPlayState = "running";

        // Stop observing once animation triggered
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1, // Trigger when 10% visible
    }
  );

  // Attach observer to each element
  elements.forEach((el) => observer.observe(el));
});
