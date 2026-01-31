/** Attach play/pause toggle to a YouTube iframe + play button */
export const initVideoPlayPause = (iframeSelector: string, buttonSelector: string) => {
  // Selectors
  const iframe = document.querySelector(iframeSelector) as HTMLIFrameElement;
  const playButton = document.querySelector(buttonSelector) as HTMLElement;

  // Check if selectors exist
  if (!iframe || !playButton) return;

  let isPlaying = false;

  /** Post message to iframe */
  function post(command: string) {
    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "*",
    );
  }

  /** Attach click event to play button */
  playButton.addEventListener("click", () => {
    if (!isPlaying) {
      post("playVideo");
      isPlaying = true;
    } else {
      post("pauseVideo");
      isPlaying = false;
    }
  });
};
