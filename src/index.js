import './style.css';
import ourRoots from './ourRoots';

const content = document.querySelector('#content');

const mainUI = {
  createMainHeader() {
    const mainHeader = document.createElement('div');
    mainHeader.id = 'mainHeader';
    content.appendChild(mainHeader);

    const header = document.createElement('header');
    header.textContent = 'SWEET CRAVINGS CO.';
    mainHeader.appendChild(header);

    const navOurRoots = document.createElement('a');
    navOurRoots.textContent = 'OUR ROOTS';

    const navOurCake = document.createElement('a');
    navOurCake.textContent = 'OUR CAKE';

    const navOurShop = document.createElement('a');
    navOurShop.textContent = 'SHOP';

    const nav = document.createElement('nav');
    nav.appendChild(navOurRoots);
    nav.appendChild(navOurCake);
    nav.appendChild(navOurShop);
    mainHeader.appendChild(nav);
  },

  createFooter() {
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
  },
};

mainUI.createMainHeader();
ourRoots.createImage();
ourRoots.createIntroduction();
mainUI.createFooter();
