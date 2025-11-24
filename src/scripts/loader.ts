export function initLoader() {
  const loader = document.getElementById("loading-screen");
  const label = document.getElementById("progress-label");

  if (!loader || !label) return;

  let progress = 0;
  let fakeInterval: number;
  let pageLoaded = false;

  /** Update the progress */
  function updateUI() {
    label.textContent = Math.floor(progress) + "%";
  }

  /** Start fake progress but stop before 100% */
  function startFakeProgress() {
    fakeInterval = window.setInterval(() => {
      let randomNumber = Math.random() * 3;

      progress = Math.min(progress + randomNumber, 90);
      updateUI();
    }, 120);
  }

  /** When animations complete, then finish to 100% */
  function finishProgress() {
    clearInterval(fakeInterval);

    const complete = setInterval(() => {
      if (!pageLoaded) return;

      if (progress < 100) {
        progress += 2;
        if (progress > 100) progress = 100;
        updateUI();
      }

      if (progress >= 100) {
        clearInterval(complete);

        // Wait some time before fadeout
        window.setTimeout(() => {
          loader.classList.add("fade-out");

          // Remove after fade-out animation
          setTimeout(() => loader.remove(), 700);
        }, 800);
      }
    }, 30);
  }

  // Start the Fake progress to < 100%
  startFakeProgress();

  /** Check if window has loaded or not */
  window.addEventListener("load", () => {
    pageLoaded = true;
  });

  // Wait 6s, then finish progress
  setTimeout(() => {
    finishProgress();
  }, 6000);
}
