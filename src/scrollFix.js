const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});
