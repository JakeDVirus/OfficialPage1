
  //window.onscroll = function() {
  
  export function myOnScroll1() {

    /*######################################################
	###               HEADER                           #####
	#######################################################*/
  
    /*===(1)=======================================================
        Making .row-navigation sticky when scrolled (fixed position)
    ===============================================================*/
    var rowNavigation = document.querySelector('.container-header .row-navigation');
    var rowWelcome = rowNavigation.previousElementSibling;
    var rowWelcomeHeight = rowWelcome.offsetHeight;

    var nextDomElement = rowNavigation.parentElement.nextElementSibling;

    if (window.pageYOffset > rowWelcomeHeight ) {
      rowNavigation.classList.add('sticky');
      nextDomElement.style.paddingTop = rowNavigation.offsetHeight + "px";
    } else {
      rowNavigation.classList.remove('sticky');
      nextDomElement.style.paddingTop = "0px";
    }




    
  }// end of myOnscroll function