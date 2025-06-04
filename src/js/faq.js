import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqItems = [
  {
    info: 'Is the game free to play?',
    more: 'Yes! Block Puzzle: Adventure Master is completely free with optional in-app purchases for boosts and customization.',
  },
  {
    info: 'Can I play offline?',
    more: 'Absolutely. All levels are available offline — perfect for travel and relaxed play.',
  },
  {
    info: 'How does the adventure mode work?',
    more: 'Adventure Mode lets you progress through various puzzle worlds. Complete levels to unlock new lands, each with unique backgrounds and puzzle mechanics.',
  },
  {
    info: 'Are there time limits?',
    more: 'No! The main game is completely untimed, allowing for thoughtful strategy and a relaxed pace. Some challenges offer time-based objectives for extra rewards.',
  },
  {
    info: 'Does the game include leaderboards or achievements?',
    more: 'Yes! Compete with global players and track your personal progress across multiple puzzle zones.',
  },
];

const ACCORDION_CONFIG = {
  duration: 300,
  showMultiple: false,
  openOnInit: [0],
};

const createFaqItemHTML = item => `
  <li class="ac">
    <h3 class="ac-header">
      <button class="ac-trigger" type="button">
        ${item.info}
        <span class="arrow" aria-hidden="true"></span>
      </button>
    </h3>
    <div class="ac-panel">
      <p class="ac-text">${item.more}</p>
    </div>
  </li>
`;

const handleAccordionClick = e => {
  const trigger = e.target.closest('.ac-trigger');
  if (!trigger) return;

  const item = trigger.closest('.ac');
  const panel = item.querySelector('.ac-panel');
  const arrow = trigger.querySelector('.arrow');
  const isActive = item.classList.contains('is-active');

  document.querySelectorAll('.ac-panel').forEach(p => {
    p.style.height = '0';
    p.setAttribute('aria-expanded', 'false');
  });
  document
    .querySelectorAll('.arrow')
    .forEach(a => a.classList.remove('rotate'));

  if (!isActive) {
    panel.style.height = `${panel.scrollHeight}px`;
    panel.setAttribute('aria-expanded', 'true');
    arrow.classList.add('rotate');
  }
};

const initFAQ = () => {
  const accordionContainer = document.querySelector('.accordion-container');
  if (!accordionContainer) {
    console.warn('FAQ container not found');
    return;
  }

  try {
    accordionContainer.innerHTML = faqItems.map(createFaqItemHTML).join('');
    new Accordion('.accordion-container', ACCORDION_CONFIG);
    accordionContainer.addEventListener('click', handleAccordionClick);
    document.querySelectorAll('.ac-panel').forEach((panel, index) => {
      panel.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    });
  } catch (error) {
    console.error('Error initializing FAQ:', error);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFAQ);
} else {
  initFAQ();
}
