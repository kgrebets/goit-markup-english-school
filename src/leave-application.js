import animateTextCount from './animate-text-count.js';

const intersectionObserverCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateTextCount(
        document.querySelector('.side-image-content-title'),
        1000,
        3,
      );
    }
  });
};

const options = {
  root: document,
  rootMargin: '0px',
  threshold: 0.8,
};

const observer = new IntersectionObserver(intersectionObserverCallback, options);
observer.observe(document.querySelector('.leave-an-application'));