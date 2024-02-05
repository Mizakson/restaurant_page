import Cafe from './cafe.jpg';

function createHome() {
    const container = document.querySelector('#content');

    const homePage = document.createElement('div');
    homePage.classList.add('active');

    const img = new Image();
    img.src = Cafe;

    const title = document.createElement('h1');
    title.innerHTML = 'Central Cafe';

    const description = document.createElement('p');
    description.innerHTML = 'A warm cafe located at the heart of Central City';

    homePage.appendChild(title);
    homePage.appendChild(img);
    homePage.appendChild(description);

    container.appendChild(homePage);

}