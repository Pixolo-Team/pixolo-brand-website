/** Initialize animated loader (no progress) */
export const initLoader = () => {
  const loader = document.getElementById("loading-screen") as HTMLElement;
  if (!loader) return;

  // Loader elements
  const row = loader.querySelector<HTMLElement>("#loading-row");
  const icons = loader.querySelectorAll<HTMLElement>(".loader-icon");

  // Loader lifecycle
  const MIN_VISIBLE_TIME = 3000;

  // Loader state
  let pageLoaded = false;
  let minTimePassed = false;

  // Icon cycle
  if (row && icons.length) {
    let current = 0;

    // show first icon
    icons[current].classList.remove("opacity-0", "scale-90");
    icons[current].classList.add("opacity-100", "scale-100");

    /** Icon cycle */
    setInterval(() => {
      row.classList.replace("gap-1", "gap-0");

      icons[current].classList.replace("opacity-100", "opacity-0");
      icons[current].classList.replace("scale-100", "scale-90");

      setTimeout(() => {
        current = (current + 1) % icons.length;

        icons[current].classList.replace("opacity-0", "opacity-100");
        icons[current].classList.replace("scale-90", "scale-100");

        row.classList.replace("gap-0", "gap-1");
      }, 120);
    }, 700);
  }

  /** Loader lifecycle */
  requestAnimationFrame(() => {
    requestAnimationFrame(startLifecycle);
  });

  /** Start lifecycle */
  function startLifecycle() {
    window.addEventListener("load", () => {
      pageLoaded = true;
      hideLoader();
    });

    /** Hide loader after min time passed */
    setTimeout(() => {
      minTimePassed = true;
      hideLoader();
    }, MIN_VISIBLE_TIME);
  }

  /** Hide loader */
  function hideLoader() {
    if (!pageLoaded || !minTimePassed) return;

    /** Hide loader text */
    loader.classList.add("hide-text");

    /** Fade out whole loader */
    setTimeout(() => {
      loader.classList.add("opacity-0");

      /** Remove from DOM */
      setTimeout(() => {
        loader.remove();
      }, 700); // matches Tailwind duration-700
    }, 300); // matches loader-text exit
  }
};
