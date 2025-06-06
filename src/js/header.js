document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger');
  const closeBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  const navList = mobileMenu;

  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');

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

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-list a, .mobile-nav-list a');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const headerOffset = 80;

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
      link.classList.remove('active-link');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active-link');
      }
    });
  });

  const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  });
});
