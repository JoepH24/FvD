//  Hamburger menu  
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu  = document.querySelector('.close-menu');
const nav        = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
  });
}

if (closeMenu && nav) {
  closeMenu.addEventListener('click', () => {
    nav.classList.remove('open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  });
}

// Zo kan ik sluiten met ESC 
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// Header show/hide bij het scrollen
let lastScroll = 0;
const header = document.querySelector('header');

if (header) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('hide');
      return;
    }

    if (currentScroll > lastScroll) {
      // Naar beneden scrollen om mijn header te verbergen mijn header
      header.classList.add('hide');
      header.classList.remove('show');
    } else {
      // Naar boven scrollen om mijn header te tonen
      header.classList.add('show');
      header.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });
}
