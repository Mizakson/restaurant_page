import createHome from "./modules/home";
import pageOnLoad from "./modules/initial-page-load";
import createMenu from "./modules/menu";
import createAbout from "./modules/about";

function init() {
    buttonEvents();
    pageOnLoad();
};

function buttonEvents() {

    document.addEventListener("click", function(e){
        const target = e.target.closest("#home"); 
        if(target){
          createHome();
        }
      });

      document.addEventListener("click", function(e){
        const target = e.target.closest("#menu"); 
        if(target){
          createMenu();
        }
      });

      document.addEventListener("click", function(e){
        const target = e.target.closest("#about"); 
        if(target){
          createAbout();
        }
      });

}

init();