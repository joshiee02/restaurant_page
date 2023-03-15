import './style.css';
import ourRoots from './ourRoots';
import ourCake from './ourCake';

const content = document.querySelector('#content');

const addUI = {
  createImage(imgsrc) {
    const img = document.createElement('img');
    img.setAttribute('src', imgsrc);
    content.appendChild(img);
  },

  createIntro(h1, firstP, secondP, thirdP, fourthP) {
    const section = document.createElement('section');
    section.appendChild(document.createElement('h1')).textContent = h1;

    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = firstP;
    section.appendChild(firstParagraph);

    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = secondP;
    section.appendChild(secondParagraph);

    const thirdParagraph = document.createElement('p');
    thirdParagraph.textContent = thirdP;
    section.appendChild(thirdParagraph);

    if (fourthP) {
      const fourthParagraph = document.createElement('p');
      fourthParagraph.textContent = fourthP;
      section.appendChild(fourthParagraph);
    }

    const button = document.createElement('button');
    button.textContent = 'LEARN MORE ABOUT OUR CAKE';
    section.appendChild(button);

    content.append(section);
  },
};

const defaultUI = {
  createMainHeader() {
    const mainHeader = document.createElement('div');
    mainHeader.id = 'mainHeader';
    content.appendChild(mainHeader);

    const header = document.createElement('header');
    header.textContent = 'SWEET CRAVINGS CO.';
    mainHeader.appendChild(header);

    const navOurRoots = document.createElement('a');
    navOurRoots.textContent = 'OUR ROOTS';
    navOurRoots.addEventListener('click', () => {
      defaultUI.resetUI();
      defaultUI.createMainHeader();
      addUI.createImage(ourRoots.imgsrc);
      addUI.createIntro(
        ourRoots.h1,
        ourRoots.firstParagraph,
        ourRoots.secondParagraph,
        ourRoots.thirdParagraph,
        ourRoots.fourthParagraph,
      );
      defaultUI.createFooter();
    });

    const navOurCake = document.createElement('a');
    navOurCake.textContent = 'OUR CAKE';
    navOurCake.addEventListener('click', () => {
      defaultUI.resetUI();
      defaultUI.createMainHeader();
      addUI.createImage(ourCake.imgsrc);
      addUI.createIntro(
        ourCake.h1,
        ourCake.firstParagraph,
        ourCake.secondParagraph,
        ourCake.thirdParagraph,
      );
      defaultUI.createFooter();
    });

    const navOurShop = document.createElement('a');
    navOurShop.textContent = 'SHOP';
    navOurShop.addEventListener('click', () => {
      defaultUI.resetUI();
    });

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

  resetUI() {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  },
};
defaultUI.createMainHeader();
addUI.createImage(ourRoots.imgsrc);
addUI.createIntro(
  ourRoots.h1,
  ourRoots.firstParagraph,
  ourRoots.secondParagraph,
  ourRoots.thirdParagraph,
  ourRoots.fourthParagraph,
);
defaultUI.createFooter();
