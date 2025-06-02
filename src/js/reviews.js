const cards = document.querySelectorAll('.reviews-card');
const prev = document.querySelector('.rev-button.prev');
const next = document.querySelector('.rev-button.next');
const dotsContainer = document.querySelector('.rev-dots');

let activeIndex = 0;

cards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === activeIndex) dot.classList.add('active');
  dot.addEventListener('click', () => {
    activeIndex = i;
    updateGallery();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.rev-dots .dot');

const updateGallery = () => {
  cards.forEach((card, i) => {
    if (i === activeIndex) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[activeIndex].classList.add('active');
};

prev.addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  updateGallery();
});

next.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % cards.length;
  updateGallery();
});

updateGallery();
