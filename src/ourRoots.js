const ourRoots = {
  createImage() {
    const img = document.createElement('img');
    img.setAttribute('src', '/src/img/main-photo.jpg');
    content.appendChild(img);
  },

  createIntroduction() {
    const section = document.createElement('section');
    section.appendChild(document.createElement('h1')).textContent = 'OUR ROOTS';

    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = `This is the perfect place for generating visitor interest by going into more detail about yourself,
    your project, or your mission. You can talk about how your idea started, how long you've been working on it,
    what it stands for, and why it's important. The more specific you are, the more visitors can engage with what you do
    . This is also an opportunity to answer any questions they may have about you or your work.`;
    section.appendChild(firstParagraph);

    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = `Foster's long, scrolling homepage is actually an Index Page, which stacks multiple pages vertically. Under a Foster Index Page,
    any regular Page with a background image supports parallax scrolling,
    a 3D effect that creates depth and immersion.
    Learn more about Foster's Index Page here.`;
    section.appendChild(secondParagraph);

    const thirdParagraph = document.createElement('p');
    thirdParagraph.textContent = `The Foster template supports three separate navigation areas: two in the site header section
    and one in the footer section. All navigation areas can be styled independently. For example,
    to give prominence to certain pages in your site, you can include them in the header navigation.
      Other pages with secondary importance can go in the footer. You can create drop-down menus by
      placing pages in a folder in the Pages Panel. Learn more about Foster's navigation features here.`;
    section.appendChild(thirdParagraph);

    const fourthParagraph = document.createElement('p');
    fourthParagraph.textContent = `With any Squarespace template, you can use Spacer Blocks to tailor the layout of your pages.
    For more information on blocks, click here. The following is placeholder text known as “lorem ipsum,”
    which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet…`;
    section.appendChild(fourthParagraph);

    const button = document.createElement('button');
    button.textContent = 'LEARN MORE ABOUT OUR CAKE';
    section.appendChild(button);

    content.appendChild(section);
  },
};

export { ourRoots };