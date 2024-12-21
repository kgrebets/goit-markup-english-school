import Inputmask from 'inputmask';
import animateTextCount from './animate-text-count.js';

const form = document.getElementById('application-form');
const input = document.querySelector("#phone");
const inputs = document.querySelectorAll('input, textarea');


Inputmask({"mask": "+380 (999) 999 9999"}).mask(input);

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