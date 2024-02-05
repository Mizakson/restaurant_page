import Cafe from './cafe.jpg';

function createHome() {
    const content = document.querySelector('#content');

    const homePage = document.createElement('div');
    homePage.classList.add('active');
    homePage.id = 'homepage-body';

    const img = new Image();
    img.src = Cafe;

    const title = document.createElement('h1');
    title.innerHTML = 'Central Cafe';

    const description = document.createElement('p');
    description.innerHTML = 'A warm cafe located at the heart of Central City';

    homePage.appendChild(title);
    homePage.appendChild(img);
    homePage.appendChild(description);

    content.appendChild(homePage);

}

export default createHome;