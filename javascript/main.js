// Règle d’or à retenir (très important),TOUJOURS encapsuler les animations JS 

// Name Nav
(function () { 
  const nameNav = document.getElementById("name");
  if (!nameNav) return;
  const text = nameNav.textContent;
  nameNav.textContent = "";

  [...text].forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter;
    span.style.animationDelay = `${i * 0.20}s`;
    nameNav.appendChild(span);
  });
})()

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

/* =============== Animation Manuscript effect =============== */
(function () {
  const element = document.getElementById("typing");
  if (!element) return;

  const text = element.textContent;
  element.textContent = "";

  let hasStarted = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasStarted) {
        hasStarted = true;
        typeWriter();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(element);

  let index = 0;
  const speed = 35;

  function typeWriter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }
})();

/* =============== Smooth Effect =============== */
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Pour éviter de réanimer plusieurs fois
            }
        });
    }, { threshold: 0.2 }); // Déclenche quand 20% de la section est visible

    sections.forEach(section => observer.observe(section));
});



