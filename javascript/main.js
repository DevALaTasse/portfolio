// Name Nav
const name = document.getElementById("name");
const text = name.textContent;
name.textContent = "";

[...text].forEach((letter, i) => {
  const span = document.createElement("span");
  span.textContent = letter === " " ? "\u00A0" : letter;
  span.style.animationDelay = `${i * 0.20}s`;
  name.appendChild(span);
});

// Projects figure 
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.dataset.target;
  let hasAnimated = false;

  const countUp = () => {
    let current = 0;
    const increment = target / 150;

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

//
const projectSection = document.querySelector('.reveal-project');

const observerProject = new IntersectionObserver(
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

observerProject.observe(projectSection);

/* =============== Scroll effect Macbook =============== */
window.addEventListener("scroll", () => {
  const wrappers = document.querySelectorAll(".computer-wrapper");

  wrappers.forEach(wrapper => {
    const content = wrapper.querySelector(".screen-content");
    const screen = wrapper.querySelector(".screen");

    if (!content || !screen) return;

    const rect = wrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const progress = Math.min(
      Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
      1
    );

    const maxScroll = content.scrollHeight - screen.offsetHeight;

    const speed = 1.5;

    let scrollValue = progress * maxScroll * speed;
    scrollValue = Math.min(scrollValue, maxScroll);

    content.style.transform = `translateY(-${scrollValue}px)`;
  });
});



