export function initializeCookieModal() {
  const cookieModal = document.getElementById('cookieConsentModal');
  const acceptBtn = document.getElementById('acceptCookiesBtn');
  const declineBtn = document.getElementById('declineCookiesBtn');
  const COOKIE_NAME = 'cookieConsent';
  const COOKIE_VALUE = 'accepted';
  const COOKIE_EXPIRY_DAYS = 365;

  if (!cookieModal || !acceptBtn || !declineBtn) {
    console.warn(
      'Cookie modal elements not found yet. Retrying initialization in 100ms...'
    );
    setTimeout(initializeCookieModal, 100);
    return;
  }

  if (cookieModal.dataset.initialized === 'true') {
    console.log('Cookie modal already initialized.');
    return;
  }
  cookieModal.dataset.initialized = 'true';

  console.log(
    'Cookie Modal Elements Found and Initializing (from modal-cookies.js):'
  );
  console.log('  cookieModal:', cookieModal);
  console.log('  acceptBtn:', acceptBtn);
  console.log('  declineBtn:', declineBtn);

  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie =
      name + '=' + (value || '') + expires + '; path=/; SameSite=Lax';
  }

  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function checkCookieConsent() {
    return getCookie(COOKIE_NAME) === COOKIE_VALUE;
  }

  if (!checkCookieConsent()) {
    cookieModal.style.display = 'flex';
    console.log('Cookie modal displayed because no consent found.');
  } else {
    console.log('Cookie consent already given. Modal will not be displayed.');
    cookieModal.style.display = 'none';
  }

  acceptBtn.addEventListener('click', function () {
    console.log('Accept button clicked!');
    setCookie(COOKIE_NAME, COOKIE_VALUE, COOKIE_EXPIRY_DAYS);
    cookieModal.style.display = 'none';
    console.log('Modal hidden after Accept.');
  });

  declineBtn.addEventListener('click', function () {
    console.log('Decline button clicked!');
    cookieModal.style.display = 'none';
    console.log('Modal hidden after Decline.');
  });
}
