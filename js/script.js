// ============================================================
// HEADER EN HAMBURGERMENU
// ============================================================

// Selecties
const header = document.querySelector('header');
const menuToggle = document.querySelector('header > section > button');         // Hamburgerknop
const mobileMenu = document.querySelector('header > nav:last-of-type');         // Uitklapmenu
const closeMenu = document.querySelector('header > nav:last-of-type > button'); // Sluitknop ("X")

// Menu openen
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.setAttribute('data-open', 'true');
    mobileMenu.removeAttribute('hidden');
    header.classList.add('menu-open');
    document.body.style.overflow = 'hidden'; // Voorkom scrollen bij geopend menu
  });
}

// Menu sluiten via "X"
if (closeMenu && mobileMenu) {
  closeMenu.addEventListener('click', () => {
    mobileMenu.removeAttribute('data-open');
    mobileMenu.setAttribute('hidden', '');
    header.classList.remove('menu-open');
    document.body.style.overflow = '';
  });
}

// Menu sluiten via Escape-toets
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu?.hasAttribute('data-open')) {
    mobileMenu.removeAttribute('data-open');
    mobileMenu.setAttribute('hidden', '');
    header.classList.remove('menu-open');
    document.body.style.overflow = '';
  }
});


// ============================================================
// HEADER VERSTOPPEN / TONEN BIJ SCROLLEN
// ============================================================
let lastScroll = 0;

if (header) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Als pagina bovenaan is — toon header altijd
    if (currentScroll <= 0) {
      header.classList.remove('hide');
      return;
    }

    // Scrolt omlaag → verberg header
    if (currentScroll > lastScroll) {
      header.classList.add('hide');
      header.classList.remove('show');
    } 
    // Scrolt omhoog → toon header
    else {
      header.classList.add('show');
      header.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });
}


// ============================================================
// VIDEO AFSPELEN / PAUZEREN
// ============================================================
const playLink = document.getElementById('play-video');
const video = document.getElementById('hero-video');

if (playLink && video) {
  playLink.addEventListener('click', (e) => {
    e.preventDefault();

    if (video.paused) {
      video.play();
      playLink.textContent = 'Pauzeer video';
    } else {
      video.pause();
      playLink.textContent = 'Speel video af';
    }
  });
}
