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

  /*===(2)=======================================================
      DropDown Navigation
  ===============================================================*/

  let dropBtn = document.querySelectorAll(".dropBtn");
  dropBtn.forEach(function(element, index) {
    let dropDownContent = element.querySelector(".dropDownContent");
    //mouseenter
    element.addEventListener('mouseenter', function(){
      element.classList.add("activeDropDown");
      setTimeout(function(){
        element.classList.add("hoverEffect");
      },100);
      
    });
    //mouseleave
    element.addEventListener('mouseleave', function(){
      element.classList.remove("hoverEffect");
      setTimeout(function(){
        element.classList.remove("activeDropDown");
      },300);
    });
  })


 




  /*######################################################
	###               mainBanner                       #####
  #######################################################*/
  
  /*===(1)=======================================================
    Making the buttons same size
  ===============================================================*/
  
  buttonEqualizerOne();

  function buttonEqualizerOne() {
    let buttonOne = document.querySelector('.component-mainBanner .button1');
    let buttonTwo = document.querySelector('.component-mainBanner .button2');
    buttonOneWidth = buttonOne.offsetWidth;
    buttonTwoWidth = buttonTwo.offsetWidth;
    if(buttonOneWidth > buttonTwoWidth) {
      buttonTwo.style.width = buttonOneWidth + "px";
    } else {
      buttonOne.style.width = buttonTwoWidth + "px";
    }    

  }

  /*===(1)=======================================================
      animate the banner on scroll
  ===============================================================*/
  // var waypoint1 = new Waypoint({
  //   element: document.querySelector(".col-whyUs"),
  //   handler: function() {
  //     var targetElms = document.querySelectorAll('.componentHeading, .componentImage');
  //     targetElms.forEach(function(elm){
  //       if (elm.classList.contains("componentHeading")) {
  //         elm.classList.add("animated", "slideInRight");
  //       }
  //       if (elm.classList.contains("componentImage")) {
  //         elm.classList.add('animated', 'slideInLeft');
  //       }
  //     });
  //   },
  //   offset: '25%'
  // })


  var componentMainBannerChildren = document.querySelector('.component-mainBanner').children;
  componentMainBannerChildren = Array.from(componentMainBannerChildren); //Since parent.children returns HTMLCollection, not nodeList
  var mainBannerBgImg = document.querySelector(".row-mainBanner");

  //backgroundImage load event tool
  
  var backgroundImageOnScroll_1 = document.createElement('img');
  backgroundImageOnScroll_1.src = getBgUrl(mainBannerBgImg);
  backgroundImageOnScroll_1.onload = function () {
    componentMainBannerChildren.forEach(function(elm){
      if (elm.classList.contains("heading")) {
        elm.classList.add("animated","slideInRight")
      }
      if (elm.classList.contains("subHeading")) {
        elm.classList.add("animated","slideInRight", "delay-100s")
      }
      if (elm.classList.contains("buttons")) {
        elm.classList.add("animated","slideInRight", "delay-200s")
      }    
      elm.classList.replace("waypoint-hide", "waypoint-reveal")
    })
  };//end of .onload function


  



//---------------------------------------------

  var componentWhyUs = document.querySelector(".component-whyUs_largeScreen");
  var componentWhyUsChildren = componentWhyUs.querySelectorAll('.componentHeading, .componentImage, .componentContent, .componentAppendix');
  componentWhyUsChildren.forEach(function(elm){
    elm.classList.add("waypoint-hide");
  })

  var waypoint1 = new Waypoint({
    element: document.querySelector(".component-whyUs_largeScreen"),
    handler: function() {      
      componentWhyUsChildren.forEach(function(elm){
        if (elm.classList.contains("componentHeading")) {
          elm.classList.add("animated", "slideInRight");
          elm.classList.replace("waypoint-hide", "waypoint-reveal")
        }
        if (elm.classList.contains("componentImage")) {
          elm.classList.add('animated', 'slideInLeft');
          elm.classList.replace("waypoint-hide", "waypoint-reveal")
        }
        if (elm.classList.contains("componentContent") || elm.classList.contains("componentAppendix")) {
          elm.classList.add('animated','slideInRight');
          elm.classList.replace("waypoint-hide", "waypoint-reveal")
        }
      });
    },
    offset: '25%'
  })













  /*######################################################
	###                    Why Us                      #####
  #######################################################*/

  let expandElmsParent = document.querySelectorAll('.componentAppendix .item');
  expandElmsParent.forEach(function(element,index){
    element.addEventListener("click", function(){
      element.classList.toggle("expand");
      element.firstElementChild.classList.toggle("expand");
    })
  })
  
  
  // expandElmsParent.addEventListener("click", function(e){
  //   if (e.target && e.target.nodeName =="LI") {
  //     console.log(e.target);
  //     e.target.classList.toggle("expand");
  //   }
  // });
  
 






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






      /*=============================================================================
			===================     Banner     ============================================
      ==============================================================================*/

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
          992: {perView: 3, peek: 10},
          680: {perView: 2, peek: 65},
          576: {perView: 1, peek: 65}
        }
      })
      glide1.mount();




    }//end of if(e.matches)
  }//end of function screenTest_uptoMdBpMax


}); //end of media query