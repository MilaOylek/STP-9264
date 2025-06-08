document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger');
  const closeBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;
  const navLinks = document.querySelectorAll('.nav-list a, .mobile-nav-list a');

  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active');
    burgerBtn.classList.toggle('open');
    body.classList.toggle('no-scroll');

    const isMenuOpen = mobileMenu.classList.contains('active');
    burgerBtn.setAttribute('aria-expanded', isMenuOpen);
  };

  if (burgerBtn && closeBtn && mobileMenu) {
    burgerBtn.addEventListener('click', toggleMobileMenu);
    closeBtn.addEventListener('click', toggleMobileMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      if (
        mobileMenu.classList.contains('active') &&
        link.closest('.mobile-nav-list')
      ) {
        toggleMobileMenu();
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1199 && mobileMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  });
});
