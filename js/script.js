// ===============================
// Selecties
// ===============================
const menuToggle = document.querySelector('header > section > button[aria-label="Open menu"]');
const closeMenu  = document.querySelector('nav[aria-label="Uitklapmenu"] > button[aria-label="Sluit menu"]');
const nav        = document.querySelector('nav[aria-label="Uitklapmenu"]');

// Openen hamburgermenu  
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.setAttribute('data-open', 'true');
    menuToggle.setAttribute('aria-expanded', 'true');
  });
} 
// Sluiten hamburgermenu
if (closeMenu && nav) {
  closeMenu.addEventListener('click', () => {
    nav.removeAttribute('data-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
}
// Escape sneltoets hamburgermenu https://www.w3schools.com/jsref/event_onkeydown.asp
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav?.hasAttribute('data-open')) {
    nav.removeAttribute('data-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
});



// ===============================
// Header verstoppen bij scrollen "Bronvermelding: https://www.youtube.com/watch?v=lOgSy1k80tI"
// ===============================
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
      // omlaag scrollen → verberg header
      header.classList.add('hide');
      header.classList.remove('show');
    } else {
      // omhoog scrollen → toon header
      header.classList.add('show');
      header.classList.remove('hide');
    }
    lastScroll = currentScroll;
  });
}



// ===============================
// Video afspelen/pauzeren link "Bronvermelding: https://www.youtube.com/watch?v=YheuzX6zmpg"
// ===============================
const playLink = document.getElementById("play-video");
const video    = document.getElementById("hero-video");

if (playLink && video) {
  playLink.addEventListener("click", (e) => {
    e.preventDefault();

    if (video.paused) {
      video.play();
      playLink.textContent = "Pauzeer video";
    } else {
      video.pause();
      playLink.textContent = "Speel video af";
    }
  });
}


// ===============================
// Verbergen hamburgermenu voor screenreader: https://www.youtube.com/watch?v=BU7iF5nEFCY
// ===============================
menuToggle.addEventListener('click', () => {
  nav.removeAttribute('hidden'); 
  nav.setAttribute('aria-hidden', 'false');
});
closeMenu.addEventListener('click', () => {
  nav.setAttribute('hidden', '');
  nav.setAttribute('aria-hidden', 'true');
});
