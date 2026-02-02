/** Prevent Scroll on key press when modal is open */
const preventScroll = (e: Event) => e.preventDefault();

/** Prevent Scroll on key press when modal is open */
const preventScrollKeys = (e: KeyboardEvent) => {
  const target = e.target as HTMLElement;

  // Allow typing in inputs & textareas
  if (["INPUT", "TEXTAREA"].includes(target.tagName) || target.isContentEditable) return;

  const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
  if (keys.includes(e.key)) e.preventDefault();
};

/** Function to disable scroll */
export const disableScroll = () => {
  window.addEventListener("wheel", preventScroll, { passive: false });
  window.addEventListener("touchmove", preventScroll, { passive: false });
  window.addEventListener("keydown", preventScrollKeys);
};

/** Function to enable scroll */
export const enableScroll = () => {
  window.removeEventListener("wheel", preventScroll);
  window.removeEventListener("touchmove", preventScroll);
  window.removeEventListener("keydown", preventScrollKeys);
};

/* RESULT MODAL HELPERS */
/** Function to show result modal */
export const showResultModal = (modalId: string, state: "success" | "error") => {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  /** Show modal */
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  /** Hide all states */
  modal.querySelectorAll("[data-state]").forEach((el) => {
    el.classList.add("hidden");
    el.classList.remove("flex");
  });

  /** Show active state */
  const active = modal.querySelector(`[data-state="${state}"]`);
  active?.classList.remove("hidden");
  active?.classList.add("flex");

  /** Disable scroll */
  disableScroll();
};

/** Function to hide result modal */
export const hideResultModal = (modalId: string) => {
  const modal = document.getElementById(modalId);

  /** Hide modal */
  modal?.classList.add("hidden");
  modal?.classList.remove("flex");

  /** Enable scroll */
  enableScroll();
};
