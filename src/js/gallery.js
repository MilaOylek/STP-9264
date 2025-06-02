
const cards = document.querySelectorAll('.gallery-card');
const prev = document.querySelector('.gallery-button.prev');
const next = document.querySelector('.gallery-button.next');
const dotsContainer = document.querySelector('.gallery-dots');

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

const dots = document.querySelectorAll('.gallery-dots .dot');

const updateGallery = () => {
  cards.forEach((card, i) => {
    const offset = i - activeIndex;

    if (offset === 0) {
   
      card.style.transform = 'translateX(0) scale(1) rotateY(0deg)';
      card.style.zIndex = 2;
      card.style.opacity = 1;
    } else if (offset === -1) {
     
      card.style.transform = 'translateX(-150px) scale(0.8) rotateY(30deg)';
      card.style.zIndex = 1;
      card.style.opacity = 0.6;
    } else if (offset === 1) {
      
      card.style.transform = 'translateX(150px) scale(0.8) rotateY(-30deg)';
      card.style.zIndex = 1;
      card.style.opacity = 0.6;
    } else {
      
      card.style.transform = 'translateX(0) scale(0.6)';
      card.style.zIndex = 0;
      card.style.opacity = 0;
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
