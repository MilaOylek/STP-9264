// import Accordion from "accordion-js";
// import "accordion-js/dist/accordion.min.css";
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './js/faq.js';
// import './js/mobile-menu.js';

// Swiper.use([Navigation, Pagination]);

import './js/gallery.js';
import './js/header.js';
import './js/faq.js';
import './js/reviews.js';

import { initializeCookieModal } from './js/modal-cookies.js';

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM Content Loaded! Main script is running.');

  initializeCookieModal();
});
