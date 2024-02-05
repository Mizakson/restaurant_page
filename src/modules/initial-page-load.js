function pageOnLoad() {

    const bodyEl = document.querySelector('body');

    const header = document.createElement('header');

    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home';
    homeBtn.innerHTML = 'Home';

    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu';
    menuBtn.innerHTML = 'Menu';

    const aboutBtn = document.createElement('button');
    aboutBtn.id = 'about'
    aboutBtn.innerHTML = 'About';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);

    header.appendChild(nav);

    bodyEl.appendChild(header);
};

export default pageOnLoad;