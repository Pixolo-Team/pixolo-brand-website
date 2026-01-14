/** Function to initialize the dropdown */
export const initDropdown = (rootId = "dropdown") => {
  document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById(rootId);
    if (!dropdown) return;

    const trigger = dropdown.querySelector("#dropdown-trigger") as HTMLElement | null;
    const list = dropdown.querySelector("#dropdown-options") as HTMLElement | null;
    const arrow = dropdown.querySelector("#dropdown-arrow") as HTMLElement | null;
    const selectedText = dropdown.querySelector("#dropdown-selected") as HTMLElement | null;
    const hiddenInput = document.getElementById("selectedSubject") as HTMLInputElement | null;

    if (!trigger || !list || !arrow || !selectedText) return;

    /** Set initial value */
    if (hiddenInput) {
      hiddenInput.value = selectedText.textContent?.trim() ?? "";
    }

    /** Toggle dropdown */
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      list.classList.contains("hidden") ? openDropdown() : closeDropdown();
    });

    // Option select
    list.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        selectOption(item as HTMLElement);
      });
    });

    // Outside click
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target as Node)) {
        closeDropdown();
      }
    });

    /** Opens the dropdown list by removing hidden class and rotates the arrow icon */
    function openDropdown() {
      list.classList.remove("hidden");
      arrow.classList.add("rotate-180");
    }

    /** Closes the dropdown list by adding hidden class and resets the arrow rotation */
    function closeDropdown() {
      list.classList.add("hidden");
      arrow.classList.remove("rotate-180");
    }

    /** Handles selection of a dropdown option */
    function selectOption(item: HTMLElement) {
      const value = item.dataset.value ?? "";
      selectedText.textContent = value;

      if (hiddenInput) {
        hiddenInput.value = value;
      }

      closeDropdown();
    }
  });
};
