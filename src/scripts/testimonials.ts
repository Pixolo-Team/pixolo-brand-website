/** Initializes the testimonial slider and updates content on avatar interaction */
export const initTestimonials = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const avatars = document.querySelectorAll("[data-testimonial-index]");
    const quoteEl = document.getElementById("testimonial-text");
    const nameEl = document.getElementById("testimonial-name");
    const companyEl = document.getElementById("testimonial-company");

    if (!avatars.length || !quoteEl || !nameEl || !companyEl) return;

    // Extract testimonial data from each avatar
    const items = Array.from(avatars).map((avatar) => ({
      quote: avatar.dataset.testimonialQuote,
      name: avatar.dataset.testimonialName,
      company: avatar.dataset.testimonialCompany,
    }));

    // Default active index = 0 (first testimonial)
    let activeIndex = 0;

    /** Updates testimonial UI whenever activeIndex changes */
    const updateUI = () => {
      avatars.forEach((avatar, i) => {
        const isActive = i === activeIndex;

        avatar.classList.toggle("scale-125", isActive);
        avatar.classList.toggle("shadow-[0_0_20px_0_#2B7FFF]", isActive);
        avatar.classList.toggle("opacity-100", isActive);
        avatar.classList.toggle("opacity-60", !isActive);
      });

      quoteEl.textContent = items[activeIndex].quote;
      nameEl.textContent = items[activeIndex].name;
      companyEl.textContent = items[activeIndex].company;
    };

    /** Activates clicked avatar */
    avatars.forEach((avatar) => {
      avatar.addEventListener("click", () => {
        activeIndex = Number(avatar.dataset.testimonialIndex);
        updateUI();
      });
    });

    // Initialize UI with first testimonial active
    updateUI();
  });
};
