
  /*######################################################
	###               Quality And Cost                 #####
	#######################################################*/

  /*===(1)=======================================================
  Animating Progress bar
  ===============================================================*/
  export var componentQualityAndCostSkills = document.querySelector('.component.qualityAndCostSkills')
  export var progressBarsSet1 = document.querySelectorAll(".qualityAndCostSkills .progressBar");
  
  //animation on scroll: progressBar
  export var waypoint2 = new Waypoint({
    element: componentQualityAndCostSkills,
    handler: assignProgressAnimation1,
    offset: '40%'
  })



  //assining function animation to Nodelists
  export function assignProgressAnimation1() {
    progressBarsSet1.forEach(function(elm){
      progressBarMove1(elm, elm.value);
    })
  }

  //function def: animation: progressBar
  export function progressBarMove1(elem, maxPerc) {
    //var elem = document.getElementById("myBar"); 
    elem.value = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (elem.value >= maxPerc) {
        clearInterval(id);
      } else {
        elem.value++;
      }
    }
  }







  
  /***************************************************************
  ****************************************************************
                     only for larger screen    
  ****************************************************************
  ****************************************************************/  

  
  export let mql_lgBpMin = window.matchMedia('(min-width: 62em)');
  screenTest_lgBpMin_animationOnScroll(mql_lgBpMin);
  mql_lgBpMin.addListener(screenTest_lgBpMin_animationOnScroll);
  
  
  export function screenTest_lgBpMin_animationOnScroll(e) {
    if(e.matches) {
      
      /*######################################################
      ###               mainBanner                       #####
      #######################################################*/
    
      /*===(1)=======================================================
          animate the banner on scroll 
          Only for large screen > 992px
      ===============================================================*/
      var componentMainBannerChildren = document.querySelector('.component-mainBanner').children;
      componentMainBannerChildren = Array.from(componentMainBannerChildren); //Since parent.children returns HTMLCollection, not nodeList
      var mainBannerBgImg = document.querySelector(".row-mainBanner");
    
      //backgroundImage load event tool
      
      var backgroundImageOnScroll_1 = document.createElement('img');
      backgroundImageOnScroll_1.src = getBgUrl(mainBannerBgImg);
      backgroundImageOnScroll_1.onload = function () {
        componentMainBannerChildren.forEach(function(elm){
          if (elm.classList.contains("heading")) {
            elm.classList.add("animated","slideInRight", "slow", "delay-200ms")
            elm.style.transitionDelay = "200ms";  
          } else if (elm.classList.contains("subHeading")) {
            elm.classList.add("animated","slideInRight", "slow", "delay-1s")
            elm.style.transitionDelay = "1s";  
          } else if (elm.classList.contains("buttons")) {
            elm.classList.add("animated","slideInRight", "slow", "delay-1800ms")
            elm.style.transitionDelay = "1800ms";  
          }  
          elm.classList.replace("waypoint-hide", "waypoint-reveal")
          //elm.style.transitionDelay = "300ms";  
        })
      };//end of .onload function

      

      /*######################################################
      ###                   Why Us                       #####
      #######################################################*/
    
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
              elm.classList.add('animated', 'fadeInUp');
              elm.classList.replace("waypoint-hide", "waypoint-reveal")
            }
            if (elm.classList.contains("componentContent") || elm.classList.contains("componentAppendix")) {
              elm.classList.add('animated','slideInRight');
              elm.classList.replace("waypoint-hide", "waypoint-reveal");
            }
          });
        },
        offset: '40%'
      })


    }// End of e.matches
  }//End of function screeTest_lgBpMin_animationOnScroll()

