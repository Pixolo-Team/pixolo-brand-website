// Listen for clicks on the document
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  // Find the closest FAQ wrapper
  const wrapper = target.closest("[data-faq-toggle]") as HTMLElement | null;
  if (!wrapper) return;

  // Get the matched ID from the wrapper
  const id = wrapper.dataset.faqToggle;

  // Get the FAQ answer and icon elements
  const answer = document.getElementById(`faq-answer-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);
  if (!answer || !icon) return;

  // Toggle visibility of the answer and rotate the icon
  const isHidden = answer.classList.contains("hidden");
  if (isHidden) {
    answer.classList.remove("hidden");
    icon.classList.add("rotate-[-45deg]");
  } else {
    answer.classList.add("hidden");
    icon.classList.remove("rotate-[-45deg]");
  }
});
