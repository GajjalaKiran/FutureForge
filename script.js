document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.getElementById("statsSection");
  const statCards = document.querySelectorAll(".stat-card");
  const statNumbers = document.querySelectorAll(".stat-number");
  
  let hasAnimated = false;

  function animateNumbers() {
      statNumbers.forEach(stat => {
          const target = +stat.getAttribute("data-target");
          let count = 0;
          const speed = target / 50; // Adjust speed by changing divisor

          const updateCount = () => {
              if (count < target) {
                  count += Math.ceil(speed);
                  stat.innerText = `${count}+`;
                  requestAnimationFrame(updateCount);
              } else {
                  stat.innerText = `${target}+`;
              }
          };

          updateCount();
      });
  }

  function handleScroll() {
      const sectionPosition = statsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition && !hasAnimated) {
          statCards.forEach(card => card.classList.add("visible"));
          animateNumbers();
          hasAnimated = true; // Ensures animation happens only once
      }
  }

  window.addEventListener("scroll", handleScroll);
});
document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.background = 'linear-gradient(to top, #007bff, #ffffff)';
            card.style.transition = 'background 0.5s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = '#ffffff';
        });
    });
});

