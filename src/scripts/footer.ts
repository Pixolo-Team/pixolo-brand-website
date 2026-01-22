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
export function hideStickyWhatsapp() {
  const footer = document.getElementById("footer");
  const whatsappBtn = document.getElementById("sticky-whatsapp");

  if (!footer || !whatsappBtn) return;

  // Animate hide/show based on footer visibility
  scroll(
    animate(whatsappBtn, {
      opacity: [1, 0],
    }),
    {
      target: footer,
    },
  );

  // Toggle pointer events based on footer visibility
  scroll((progress) => (whatsappBtn.style.pointerEvents = progress > 0.05 ? "none" : "auto"), {
    target: footer,
  });
}
