import createHome from "./modules/home";

function init() {
    buttonEvents();
    createHome();
};

function buttonEvents() {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const aboutBtn = document.getElementById('about');

    homeBtn.addEventListener('click', createHome);
    // menuBtn.addEventListener('click', )
    // aboutBtn.addEventListener('click', )

}

init();