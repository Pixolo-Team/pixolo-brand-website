export const initScrollLine = () => {
  const timeline = document.querySelector(".scroll-line") as HTMLElement | null;
  if (!timeline) return;

  const MIN_FILL = 0; // % minimum fill at start

  const update = () => {
    const rect = timeline.getBoundingClientRect();
    const winH = window.innerHeight;

    const viewportCenter = winH / 2;
    const timelineTop = rect.top;
    const timelineHeight = rect.height;

    let progress = (viewportCenter - timelineTop) / timelineHeight;
    let clamped = Math.max(0, Math.min(progress, 1));

    const finalFill = Math.max(clamped * 100, MIN_FILL);

    timeline.style.setProperty("--fill-height", `${finalFill}%`);
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);

  update(); // initial fill
};
