import createHome from "./modules/home";
import pageOnLoad from "./modules/initial-page-load";
import createMenu from "./modules/menu";
import createAbout from "./modules/about";

function init() {
    buttonEvents();
    pageOnLoad();
    createHome();
};

function buttonEvents() {

  function clearBody() {
    const content = document.getElementById('content');
    content.innerHTML = "";
  }

    document.addEventListener("click", function(e){
        const target = e.target.closest("#home"); 
        if(target){
          clearBody();
          createHome();
        }
      });

      document.addEventListener("click", function(e){
        const target = e.target.closest("#menu"); 
        if(target){
          clearBody();
          createMenu();
        }
      });

      document.addEventListener("click", function(e){
        const target = e.target.closest("#about"); 
        if(target){
          clearBody();
          createAbout();
        }
      });

}

init();