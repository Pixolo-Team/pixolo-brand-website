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

  const isHidden = answer.classList.contains("hidden");
  // 🔹 CLOSE ALL OTHER FAQS (ADDED)
  document.querySelectorAll("[id^='faq-answer-']").forEach((el) => {
    if (el !== answer) el.classList.add("hidden");
  });

  document.querySelectorAll("[id^='faq-icon-']").forEach((el) => {
    if (el !== icon) el.classList.remove("rotate-[-45deg]");
  });

  // Toggle current FAQ
  if (isHidden) {
    answer.classList.remove("hidden");
    icon.classList.add("rotate-[-45deg]");
  } else {
    answer.classList.add("hidden");
    icon.classList.remove("rotate-[-45deg]");
  }
});
