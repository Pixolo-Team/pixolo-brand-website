import { animate, inView, stagger } from "motion";

/** Function to initialize testimonial */
export function initTestimonials() {
  const items = document.querySelectorAll<HTMLElement>(".testimonial-item");
  const textWrapper = document.getElementById("testimonial-text");
  const textEl = document.getElementById("testimonial-content");

  const SLIDE_DURATION = 20000; 
  let activeIndex = 0;
  let intervalId: ReturnType<typeof setInterval>;

  if (!items.length || !textWrapper || !textEl) return;

  const container = items[0].parentElement;
  if (!container) return;

  // Start auto slide
  const startAutoSlide = () => {
    stopAutoSlide(); // Ensure no duplicate intervals
    intervalId = setInterval(() => {
      // Calculate next index (loop back to 0 if at the end)
      const nextIndex = (activeIndex + 1) % items.length;
      setActive(items[nextIndex]);
    }, SLIDE_DURATION);
  };

  const stopAutoSlide = () => {
    if (intervalId) clearInterval(intervalId);
  };

  container.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest(".testimonial-item") as HTMLElement | null;
    if (!target) return;

    /** Set the active testimonial item and update the displayed text. */
    setActive(target);

    startAutoSlide();
  });

  const setActive = (activeItem: HTMLElement) => {
    // If Already active then do nothing
    if (activeItem.classList.contains("active")) return;

    activeIndex = Array.from(items).indexOf(activeItem);
    
    items.forEach((item) => item.classList.remove("active"));
    activeItem.classList.add("active");

    /** Fade text update */
    textWrapper.style.opacity = "0";
    setTimeout(() => {
      textEl.textContent = activeItem.dataset.quote ?? "";
      textWrapper.style.opacity = "1";
    }, 200);
  };

  // Set first active
  setActive(items[0]);

  // Starts when the section is in view
  inView("#testimonials-section", () => {
    startAutoSlide();

    return () => stopAutoSlide();
  });
}

/** Animate the Testimonials Section */
export const animateTestimonials = () => {
  // Detect when the Section comes into the Screen
  inView("#testimonials-section", (testimonialsSection) => {
    // Animate the Section Header Part
    animate(
      testimonialsSection?.querySelectorAll(".tool-badge"),
      { opacity: [0, 1], y: ["50px", 0], scaleX: [0.6, 1], rotateX: [120, 0] },
      { duration: 0.8, delay: 0 },
    );

    // Animate the Section Header Text
    animate(
      testimonialsSection?.querySelectorAll("#header-text"),
      { opacity: [0, 1], y: ["50px", 0], scaleY: [0.4, 1] },
      { duration: 0.8, delay: 0.4 },
    );

    // Animate the Active Testimonial Text
    animate(
      testimonialsSection?.querySelectorAll("#testimonial-text"),
      { y: ["50px", 0], opacity: [0, 1] },
      { duration: 0.9, delay: 0.6 },
    );

    // Animate the Testimonial Clients
    animate(
      testimonialsSection?.querySelectorAll(".testimonial-item"),
      { opacity: [0, 1], x: ["250px", 0] },
      { duration: 0.6, ease: "linear", delay: stagger(0.2, { from: "first", startDelay: 1 }) },
    );
  });
};
