// OTHERS //
import { animate, scroll, transform } from "motion";

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
  scroll(
    animate(whatsappBtn, {
      opacity: [1, 0],
      y: [0, 20],
    }),
    {
      target: footer,
    },
  );

  // Disable clicks when completely hidden
  scroll(
    () => {
      // Check if button is effectively invisible to disable clicks
      const isHidden = parseFloat(whatsappBtn.style.opacity) < 0.1;
      whatsappBtn.style.pointerEvents = isHidden ? "none" : "auto";
    },
    {
      target: footer,
    },
  );
}
