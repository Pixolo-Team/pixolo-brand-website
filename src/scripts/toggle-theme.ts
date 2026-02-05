/** Theme toggle functionality */
export const toggleTheme = () => {
  // Sync toggle UI with theme
  const toggle = document.querySelectorAll(".mode-toggle");
  const root = document.documentElement;

  /** Sync toggle UI with theme  */
  const syncToggleUI = () => {
    // Check if dark theme is enabled
    const isDark = root.classList.contains("dark");

    // Toggle theme classes
    toggle?.forEach((t) => {
      t.classList.toggle("dark-theme", isDark);
      t.classList.toggle("light-theme", !isDark);
      t.classList.toggle("moon-active", isDark);
      t.classList.toggle("sun-active", !isDark);
    });
  };

  // Initial sync
  syncToggleUI();

  /** Toggle theme on click */
  toggle.forEach((t) => {
    /** Add event listener for click */
    t.addEventListener("click", () => {
      const isDarkNow = root.classList.toggle("dark");

      // Save theme to local storage
      localStorage.setItem("theme", isDarkNow ? "dark" : "light");

      // Sync toggle UI
      syncToggleUI();
    });
  });
};
