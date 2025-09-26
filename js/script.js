const menuToggle = document.querySelector('.menu-toggle');
const closeMenu  = document.querySelector('.close-menu');
const nav        = document.querySelector('.main-nav');

// Openen hamburgermenu  
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
  });
} 
// Sluiten hamburgermenu
if (closeMenu && nav) {
  closeMenu.addEventListener('click', () => {
    nav.classList.remove('open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  });
}
// Escape sneltoets hamburgermenu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }
});


// Header verstoppen bij omlaag scrollen
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
// Header verbergen met omlaag scrollen     
      header.classList.add('hide');
      header.classList.remove('show');
    } else {
// Header tonen met omhoog scrollen      
      header.classList.add('show');
      header.classList.remove('hide');
    }
    lastScroll = currentScroll;
  });
}
