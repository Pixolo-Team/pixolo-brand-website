export interface LoadMoreConfig {
  containerId: string;
  loadMoreBtnId: string;
  cardClass: string;
  initialVisible: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  incrementConfig: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
}

/** Get device state */
export const getDeviceState = () => {
  const width = window.innerWidth;
  if (width >= 1024) return "desktop";
  if (width >= 768) return "tablet";
  return "mobile";
};

/** Initialize load more */
export function initLoadMore(config: LoadMoreConfig) {
  const container = document.getElementById(config.containerId);
  const loadMoreBtn = document.getElementById(config.loadMoreBtnId);

  if (!container || !loadMoreBtn) return;

  const cards = container.querySelectorAll(`.${config.cardClass}`);
  const totalCards = cards.length;

  let visibleCount = 0;

  const setInitialVisibleCount = () => {
    const state = getDeviceState();
    visibleCount = config.initialVisible[state];
  };

  /** Update visibility */
  const updateVisibility = () => {
    cards.forEach((card, index) => {
      if (index < visibleCount) card.classList.remove("hidden");
      else card.classList.add("hidden");
    });

    if (visibleCount >= totalCards) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "block";
    }
  };

  // Set correctly on load
  setInitialVisibleCount();
  updateVisibility();

  // Update on "Load More" click
  loadMoreBtn.addEventListener("click", () => {
    const state = getDeviceState();
    visibleCount += config.incrementConfig[state];
    updateVisibility();
  });

  // Handle resize
  window.addEventListener("resize", () => {
    setInitialVisibleCount();
    updateVisibility();
  });
}
