$('document').ready(function () {

  /*######################################################
	###               HEADER                           #####
	#######################################################*/
  
  /*===(1)=======================================================
    Making .row-navigation sticky when scrolled (fixed position)
  ===============================================================*/
  window.onscroll = function() {
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
  }


    

  /*######################################################
	###                 info                           #####
  #######################################################*/

  /*===(1)=======================================================
    Applying glide.js on component-info carousel
  ===============================================================*/
  var glide1 = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    //focusAt: 'center',
    peek: 65,
    autoplay: 2000,
    breakpoints: {
      768: {perView: 3, peek: 10},
      680: {perView: 2, peek: 65},
      576: {perView: 1}
    }
  })
  glide1.mount();








  /*###########################################################
	#############################################################
	#############################################################
	########                                             ########
	########             Upto mdBp-max                   ######## //mdBp-max = tablet max
	########                                             ########
	#############################################################
	#############################################################  
  ############################################################*/
  let mql_uptoMdBpMax = window.matchMedia('(max-width: 61.9375em)'); 
  screenTest_uptoMdBpMax(mql_uptoMdBpMax);
  mql_uptoMdBpMax.addListener(screenTest_uptoMdBpMax);
  
  function screenTest_uptoMdBpMax(e) {
    if(e.matches) {      
      
      /*=============================================================================
			===================     HEADER     ============================================
      ==============================================================================*/
      
      /*===(1)====================================================
			(Mobile menu)
			-->1.1 hamburger icon animation
      -->1.2 mobileSideMenu
                -->1.2.0 top-position of sidemenu == top-position of navigationRow
                -->1.2.1 open and close of sidemenu
                -->1.2.2 disable body scroling when body is open 
      =========================================================*/
      mobileMenuAnimation(); //1.1
      //mobileSideMenu(); //1.2.2

      function mobileMenuAnimation() {
        var bodyElm = document.querySelector("body");
        var hamburgerElm = document.querySelector(".pageHeader .hamburger");
        var menuRight = document.getElementById("cbp-spmenu-s2");
        var rowNavigation = document.querySelector(".pageHeader .row-navigation");
        
        var Closed = false; //for 1.1

        //1.2.0
        var requiredTopPos = rowNavigation.getBoundingClientRect().top;
        menuRight.style.top = requiredTopPos + "px"; 
        window.addEventListener('scroll', debouncer(function(e){
          requiredTopPos = rowNavigation.getBoundingClientRect().top;
          menuRight.style.top = requiredTopPos + "px";  
        })); //end of scroll event listener
        hamburgerElm.onclick = function() {
          //1.1 
          if (Closed == true) {
            this.classList.remove('open');
            this.classList.add('closed');
            Closed = false;
          } else {
            this.classList.remove('closed');
            this.classList.add('open');
            Closed =true;
          }
          
          //1.2.1
          menuRight.classList.toggle('cbp-spmenu-open');

          //1.2.2
          var componentMVNav = document.querySelector(".pageHeader .wrapper-nav");
          if (menuRight.classList.contains("cbp-spmenu-open")) {
            bodyElm.classList.add("disableScroll"); // .disableScroll rules is in _mobilemenu.scss
            componentMVNav.classList.add("bgOverlayForMenu", "bgColor");
          } else {
            bodyElm.classList.remove("disableScroll");
            componentMVNav.classList.remove("bgColor");
            setTimeout(function(){
              componentMVNav.classList.remove("bgOverlayForMenu");
            },500);
          }
        }; //end of onclick event listener

      } //end of mobileMenuAnimation




    }//end of if(e.matches)
  }//end of function screenTest_uptoMdBpMax


}); //end of media query