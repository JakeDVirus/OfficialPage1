  import {debouncer} from '../utilities/tools';
  
  /*######################################################
	###               HEADER                           #####
	#######################################################*/
  

  /*===(2)=======================================================
      DropDown Navigation
  ===============================================================*/

  export let dropBtn = document.querySelectorAll(".dropBtn");
  
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

  export function buttonEqualizerOne() {
    let buttonOne = document.querySelector('.component-mainBanner .button1');
    let buttonTwo = document.querySelector('.component-mainBanner .button2');
    let buttonOneWidth = buttonOne.offsetWidth;
    let buttonTwoWidth = buttonTwo.offsetWidth;
    if(buttonOneWidth > buttonTwoWidth) {
      buttonTwo.style.width = buttonOneWidth + "px";
    } else {
      buttonOne.style.width = buttonTwoWidth + "px";
    }    

  }

  







  /*######################################################
	###                    Why Us                      #####
  #######################################################*/

  export let expandElmsParent = document.querySelectorAll('.componentAppendix .item');
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
  export let mql_uptoMdBpMax = window.matchMedia('(max-width: 61.9375em)'); 
  screenTest_uptoMdBpMax(mql_uptoMdBpMax);
  mql_uptoMdBpMax.addListener(screenTest_uptoMdBpMax);
  
  export function screenTest_uptoMdBpMax(e) {
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





    }//end of if(e.matches)
  }//end of function screenTest_uptoMdBpMax











  /*###########################################################
	#############################################################
	#############################################################
	########                                             ########
	########             screen >                    ######## //mdBp-max = tablet max
	########                                             ########
	#############################################################
	#############################################################  
  ############################################################*/
