const shop = {
  createShop() {
    const section = document.createElement('section');
    section.id = 'shop';
    section.appendChild(document.createElement('div'));
    section.appendChild(document.createElement('div'));

    const firstImg = document.createElement('img');
    firstImg.id = 'img1';
    firstImg.setAttribute('src', '/src/img/img1.jpg');
    section.firstChild.appendChild(firstImg);

    const secondImg = document.createElement('img');
    secondImg.id = 'img2';
    secondImg.setAttribute('src', '/src/img/img2.jpg');
    section.children[1].appendChild(secondImg);

    const thirdImg = document.createElement('img');
    thirdImg.id = 'img3';
    thirdImg.setAttribute('src', '/src/img/img3.jpg');
    section.children[1].appendChild(thirdImg);

    content.appendChild(section);
  },
};

export default shop;
