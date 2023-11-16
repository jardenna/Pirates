const myNav = document.querySelector('.main-nav');

const path = location.pathname;
const activeClass = path.includes('index.html');

console.log(activeClass);

const navItems = [
  { linkText: 'Hjem', link: 'index.html' },
  { linkText: 'Profil', link: 'profil.html' },
  { linkText: 'Kontakt', link: 'kontakt.html' },
];
