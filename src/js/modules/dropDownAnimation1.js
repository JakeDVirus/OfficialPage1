  
  
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
