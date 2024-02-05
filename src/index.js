import createHome from "./modules/home";
import pageOnLoad from "./modules/initial-page-load";

function init() {
    buttonEvents();
    pageOnLoad();
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