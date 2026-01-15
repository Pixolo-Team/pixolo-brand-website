/** Function to initialize the dropdown */
export const initDropdown = (rootId = "dropdown") => {
  document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById(rootId);
    if (!dropdown) return;

    // Target the parent container to change the border color
    const container = dropdown.closest(".dropdown-container") as HTMLElement | null;
    const list = dropdown.querySelector("#dropdown-options") as HTMLElement | null;
    const arrow = dropdown.querySelector("#dropdown-arrow") as HTMLElement | null;
    const selectedText = dropdown.querySelector("#dropdown-selected") as HTMLElement | null;
    const labelText = dropdown.querySelector("label") as HTMLElement | null;
    const hiddenInput = document.getElementById("selectedSubject") as HTMLInputElement | null;

    if (!list || !arrow || !selectedText) return;

    /** Toggle dropdown */
    dropdown.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (list.contains(target)) return;

      e.stopPropagation();
      const isHidden = list.classList.contains("hidden");
      isHidden ? openDropdown() : closeDropdown();
    });

    /** Option selection */
    list.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        selectOption(item as HTMLElement);
      });
    });

    /** Outside click */
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target as Node)) {
        closeDropdown();
      }
    });

    /** Opens the dropdown and updates border color */
    function openDropdown() {
      list.classList.remove("hidden");
      arrow.classList.add("rotate-180");
      
      if (container) {
        container.classList.remove("border-n-300");
        container.classList.add("border-n-900");
      }
    }

    /** Closes the dropdown and resets border color */
    function closeDropdown() {
      list.classList.add("hidden");
      arrow.classList.remove("rotate-180");
      
      if (container) {
        container.classList.remove("border-n-900");
        container.classList.add("border-n-300");
      }
    }

    /** Handles selection */
    function selectOption(item: HTMLElement) {
      const value = item.dataset.value ?? "";
      selectedText.textContent = value;
      selectedText.classList.remove("hidden");
      
      if (hiddenInput) {
        hiddenInput.value = value;
      }

      closeDropdown();
    }
  });
};