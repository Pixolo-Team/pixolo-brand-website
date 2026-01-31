// OTHERS //
import { scroll, transform } from "motion";

/** Function to add animation to Portfolio Video  */
export const animatePortfolioVideo = () => {
  // Select video element
  const video = document.getElementById("portfolio-video");

  // Scroll-driven scale
  scroll(
    (progress) => {
      // Ease the scroll progress
      const eased = transform(progress, [0, 1], [0, 1], {
        easing: "ease-in-out",
      });

      // Map eased progress to scale 0.7 → 1.0
      const scale = 0.3 + eased * 0.7;
      video.style.transform = `scale(${scale})`;
    },
    {
      target: video,
      offset: ["start end", "end end"],
    },
  );
};
