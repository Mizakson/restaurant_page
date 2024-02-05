function pageOnLoad() {

    const bodyEl = document.querySelector('body');

    const header = document.createElement('header');
    
    const projTitle = document.createElement('h1');
    projTitle.innerHTML = 'Restaurant Page Project';

    const projDesc = document.createElement('div');

    const projNum = document.createElement('h3');
    projNum.innerHTML = 'Odin Project JavaScript Course Project #3';

    const projAuthor = document.createElement('p');
    projAuthor.innerHTML = 'A program by Mizakson';

    projDesc.appendChild(projNum);
    projDesc.appendChild(projAuthor);

    header.appendChild(projDesc);

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

    const content = document.createElement('div');
    content.id = 'content'; 

    bodyEl.appendChild(content);
};

export default pageOnLoad;