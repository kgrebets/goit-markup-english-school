// // Находим элементы
// const burgerMenu = document.querySelector('.burger-menu');
// const closeMenu = document.querySelector('.close-menu');
// const navList = document.querySelector('.nav-list');
// const socialLinks = document.querySelector('.social-links');

// // Открытие меню
// burgerMenu.addEventListener('click', () => {
//   navList.classList.toggle('nav-list--active');
//   socialLinks.classList.toggle('social-links--active');
//   burgerMenu.style.display = 'none';
//   closeMenu.style.display = 'block';
// });

// // Закрытие меню
// closeMenu.addEventListener('click', () => {
//   navList.classList.toggle('nav-list--active');
//   socialLinks.classList.toggle('social-links--active');
//   closeMenu.style.display = 'none';
//   burgerMenu.style.display = 'block';
// });

// const burgerMenu = document.querySelector('.burger-menu');
// const closeMenu = document.querySelector('.close-menu');
// const overlayMenu = document.querySelector('.overlay-menu');

// // Открытие меню
// burgerMenu.addEventListener('click', () => {
//   overlayMenu.classList.add('active');
//   burgerMenu.style.display = 'none';
//   closeMenu.style.display = 'block';
// });

// // Закрытие меню
// closeMenu.addEventListener('click', () => {
//   overlayMenu.classList.remove('active');
//   closeMenu.style.display = 'none';
//   burgerMenu.style.display = 'block';
// });

// Получаем элементы
const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');
const overlayMenu = document.querySelector('.overlay-menu');

// Открытие меню
burgerMenu.addEventListener('click', () => {
  overlayMenu.classList.add('active'); // Добавляем класс для показа меню
});

// Закрытие меню
closeMenu.addEventListener('click', () => {
  overlayMenu.classList.remove('active'); // Убираем класс active
});

// Закрытие при клике на затемнённый фон
overlayMenu.addEventListener('click', e => {
  if (e.target === overlayMenu) {
    overlayMenu.classList.remove('active'); // Закрываем при клике вне панели
  }
});
