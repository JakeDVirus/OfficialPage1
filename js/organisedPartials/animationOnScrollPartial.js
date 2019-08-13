$("document").ready(function() {
  /*######################################################
  ###               mainBanner                       #####
  #######################################################*/



  /*===(1)=======================================================
      animate the banner on scroll
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
        elm.classList.add("animated","slideInRight", "delay-300ms")
      }
      if (elm.classList.contains("subHeading")) {
        elm.classList.add("animated","slideInRight", "delay-300ms")
      }
      if (elm.classList.contains("buttons")) {
        elm.classList.add("animated","slideInRight", "delay-300ms")
      }  
      elm.style.transitionDelay = "300ms";  
      elm.classList.replace("waypoint-hide", "waypoint-reveal")
    })
  };//end of .onload function


  

  /*######################################################
  ###                   Why Us                       #####
  #######################################################*/

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



})//End of ready function