import './style.css';

export const content = document.querySelector('#content');

export function createMainHeader() {
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

createMainHeader();
