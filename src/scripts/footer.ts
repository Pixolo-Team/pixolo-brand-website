// OTHERS //
import { scroll, transform } from "motion";

/** Function to add animation to footer  */
export const animateFooter = () => {
  // Select logo element
  const logo = document.getElementById("footerLogo");

  // Scroll-driven scale
  scroll(
    (progress) => {
      // Ease the scroll progress
      const eased = transform(progress, [0, 1], [0, 1], {
        easing: "ease-in-out",
      });

      // Map eased progress to scale 0.7 → 1.0
      const scale = 0.3 + eased * 0.7;
      logo.style.transform = `scale(${scale})`;
    },
    {
      target: logo,
      offset: ["start end", "end center"],
    },
  );
};

/** Function to remove Whatsapp sticky logo from footer  */

export function removeStickyWhatsapp() {
  // Select elements
  const footer = document.querySelector("footer");
  const whatsappBtn = document.getElementById("sticky-whatsapp");

  if (!footer || !whatsappBtn) return;

  // Logic to hide Sticky WhatsApp button when Footer is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Footer is visible -> Hide button
          whatsappBtn.style.opacity = "0";
          whatsappBtn.style.pointerEvents = "none";
        } else {
          // Footer is not visible -> Show button
          whatsappBtn.style.opacity = "1";
          whatsappBtn.style.pointerEvents = "auto";
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    },
  );

  observer.observe(footer);
}
