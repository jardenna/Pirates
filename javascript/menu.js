const path = location.pathname;

const home = 'index.html';

const menu = [
  {
    link: home,
    text: 'Hjem',
    active: path.includes(home),
  },
  {
    link: 'kontakt.html',
    text: 'Kontakt',
    active: path.includes('kontakt.html'),
  },
  {
    link: 'profil.html',
    text: 'Profil',
    active: path.includes('profil.html'),
  },
];

const nav = document.querySelector('.main-nav-list');

const content = menu
  .map(
    (nav) => `
    <li class="nav-item">
        <a href=${nav.link} class=${nav.active ? 'active' : ''}> 
            ${nav.text}
        </a>
    </li>
`
  )
  .join(' ');

nav.innerHTML = content;
