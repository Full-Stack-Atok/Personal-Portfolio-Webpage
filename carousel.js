document.addEventListener("DOMContentLoaded", function () {
  let cards = document.querySelectorAll(".card");
  let stackArea = document.querySelector(".stack-area");

  function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
      if (card.classList.contains("away")) {
        card.style.transform = `translateY(-120vh) rotate(-48deg)`;
      } else {
        card.style.transform = `rotate(${angle}deg)`;
        angle = angle - 10;
        card.style.zIndex = cards.length - index;
      }
    });
  }

  rotateCards();


  window.addEventListener("scroll", () => {
    let distance = window.innerHeight * 0.5;
    let topVal = stackArea.getBoundingClientRect().top;
    let index = Math.floor(-1 * (topVal / distance + 1));

    for (let i = 0; i < cards.length; i++) {
      if (i <= index) {
        cards[i].classList.add("away");
      } else {
        cards[i].classList.remove("away");
      }
    }

    rotateCards();
  });
})

document.addEventListener("DOMContentLoaded", function () {
  let projectsText = document.querySelector(".left"); // Target the left side (text)
  let projectsSection = document.getElementById("projects");

  function handleScroll() {
    let sectionTop = projectsSection.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.90) { // Trigger when 75% of section is in view
      projectsText.classList.add("fade-in");
    } else {
      projectsText.classList.remove("fade-in"); // Remove when out of view
    }
  }

  window.addEventListener("scroll", handleScroll);
});
