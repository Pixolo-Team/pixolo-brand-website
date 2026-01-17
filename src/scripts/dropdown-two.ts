/** Function to initialize the dropdown */
export const initDropdown = (rootId = "dropdown") => {
  document.addEventListener("DOMContentLoaded", () => {
    // Find the specific dropdown element
    const dropdown = document.getElementById(rootId);
    if (!dropdown) return;

    // Elements inside the dropdown
    const list = dropdown.querySelector("#dropdown-options") as HTMLElement | null;
    const arrow = dropdown.querySelector("#dropdown-arrow") as HTMLElement | null;
    const selectedText = dropdown.querySelector("#dropdown-selected") as HTMLElement | null;
    const container = dropdown.closest(".flex.w-full.flex-col.gap-3") as HTMLElement | null;

    if (!list || !arrow || !selectedText) return;

    /** Toggle dropdown visibility */
    dropdown.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      // Don't toggle if clicking an option inside the list
      if (list.contains(target)) return;

      e.stopPropagation();
      const isHidden = list.classList.contains("hidden");
      isHidden ? openDropdown() : closeDropdown();
    });

    /** Handle option selection */
    list.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        selectOption(item as HTMLElement);
      });
    });

    /** Close when clicking outside */
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target as Node)) {
        closeDropdown();
      }
    });

    function openDropdown() {
      list.classList.remove("hidden");
      arrow.classList.add("rotate-180");
    }

    function closeDropdown() {
      list.classList.add("hidden");
      arrow.classList.remove("rotate-180");
    }

    /** Handles selection and triggers validation */
    function selectOption(item: HTMLElement) {
      const value = item.dataset.value ?? "";

      // 1. Update the UI text
      selectedText.textContent = value;
      selectedText.classList.remove("hidden");

      // 2. Find the hidden input inside THIS dropdown
      const hiddenInput = dropdown.querySelector('input[type="hidden"]') as HTMLInputElement | null;

      if (hiddenInput) {
        hiddenInput.value = value;

        // 3. CRITICAL: Manually trigger 'input' and 'change' events.
        // This tells form.ts that the field is no longer empty.
        hiddenInput.dispatchEvent(new Event("input", { bubbles: true }));
        hiddenInput.dispatchEvent(new Event("change", { bubbles: true }));
      }

      closeDropdown();
    }
  });
};
