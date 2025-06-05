const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');

burger.addEventListener('click', () => {
  mobileMenu.classList.remove('visually-hidden');
  document.body.classList.add('no-scroll');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('visually-hidden');
  document.body.classList.remove('no-scroll');
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('visually-hidden');
    document.body.classList.remove('no-scroll');
  });
});