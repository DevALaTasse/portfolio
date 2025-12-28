// Project counter function
const counter = document.querySelector(".counter");
const target = +counter.dataset.target;

let hasAnimated = false;

// Controlled recursion function
const countUp = () => {
  let current = 0;
  const increment = target / 50; // vitesse

  const updateCounter = () => {
    current += increment;

    if (current < target) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
};

// Observe to detect the scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        countUp();
      }
    });
  },
  {
    threshold: 0.6,
  }
);

observer.observe(counter);
