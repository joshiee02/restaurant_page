import './style.css';
import { ourRoots } from './ourRoots';

const content = document.querySelector('#content');

function createMainHeader() {
  const mainHeader = document.createElement('div');
  mainHeader.id = 'mainHeader';
  content.appendChild(mainHeader);

  const header = document.createElement('header');
  header.textContent = 'SWEET CRAVINGS CO.';
  mainHeader.appendChild(header);

  const ourRoots = document.createElement('a');
  ourRoots.textContent = 'OUR ROOTS';
  const ourCake = document.createElement('a');
  ourCake.textContent = 'OUR CAKE';
  const ourShop = document.createElement('a');
  ourShop.textContent = 'SHOP';

  const nav = document.createElement('nav');
  nav.appendChild(ourRoots);
  nav.appendChild(ourCake);
  nav.appendChild(ourShop);
  mainHeader.appendChild(nav);
}

function createFooter() {
  const footer = document.createElement('footer');
  content.appendChild(footer);
  footer.appendChild(document.createElement('h1')).textContent = 'SWEET CRAVINGS CO.';

  const icons = document.createElement('div');
  icons.id = 'icons';

  const mailIcon = document.createElement('box-icon');
  mailIcon.setAttribute('name', 'envelope');
  icons.appendChild(mailIcon);

  const facebookIcon = document.createElement('box-icon');
  facebookIcon.setAttribute('name', 'facebook');
  facebookIcon.setAttribute('type', 'logo');
  icons.appendChild(facebookIcon);

  const instagramIcon = document.createElement('box-icon');
  instagramIcon.setAttribute('name', 'instagram');
  instagramIcon.setAttribute('type', 'logo');
  icons.appendChild(instagramIcon);

  const pinterestIcon = document.createElement('box-icon');
  pinterestIcon.setAttribute('name', 'pinterest');
  pinterestIcon.setAttribute('type', 'logo');
  icons.appendChild(pinterestIcon);

  footer.appendChild(icons);
}

createMainHeader();
ourRoots.createImage();
ourRoots.createIntroduction();
createFooter();
