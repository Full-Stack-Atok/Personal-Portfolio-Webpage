document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-container");
  const scrollSpeed = 2; // Adjust speed

  function autoScroll() {
    if (!carousel) return;

    // If at the end, reset for infinite loop
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft += scrollSpeed;
    }
  }

  // Run auto scroll every 20ms
  let scrollInterval = setInterval(autoScroll, 20);

  // Pause scrolling when hovering
  carousel.addEventListener("mouseenter", () => clearInterval(scrollInterval));
  carousel.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(autoScroll, 20);
  });
});
