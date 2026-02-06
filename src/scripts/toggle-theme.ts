/** Theme toggle functionality */
export const toggleTheme = () => {
  // Sync toggle UI with theme
  const toggleBtns = document.querySelectorAll(".mode-toggle");
  const root = document.documentElement;

  /** Sync toggle UI with theme  */
  const syncToggleUI = () => {
    // Check if dark theme is enabled
    const isDark = root.classList.contains("dark");

    // Toggle theme classes
    toggleBtns?.forEach((toggleBtn) => {
      toggleBtn.classList.toggle("dark-theme", isDark);
      toggleBtn.classList.toggle("light-theme", !isDark);
      toggleBtn.classList.toggle("moon-active", isDark);
      toggleBtn.classList.toggle("sun-active", !isDark);
    });
  };

  // Initial sync
  syncToggleUI();

  /** Toggle theme on click */
  toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", () => {
      const isDarkNow = root.classList.toggle("dark");

      // Save theme to local storage
      localStorage.setItem("theme", isDarkNow ? "dark" : "light");

      // Sync toggle UI
      syncToggleUI();
    });
  });
};
