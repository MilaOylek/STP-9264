document.addEventListener('DOMContentLoaded', () => {
  // ---- Пошук елементів ----
  const burgerBtn = document.querySelector('.burger'); // Ваша кнопка бургера
  const closeBtn = document.querySelector('.close-menu'); // Ваша кнопка закриття (x)
  const mobileMenu = document.querySelector('.mobile-menu'); // Сам контейнер мобільного меню
  const body = document.body; // Для блокування прокрутки

  // Новий селектор для елемента, на який ви застосовуєте .active для меню
  // Якщо 'navList' – це .mobile-nav-list, використовуйте його.
  // Якщо 'navList' – це .mobile-menu (як у попередньому коді), то воно вже є 'mobileMenu'.
  // Припустимо, ви мали на увазі .mobile-menu як цільовий елемент для .active
  const navList = mobileMenu; // Або document.querySelector('.mobile-nav-list'); якщо ви хочете, щоб клас 'active' був саме на <ul>

  // ---- Логіка відкриття/закриття мобільного меню ----
  // Використовуємо одну функцію для перемикання стану
  const toggleMobileMenu = () => {
    // Перемикаємо клас 'active' на контейнері мобільного меню
    mobileMenu.classList.toggle('active');
    // Перемикаємо клас 'no-scroll' на body
    body.classList.toggle('no-scroll');

    // Логіка показу/приховування іконок бургера/закриття
    if (mobileMenu.classList.contains('active')) {
      burgerBtn.style.display = 'none';
      closeBtn.style.display = 'block';
    } else {
      burgerBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    }
  };

  if (burgerBtn && mobileMenu && closeBtn) {
    burgerBtn.addEventListener('click', toggleMobileMenu);
    closeBtn.addEventListener('click', toggleMobileMenu);
  }

  // ---- Логіка підсвічування активних посилань при скролі ----
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-list a, .mobile-nav-list a');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const headerOffset = 80; // Висота вашого фіксованого заголовка. Налаштуйте.

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        window.pageYOffset >= sectionTop - headerOffset &&
        window.pageYOffset < sectionTop + sectionHeight - headerOffset
      ) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active-link'); // Використовуйте клас active-link як у вашому CSS
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active-link'); // Додаємо клас active-link
      }
    });
  });

  // ---- Закриття мобільного меню при кліку на посилання в ньому ----
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu); // Використовуємо ту ж функцію перемикання
  });

  // Додатково: Закриття меню при зміні розміру екрану на десктопний
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
      toggleMobileMenu(); // Закрити меню, якщо воно відкрите і екран став десктопним
    }
  });
});
