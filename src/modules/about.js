function createAbout() {
    const content = document.querySelector('#content');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('active');
    aboutContainer.id = 'about-body';

    const title = document.createElement('h2');
    title.innerHTML = 'About';

    aboutContainer.appendChild(title);

    const description = document.createElement('p');
    description.innerHTML = `Central Cafe is a quaint cafe located at the heart of Central City. <br>
    Known as a great place to read, meet a friend, or enjoy the city atmosphere, <br>
    Central Cafe is located at 999 Central Square. <br>
    <br>
    To Contact us please call (123)-456-7890 <br>
    or send us an email at centralcafe@notreal.com
    <br>
    Thanks again for stopping by Central Cafe! 
    `;

    aboutContainer.appendChild(description);

    content.appendChild(aboutContainer);

};

export default createAbout;