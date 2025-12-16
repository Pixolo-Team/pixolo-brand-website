const slider = document.getElementById("industry-slider");
const prevBtn = document.getElementById("slide-prev");
const nextBtn = document.getElementById("slide-next");

if (slider && prevBtn && nextBtn) {
  nextBtn.addEventListener("click", () => {
    const scrollAmount = slider.clientWidth;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    const scrollAmount = slider.clientWidth;
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
}
