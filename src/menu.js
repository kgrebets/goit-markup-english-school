const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');
const overlayMenu = document.querySelector('.overlay-menu');
const menuLinks = document.querySelectorAll('.overlay-menu .nav-menu a');

burgerMenu.addEventListener('click', () => {
  overlayMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  overlayMenu.classList.remove('active');
});

overlayMenu.addEventListener('click', e => {
  if (e.target === overlayMenu) {
    overlayMenu.classList.remove('active');
  }
});
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    overlayMenu.classList.remove('active');
  });
});
