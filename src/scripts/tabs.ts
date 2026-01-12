/**
 * Initialize all tab components on the page.
 * Searches for `.tabs-wrapper` containers and wires up tab switching logic.
 */
export const initTabs = () => {
  // Ensure script runs only after DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    // Find all tab wrapper instances on the page
    const wrappers = document.querySelectorAll(".tabs-wrapper");

    wrappers.forEach((wrapperItem) => {
      // The button container — must have an ID for scoping
      const container = wrapperItem.querySelector("div[id]");

      // All content panels inside this wrapper
      const panelList = wrapperItem.querySelectorAll("[data-tab-content-id]");

      if (!container) return; // No tabs → skip this wrapper

      /**
       * Find the tab that has the initial "active" styling.
       * This determines which panel is visible on load.
       */
      const initialActive = container
        .querySelector("[data-tab-id].bg-n-950")
        ?.getAttribute("data-tab-id");

      /**
       * Initialize visibility:
       * Hide all panels except the one matching `initialActive`.
       */
      panelList.forEach((panelItem) => {
        panelItem.classList.toggle(
          "hidden",
          panelItem.getAttribute("data-tab-content-id") !== initialActive,
        );
      });

      /**
       * Handle clicks inside the tab button container.
       * Uses event delegation to avoid binding many listeners.
       */
      container.addEventListener("click", (event) => {
        // Check if a button or its child was clicked
        const btn = event.target.closest("button");
        if (!btn || !container.contains(btn)) return;

        // Extract the id of the clicked tab button
        const id = btn.getAttribute("data-tab-id");

        /** ---------------------------
         * Update tab button styles
         * --------------------------- */
        container.querySelectorAll("button").forEach((buttonItem) => {
          const buttonItemId = buttonItem.getAttribute("data-tab-id");

          // Active tab → dark background + white text
          buttonItem.classList.toggle("bg-n-950", buttonItemId === id);
          buttonItem.classList.toggle("text-n-100", buttonItemId === id);

          // Inactive tab → light text color
          buttonItem.classList.toggle("text-n-950", buttonItemId !== id);
        });

        /** ---------------------------
         * Update content panels
         * --------------------------- */
        panelList.forEach((panel) => {
          const panelId = panel.getAttribute("data-tab-content-id");

          // Show only the matching content panel
          panel.classList.toggle("hidden", panelId !== id);
        });
      });
    });
  });
};
