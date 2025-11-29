/** Function to add and remove Tab active state */
export const addActiveTab = () => {
  // This script runs in the browser
  document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.getElementById("tabs-container");
    if (!tabsContainer) return;

    tabsContainer.addEventListener("click", (event) => {
      const target = event.target.closest("button");
      if (!target) return;

      // Remove active state from all buttons
      tabsContainer.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("text-n-100", "bg-n-950");
        btn.classList.add("text-n-950");
      });

      // Add active state to the clicked button
      target.classList.remove("text-n-950");
      target.classList.add("text-n-100", "bg-n-950");
    });
  });
};
