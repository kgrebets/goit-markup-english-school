const container = document.querySelector('.english-package-card');
// Max values
const maxRotate1 = -8;
const maxRotate2 = 11;
let rotate1 = 0;
let rotate2 = 0;
let containerVisible = false;

// Intersection Observer to detect that container is visible
const observer = new IntersectionObserver((entries) => {
  containerVisible = entries[0].isIntersecting;
}, {
  root: null,
  threshold: 0.1
});

observer.observe(container);

window.addEventListener('scroll', () => {
  if (!containerVisible) {
    rotate1 = 0;
    rotate2 = 0;
    return;
  }

  // Get the container's bounding rectangle
  const rect = container.getBoundingClientRect();
  const containerTop = rect.top;
  const containerHeight = rect.height;
  const viewportHeight = window.innerHeight;

  // Calculate linear scroll progress
  let scrollProgress = Math.min(
    Math.max((viewportHeight - containerTop) / (viewportHeight + containerHeight), 0),
    1
  );

  // Apply faster scaling for a quick response
  scrollProgress = scrollProgress * 2.5;

  // Clamp to maximum of 1
  scrollProgress = Math.min(scrollProgress, 1);

  // Calculate rotation based on adjusted scroll progress
   rotate1 = scrollProgress * maxRotate1;
   rotate2 = scrollProgress * maxRotate2;

  const stylesContainer = document.querySelector(':root');

  stylesContainer.style.setProperty('--first-card-initial-degree', `${rotate1}deg`);
  stylesContainer.style.setProperty('--second-card-initial-degree', `${rotate2}deg`);
});