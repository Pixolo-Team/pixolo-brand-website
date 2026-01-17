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

/** Function to add play/pause functionality to Portfolio Video  */
export const videoPlayPause = () => {
  let isPlaying = false;

  // Select video elements
  const iframe = document.getElementById("youtube-iframe") as HTMLIFrameElement;
  const playOverlay = document.getElementById("play-overlay");

  // Check if elements exist
  if (!iframe || !playOverlay) return;

  /** Function to send commands to the iframe  */
  function post(command: string) {
    // Send command to iframe
    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "*",
    );
  }

  /** Function to handle play/pause toggle  */
  playOverlay.addEventListener("click", () => {
    // Toggle play/pause
    if (!isPlaying) {
      post("playVideo");
      isPlaying = true;
    } else {
      post("pauseVideo");
      isPlaying = false;
    }
  });
};
