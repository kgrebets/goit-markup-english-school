const body = document.body;
const overlayMenu = document.querySelector('.overlay-menu');
const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');

const closeMenuWithAnimation = () => {
  overlayMenu.classList.add('closing');
  overlayMenu.addEventListener(
    'transitionend',
    () => {
      overlayMenu.classList.remove('active', 'closing');
      body.classList.remove('no-scroll');
    },
    { once: true }
  );
};

burgerMenu.addEventListener('click', () => {
  overlayMenu.classList.add('active');
  body.classList.add('no-scroll');
});

closeMenu.addEventListener('click', closeMenuWithAnimation);
