/** Function for open close menu with animation */
export const menuOpenCloseAnimation = () => {
  const openBtn = document.getElementById("open-mobile-menu-button");
  const closeBtn = document.getElementById("mobile-menu-close");
  const menu = document.getElementById("mobile-menu");

  /** OPEN MOBILE MENU */
  const openMobileMenu = () => {
    if (!menu) return;

    const links = menu.querySelectorAll("a.nav-link");
    menu.classList.remove("hidden");

    // Restart animation properly
    links.forEach((link, index) => {
      link.classList.add("opacity-0");
      link.classList.remove("reverse");
      link.classList.remove("hidden-pos");
      link.classList.add("start");
      link.style.animationDelay = `${index * 0.1}s`;
    });

    menu.classList.remove("hidden");
    requestAnimationFrame(() => {
      menu.classList.remove("opacity-0");
      menu.classList.add("opacity-100");
      menu.classList.add("menu-open");
    });

    menu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  /** CLOSE MOBILE MENU */
  const closeMobileMenu = () => {
    if (!menu) return;

    const links = menu.querySelectorAll("a.nav-link");

    links.forEach((link, index) => {
      link.classList.remove("opacity-0");
      link.classList.remove("start");
      link.classList.add("reverse");
      link.style.animationDelay = `${(links.length - 1 - index) * 0.1}s`;
    });

    // reverse circle
    menu.classList.remove("menu-open");

    // Time for for the animation to get over
    const lastDelay = (links.length - 1) * 100; // in ms
    const totalTime = lastDelay + 300;

    setTimeout(() => {
      menu.classList.add("hidden");
      menu.setAttribute("aria-hidden", "true");

      // Reset reverse class
      links.forEach((link) => link.classList.remove("reverse"));

      document.body.style.overflow = "";
    }, totalTime);
  };

  openBtn?.addEventListener("click", openMobileMenu);
  closeBtn?.addEventListener("click", closeMobileMenu);

  // Close on clicking menu links
  menu?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMobileMenu);
  });
};

/** Function to animated the logo in menu background  */
export const animateMenu = () => {
  const logo = document.querySelector(".pixolo-logo-anim");

  function randomFloat() {
    if (!logo) return;

    // Get viewport dimensions
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Safe random positions so it doesn’t jump fully off-screen
    const x = Math.random() * (vw * 0.6) - vw * 0.3; // range: -30% to +30%
    const y = Math.random() * (vh * 0.6) - vh * 0.3; // range: -30% to +30%

    logo.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Move initially
  randomFloat();

  // Move every 4 seconds
  setInterval(randomFloat, 4000);
};
