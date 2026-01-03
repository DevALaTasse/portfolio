// Projects figure 
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.dataset.target;
  let hasAnimated = false;

  const countUp = () => {
    let current = 0;
    const increment = target / 50;

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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          countUp();
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(counter);
});

// =============== Lotus effect  =============== //
const wrapper = document.querySelector('.wrapper');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  {
    rootMargin: "0px 0px -30% 0px",
    threshold: 0
  }
);

observer.observe(wrapper);
